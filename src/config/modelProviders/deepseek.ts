import { ModelProviderCard } from '@/types/llm';

// ref https://platform.deepseek.com/api-docs/pricing
const DeepSeek: ModelProviderCard = {
  chatModels: [
    {
      description: 'Llama 3.1 Instruct 8B',
      displayName: 'Llama 3.1 Instruct 8B',
      enabled: true,
      id: 'meta.llama3-1-8b-instruct-v1:0',
      tokens: 4096,
    },
    {
      description: 'Llama 3.1 Instruct 70B',
      displayName: 'Llama 3.1 Instruct 70B',
      enabled: true,
      id: 'meta.llama3-1-70b-instruct-v1:0',
      tokens: 4096,
    },
    {
      description: 'Llama 3.1 Instruct 405B',
      displayName: 'Llama 3.1 Instruct 405B',
      enabled: true,
      id: 'meta.llama3-1-405b-instruct-v1:0',
      tokens: 4096,
    },
    {
      description: 'Mistral Large 2',
      displayName: 'Mistral Large 2',
      enabled: true,
      id: 'mistral.mistral-large-2407-v1:0',
      tokens: 4096,
    },
  ],
  checkModel: 'meta.llama3-1-8b-instruct-v1:0',
  id: 'deepseek',
  disableBrowserRequest: true,
  name: 'Sentient',
};

export default DeepSeek;
