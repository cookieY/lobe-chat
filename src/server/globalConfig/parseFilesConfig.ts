import { DEFAULT_FILES_CONFIG } from '@/const/settings/knowledge';
import { SystemEmbeddingConfig } from '@/types/knowledgeBase';
import { FilesConfig } from '@/types/user/settings/filesConfig';

const protectedKeys = Object.keys(DEFAULT_FILES_CONFIG);

export const parseFilesConfig = (envString: string = ''): SystemEmbeddingConfig => {
  if (!envString) return DEFAULT_FILES_CONFIG;
  const config: FilesConfig = {} as any;

  // 处理全角逗号和多余空格
  let envValue = envString.replaceAll('，', ',').trim();

  const pairs = envValue.split(',');

  for (const pair of pairs) {
    const [key, value] = pair.split('=').map((s) => s.trim());

    if (key && value) {
      const [provider, ...modelParts] = value.split('/');
      const model = modelParts.join('/');

      if ((!provider || !model) && key !== 'query_model') {
        throw new Error('Missing model or provider value');
      }

      if (key === 'query_model' && value === '') {
        throw new Error('Missing query mode value');
      }

      if (protectedKeys.includes(key)) {
        if (key === 'query_model') {
          config.query_model = value;
        } else {
          config[key as keyof FilesConfig] = {
            model: model.trim(),
            provider: provider.trim(),
          } as any;
        }
      }
    } else {
      throw new Error('Invalid environment variable format');
    }
  }

  return config;
};