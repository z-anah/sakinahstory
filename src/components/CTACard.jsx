import { motion } from "framer-motion";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import ChatCard from "./ChatCard";

const CTACard = ({ BASE_PATH }) => (
  <div className="min-h-[calc(100vh-6rem)] border-2 border-[#FFEFCF] flex justify-between items-center flex-col text-center p-2">
    <div className="w-full">
    </div>
    <div className="w-full">
      <ChatCard BASE_PATH={BASE_PATH} />
    </div>
    <form className="w-full max-w-md space-y-4 mt-8">
      <div className="space-y-2">
        <label 
          htmlFor="message" 
          className="flex items-center gap-2 text-[#FFEFCF] text-sm mb-2"
        >
          <EnvelopeIcon className="h-5 w-5" />
          Your Message
        </label>
        <textarea
          id="message"
          placeholder="Write your doa and message here..."
          className="w-full p-3 rounded-lg bg-[#131f1b] text-[#FFEFCF] placeholder-[#273933]/60 border-none mb-1 min-h-[120px] resize-y"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#FFEFCF] text-[#273933] py-1.5 h-8 text-sm rounded-lg mb-2"
      >
        Submit
      </button>
      <button
        type="submit"
        className="w-full bg-[#273933] text-[#FFEFCF] py-1.5 h-8 text-sm rounded-lg border-2 border-[#FFEFCF]"
      >
        Send Gift
      </button>
    </form>
  </div>
);

export default CTACard;
