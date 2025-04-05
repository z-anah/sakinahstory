import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const MessageForm = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <form className="w-full max-w-md">
      <div className="space-y-1">
        <label 
          htmlFor="message" 
          className="flex items-center gap-2 text-[#FFEFCF] text-sm"
        >
          <EnvelopeIcon className="h-5 w-5" />
          Your Message
        </label>
        <textarea
          id="message"
          placeholder="Write your doa and message here..."
          className={`w-full p-3 rounded-lg bg-[#131f1b] text-[#FFEFCF] placeholder-[#273933]/60 border-2 transition-all duration-200 ${
            isFocused ? 'border-[#FFEFCF]' : 'border-transparent'
          } min-h-[120px]`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#FFEFCF] text-[#273933] h-8 text-sm rounded-lg mb-2"
      >
        Submit
      </button>
      <button
        type="submit"
        className="w-full bg-[#273933] text-[#FFEFCF] h-8 text-sm rounded-lg border-2 border-[#FFEFCF]"
      >
        Send Gift
      </button>
    </form>
  );
};

export default MessageForm;
