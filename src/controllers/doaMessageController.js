import doaMessageService from '../services/doaMessageService';

export class DoaMessageController {
  async getMessages() {
    try {
      return await doaMessageService.getMessages();
    } catch (error) {
      console.error('Failed to fetch messages:', error);
      throw error;
    }
  }

  async updateMessage(messageId, updatedMessage) {
    try {
      return await doaMessageService.updateMessage(messageId, updatedMessage);
    } catch (error) {
      console.error('Failed to update message:', error);
      throw error;
    }
  }
}

export default new DoaMessageController();
