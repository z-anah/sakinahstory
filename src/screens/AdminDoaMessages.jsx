import AdminMenu from "@components/admin/AdminMenu";
import { useState, useEffect } from "react";
import { ArrowPathIcon } from '@heroicons/react/24/solid';
import doaMessageController from '../controllers/doaMessageController';

const AdminDoaMessages = () => {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    try {
      const data = await doaMessageController.getMessages();
      setMessages(data);
    } catch (error) {
      console.error('Failed to load messages:', error);
    }
  };

  const handleSubmit = async (index, event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await doaMessageController.updateMessage(index, messages[index]);
    } catch (error) {
      console.error('Failed to save message:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mb-6">
        <AdminMenu />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Doa Messages</h1>
          {loading && (
            <span className="text-sm text-gray-500">Saving changes...</span>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {messages.map((message, index) => (
            <form 
              key={index} 
              onSubmit={(e) => handleSubmit(index, e)} 
              className="bg-white rounded-lg shadow-lg p-6 transition-all duration-200 hover:shadow-xl border border-gray-100"
            >
              <div className="mb-6 pb-4 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{message.name}</h2>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{new Date(message.updated_doa_message_at).toLocaleString()}</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full">{message.place_at}</span>
                </div>
              </div>
              <div className="prose mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Doa Message
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors min-h-[120px] resize-none block"
                  defaultValue={message.doa_message}
                  rows="3"
                  maxLength={500}
                  onChange={(e) => {
                    const remaining = 500 - e.target.value.length;
                    e.target.nextElementSibling.textContent = `${remaining} characters remaining`;
                  }}
                />
                <p className="text-sm text-gray-500 mt-1 text-right">500 characters remaining</p>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed flex justify-center items-center space-x-2"
              >
                {loading ? (
                  <>
                    <ArrowPathIcon className="h-5 w-5 animate-spin" />
                    <span>Saving...</span>
                  </>
                ) : (
                  "Save Changes"
                )}
              </button>
            </form>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminDoaMessages;