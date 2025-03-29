import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useState } from "react";

const data = [
  {
    name: "Dee",
    location: "Bogor, Indonesia",
    date: "Jan 15, 2024",
    message: "Beautiful piece, love the design! 💞",
  },
  {
    name: "Sarah",
    location: "Jakarta, Indonesia",
    date: "Jan 16, 2024",
    message: "MasyaAllah, this is exactly what I was looking for! 🌟",
  },
  {
    name: "Rina",
    location: "Bandung, Indonesia",
    date: "Jan 17, 2024",
    message: "Such a meaningful design, thank you! ❤️",
  }
];

const ChatCard = ({ BASE_PATH }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0
    })
  };

  const breathingVariants = {
    initial: { x: 0 },
    animateLeft: {
      x: [0, 5, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    animateRight: {
      x: [0, -5, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative w-full h-[350px] flex items-center justify-center bg-[#131f1b] rounded-lg px-10 py-5">
      <motion.button
        onClick={handlePrevious}
        className="absolute left-1 p-2 text-[#FFEFCF] hover:text-gray-700"
        variants={breathingVariants}
        initial="initial"
        animate="animateLeft"
      >
        <ChevronLeftIcon className="h-4 w-4" />
      </motion.button>
      <div className="flex flex-col items-start justify-between h-full w-full max-w-[300px] py-4">
        <motion.img 
          src={`${BASE_PATH}/images/chat.png`} 
          alt="chat" 
          className="h-4 self-center"
          key={`top-chat-${currentIndex}`}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ 
            duration: 0.8,
            ease: "easeInOut"
          }}
        />
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ 
            duration: 0.8,
            ease: "easeInOut"
          }}
          className="text-left"
        >
          <p className="font-semibold text-[#FFEFCF]">{data[currentIndex].name}</p>
          <p className="text-[#FFEFCF]/80 text-xs">{data[currentIndex].location}</p>
          <p className="text-[#FFEFCF]/60 text-xs">{data[currentIndex].date}</p>
        </motion.div>
        <motion.h1
          key={`message-${currentIndex}`}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ 
            duration: 0.8,
            ease: "easeInOut"
          }}
          className="text-[#FFEFCF] italic text-sm"
        >
          {data[currentIndex].message}
        </motion.h1>
        <motion.img 
          src={`${BASE_PATH}/images/chat 1.png`} 
          alt="chat" 
          className="h-4 self-center"
          key={`bottom-chat-${currentIndex}`}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ 
            duration: 0.8,
            ease: "easeInOut"
          }}
        />
      </div>
      <motion.button
        onClick={handleNext}
        className="absolute right-1 p-2 text-[#FFEFCF] hover:text-gray-700"
        variants={breathingVariants}
        initial="initial"
        animate="animateRight"
      >
        <ChevronRightIcon className="h-4 w-4" />
      </motion.button>
    </div>
  );
};

export default ChatCard;
