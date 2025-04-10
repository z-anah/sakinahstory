import { motion } from "framer-motion";

const WelcomeCard = ({ BASE_PATH, user }) => {
  const baseMotionProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  };

  return (
    <div className="min-h-[calc(100dvh)] flex justify-between items-center flex-col text-center p-10 relative">
      <div className="flex justify-center items-center flex-col text-center" >
        <motion.img
          {...baseMotionProps}
          transition={{ duration: 0.5, delay: 0.2 }}
          src={`${BASE_PATH}/images/bismillah.png`}
          alt="Bismillah"
          className="h-10 mb-5"
        />
        <motion.img
          {...baseMotionProps}
          transition={{ duration: 0.5, delay: 0.4 }}
          src={`${BASE_PATH}/images/salam.png`}
          alt="Salam"
          className="h-10 mb-7"
        />
      </div>
      <motion.h1
        {...baseMotionProps}
        transition={{ duration: 0.5, delay: 0.8 }}
        className='text-2xl mb-14 absolute top-1/2 -translate-y-1/2 p-10'
      >
        <div>
          <motion.p
            {...baseMotionProps}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xs mb-2"
          >
            DEAR:
          </motion.p></div>
        {user.name.toUpperCase()}
      </motion.h1>
      <div className="flex justify-end items-center flex-col text-center">
        <motion.p
          {...baseMotionProps}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-xs mb-10"
        >
          WE HOPE THIS MESSAGE FINDS YOU WELL
          AND HAPPY TODAY, WE HAVE A WONDERFUL NEWS TO SHARE WITH YOU
        </motion.p>
        <motion.img
          animate={{
            y: [0, -10, 0],
            opacity: [1, 0.6, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          src={`${BASE_PATH}/images/scroll.png`}
          alt="Scroll"
          className="h-5"
        />
      </div>
    </div>
  );
};

export default WelcomeCard;
