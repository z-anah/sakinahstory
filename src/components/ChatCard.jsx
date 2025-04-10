import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { SSUsersService } from "../services/ss_users_service";

const ChatCard = ({ BASE_PATH, refreshTrigger }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const doaMessages = await SSUsersService.getUsersWithDoaMessages();
        setMessages(doaMessages);
        setCurrentIndex(0);
      } catch (error) {
        console.error('Failed to fetch doa messages:', error);
      }
    };
    fetchMessages();
  }, [refreshTrigger]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? messages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === messages.length - 1 ? 0 : prev + 1));
  };

  if (messages.length === 0) {
    return null;
  }

  return (
    <div className="min-h-[calc(90dvh)] flex justify-center items-center flex-col text-center p-2">
      <div className="relative w-full h-[600px] flex items-center justify-center bg-[#131f1b]/70 rounded-lg px-10 py-5">
        <button
          onClick={handlePrevious}
          className="absolute left-1 p-2 text-[#FFEFCF] hover:text-gray-700"
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </button>
        <div className="flex flex-col items-start justify-between h-full w-full max-w-[300px] py-4">
          <img
            src={`${BASE_PATH}/images/chat.png`}
            alt="chat"
            className="h-4 self-center"
          />
          <div className="flex flex-col items-start justify-start h-full w-full pt-20">
            <div className="text-left mb-16">
              <p className="font-semibold text-[#FFEFCF]">{messages[currentIndex].name}</p>
              <p className="text-[#FFEFCF]/80 text-xs">{messages[currentIndex].location}</p>
              <p className="text-[#FFEFCF]/60 text-xs">{messages[currentIndex].date}</p>
            </div>
            <h1 className="text-[#FFEFCF] italic text-sm max-h-[500px] overflow-y-auto">
              {messages[currentIndex].message}
            </h1>
          </div>
          <p className="text-[#FFEFCF]/60 text-xs self-center">
            {currentIndex + 1} / {messages.length}
          </p>
          <img
            src={`${BASE_PATH}/images/chat 1.png`}
            alt="chat"
            className="h-4 self-center"
          />
        </div>
        <button
          onClick={handleNext}
          className="absolute right-1 p-2 text-[#FFEFCF] hover:text-gray-700"
        >
          <ChevronRightIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default ChatCard;
