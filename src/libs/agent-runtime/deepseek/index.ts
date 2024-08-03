import { ModelProvider } from '../types';
import { LobeOpenAICompatibleFactory } from '../utils/openaiCompatibleFactory';

export const LobeDeepSeekAI = LobeOpenAICompatibleFactory({
  baseURL: 'https://hp3hebj84f.us-west-2.awsapprunner.com/v1',
  debug: {
    chatCompletion: () => process.env.DEBUG_DEEPSEEK_CHAT_COMPLETION === '1',
  },
  provider: ModelProvider.DeepSeek,
});
