import { motion } from "framer-motion";
import ChatCard from "./ChatCard";
import MessageForm from "./MessageForm";

const CTACard = ({ BASE_PATH }) => (
  <div className="min-h-[calc(97dvh)] border-2 border-[#FFEFCF] flex justify-center items-center flex-col text-center p-2">
    <MessageForm />
  </div>
);

export default CTACard;
