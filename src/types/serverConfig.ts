import { DeepPartial } from 'utility-types';

import { ChatModelCard } from '@/types/llm';
import {
  GlobalLLMProviderKey,
  UserDefaultAgent,
  UserSystemAgentConfig,
} from '@/types/user/settings';

import { SystemEmbeddingConfig } from './knowledgeBase';

export interface ServerModelProviderConfig {
  enabled?: boolean;
  enabledModels?: string[];
  fetchOnClient?: boolean;
  /**
   * the model cards defined in server
   */
  serverModelCards?: ChatModelCard[];
}

export type ServerLanguageModel = Partial<Record<GlobalLLMProviderKey, ServerModelProviderConfig>>;

export interface GlobalServerConfig {
  defaultAgent?: DeepPartial<UserDefaultAgent>;
  defaultEmbed?: DeepPartial<SystemEmbeddingConfig>;
  enableUploadFileToServer?: boolean;
  enabledAccessCode?: boolean;
  enabledOAuthSSO?: boolean;
  languageModel?: ServerLanguageModel;
  oAuthSSOProviders?: string[];
  systemAgent?: DeepPartial<UserSystemAgentConfig>;
  telemetry: {
    langfuse?: boolean;
  };
}
