import { motion } from "framer-motion";

const AnnouncementCard = ({ BASE_PATH, isVisible }) => {
  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const slideIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-[calc(97dvh)] border-2 border-[#FFEFCF] flex justify-center items-center flex-col text-center p-2">
      <motion.img
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={scaleIn}
        transition={{ duration: 0.6 }}
        src={`${BASE_PATH}/images/rings.png`}
        alt="Rings"
        className="h-12 mb-5"
      />
      <motion.img
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.2 }}
        src={`${BASE_PATH}/images/alhamdulillah.png`}
        alt="Alhamdulillah"
        className="h-10 mb-7"
      />
      <motion.p
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-xs mb-7"
      >
        BY THE GRACE OF ALLAH (SWT), WE
      </motion.p>
      <motion.h1
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.6 }}
        className='text-3xl'
      >
        PUTRI
      </motion.h1>
      <motion.h2
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.8 }}
        className='text-3xl'
      >
        and
      </motion.h2>
      <motion.h1
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 1.0 }}
        className='text-3xl mb-7'
      >
        FAHMI
      </motion.h1>
      <motion.p
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="text-xs mb-2"
      >
        ARE MARRIED
      </motion.p>
      <motion.p
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="text-xs mb-2"
      >
        ON
      </motion.p>
      <motion.h3
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="text-2xl mb-3"
      >
        11TH APRIL 2025
      </motion.h3>
      <motion.p
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="text-xs mb-1"
      >
        FRIDAY, AT 8 O'CLOCK IN THE MORNING
      </motion.p>
      <motion.p
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 2.0 }}
        className="text-xs mb-14"
      >
        IN DKI JAKARTA, INDONESIA, PLANET EARTH
      </motion.p>
      <motion.p
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 2.2 }}
        className="text-xs mb-14"
      >
        AND WE MADE YOU BY PAIR
      </motion.p>
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

export default AnnouncementCard;
