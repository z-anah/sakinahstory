import { EnvelopeIcon, UserIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { SSUsersService } from '../services/ss_users_service';

const CTACard = ({ user, onUserUpdate, onMessageUpdate }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    if (user?.doa_message) {
      setMessage(user.doa_message);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      await SSUsersService.updateUserMessage(user.id, message);
      setSubmitStatus('Message saved successfully!');
      if (onUserUpdate) onUserUpdate();
      if (onMessageUpdate) onMessageUpdate();
    } catch (error) {
      console.error('Error saving message:', error);
      setSubmitStatus('Failed to save message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (<div className="min-h-[calc(90dvh)] flex justify-center items-center flex-col text-center p-2">
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="space-y-1">
        <label
          htmlFor="message"
          className="flex items-center gap-2 text-[#FFEFCF] text-sm mb-2"
        >
          <UserIcon className="h-5 w-5" />
          Name
        </label>
        <input value={user.name} readOnly className="mb-7 w-full p-3 rounded-lg bg-[#131f1b] text-[#FFEFCF] placeholder-[#273933]/60 border-2 transition-all duration-200 border-transparent min-h-[50px]" />
        <label
          htmlFor="message"
          className="flex items-center gap-2 text-[#FFEFCF] text-sm mb-2"
        >
          <EnvelopeIcon className="h-5 w-5" />
          Your Message
        </label>
        <div className="text-xs text-[#FFEFCF]/60 text-left mb-2">
          Leave your doa and message for us. We would love to hear from you!
        </div>
        <textarea
          id="message"
          placeholder="Write here..."
          maxLength={300}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`w-full p-3 rounded-lg bg-[#131f1b] text-[#FFEFCF] placeholder-[#273933]/60 border-2 transition-all duration-200 ${isFocused ? 'border-[#FFEFCF]' : 'border-transparent'
            } min-h-[450px] whitespace-pre-wrap`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <div className="text-xs text-[#FFEFCF]/60 text-right mb-7">
          {message.length}/300 characters
        </div>
      </div>

      {submitStatus && (
        <div className={`text-sm mb-2 ${submitStatus.includes('Failed') ? 'text-red-500' : 'text-green-500'}`}>
          {submitStatus}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting || !message.trim()}
        className="w-full bg-[#FFEFCF] text-[#273933] h-8 text-sm rounded-lg mb-2 disabled:opacity-50"
      >
        {isSubmitting ? 'Saving...' : 'Submit'}
      </button>
    </form>
  </div>)
};

export default CTACard;
