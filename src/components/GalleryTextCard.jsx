import React from 'react';
import { motion } from 'framer-motion';

const GalleryTextCard = ({ isVisible }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeInUpImg = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 0.20, y: 0 }
  };

  return (
    <div className="min-h-[calc(97dvh)] justify-center flex-col p-2 flex items-center">
        <motion.img
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUpImg}
          transition={{ duration: 0.6, delay: 0.1 }}
          src={`${import.meta.env.BASE_URL}/images/cam.png`}
          alt="Gallery"
          className='h-[150px]'
        />
      <motion.div 
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full max-w-2xl mx-auto p-4 flex mt-12"
      >
        <div className="border-l-2 border-[#ffefcf59] mr-4"></div>
        <h3 className="text-xl text-[#FFEFCF] leading-relaxed text-left">
          "Though we chose to celebrate our akad nikah in an intimate and private setting,
          our hearts are full, and we'd love to share a glimpse of that cherished moment
          with you. Here are a few photos."
        </h3>
      </motion.div>
    </div>
  );
};

export default GalleryTextCard;
