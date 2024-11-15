import { createTRPCClient, httpBatchLink } from '@trpc/client';
import fetch, { RequestInit } from 'node-fetch';
import fs from 'node:fs';
import { Agent } from 'node:https';
import superjson from 'superjson';
import urlJoin from 'url-join';

import { appEnv } from '@/config/app';
import { serverDBEnv } from '@/config/db';
import { JWTPayload, LOBE_CHAT_AUTH_HEADER } from '@/const/auth';
import { KeyVaultsGateKeeper } from '@/server/modules/KeyVaultsEncrypt';

import type { AsyncRouter } from './index';

export const createAsyncServerClient = async (userId: string, payload: JWTPayload) => {
  const gateKeeper = await KeyVaultsGateKeeper.initWithEnvKey();
  const headers: Record<string, string> = {
    Authorization: `Bearer ${serverDBEnv.KEY_VAULTS_SECRET}`,
    [LOBE_CHAT_AUTH_HEADER]: await gateKeeper.encrypt(JSON.stringify({ payload, userId })),
  };

  if (process.env.VERCEL_AUTOMATION_BYPASS_SECRET) {
    headers['x-vercel-protection-bypass'] = process.env.VERCEL_AUTOMATION_BYPASS_SECRET;
  }
  let agent: Agent;

  if (process.env.PFX_PATH) {
    const pfx = fs.readFileSync(process.env.PFX_PATH);

    // Configure the HTTPS agent to use the .p12 file
    agent = new Agent({
      passphrase: process.env.PFX_PASSPHRASE, // Use the passphrase if the .p12 file is encrypted
      pfx, // Use the passphrase if the .p12 file is encrypted
      rejectUnauthorized: true, // Ensure server certificate validation
    });
  }

  return createTRPCClient<AsyncRouter>({
    links: [
      httpBatchLink({
        fetch: (url, options) => {
          const fetchOptions = { ...options, agent } as RequestInit;
          return fetch(url.toString(), fetchOptions);
        },
        headers,
        transformer: superjson,
        url: urlJoin(appEnv.APP_URL!, '/trpc/async'),
      }),
    ],
  });
};
