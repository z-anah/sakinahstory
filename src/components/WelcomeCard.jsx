import { motion } from "framer-motion";

const WelcomeCard = ({ BASE_PATH, isVisible }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const slideIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] border-2 border-[#FFEFCF] flex justify-center items-center flex-col text-center p-4">
      <motion.img
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        src={`${BASE_PATH}/images/bismillah.png`}
        alt="Bismillah"
        className="h-10 mb-5"
      />
      <motion.img
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.3 }}
        src={`${BASE_PATH}/images/salam.png`}
        alt="Salam"
        className="h-10 mb-7"
      />
      <motion.p
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={slideIn}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-xs mb-7"
      >
        DEAR
      </motion.p>
      <motion.h1
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.6 }}
        className='text-3xl mb-14'
      >
        BAPAK MUHAMMAD & IBU MANASIK
      </motion.h1>
      <motion.p
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={slideIn}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="text-xs mb-14"
      >
        WE HOPE THIS MESSAGE FINDS YOU WELL
        AND HAPPY TODAY, WE HAVE WONDERFUL NEWS TO SHARE WITH YOU THAT
      </motion.p>
      <motion.img
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 1.2 }}
        src={`${BASE_PATH}/images/crown.png`}
        alt="Crown"
        className="h-5 mb-28"
      />
      <motion.img
        src={`${BASE_PATH}/images/scroll.png`}
        alt="Scroll"
        className="h-5"
        animate={{
          y: [0, -10, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default WelcomeCard;
