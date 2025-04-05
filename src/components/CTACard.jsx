import { motion } from "framer-motion";
import ChatCard from "./ChatCard";
import MessageForm from "./MessageForm";

const CTACard = ({ BASE_PATH }) => (
  <div className="min-h-[calc(97dvh)] border-2 border-[#FFEFCF] flex justify-between items-center flex-col text-center p-2">
    <div className="w-full">
      <ChatCard BASE_PATH={BASE_PATH} />
    </div>
    <MessageForm />
  </div>
);

export default CTACard;
