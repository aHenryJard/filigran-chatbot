import { registerWebComponents } from './register';
import { parseChatbot, injectChatbotInWindow } from './window';
export { Bubble } from './features/bubble';

registerWebComponents();

const chatbot = parseChatbot();

injectChatbotInWindow(chatbot);

export default chatbot;
