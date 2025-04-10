import React from 'react';
import { motion } from 'framer-motion';

const EndCard = ({ isVisible }) => {
  return (
    <div className="min-h-[calc(100dvh)] justify-between flex-col p-2 flex items-center relative">
      <div />
      <div className="h-full justify-end flex-col p-2 flex items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full max-w-2xl mx-auto p-4 flex mb-2"
        >
          <div className="border-l-2 border-[#ffefcf59] mr-4"></div>
          <h3 className="text-md text-[#FFEFCF] leading-relaxed text-left">
            We really appreciate your duas and kind wishes. Jazakallahu khairan.
          </h3>
        </motion.div>
        <h2 className="text-3xl text-[#FFEFCF] leading-relaxed text-left mb-8">
          Putri & Fahmi
        </h2>
      </div>
      <h3 className="text-sm text-[#FFEFCF] leading-relaxed text-center mb-18 ">
        Wassalamu’alaikum Warahmatullahi Wabarakatuh
      </h3>
      <motion.a
        href="https://wa.me/6287772897512?text=Hello%20Tarondro%20Studio%2C%20I%20need%20a%20website%2Fapp%2Fsoftware%20for%20my%20project."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          y: [-10, 2, -10],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="bottom-1 px-6 py-3 bg-[#ffefcf10] backdrop-blur-sm rounded-lg border border-[#ffefcf30] shadow-lg hover:bg-[#ffefcf20] transition-all no-underline"
      >
        <div className="flex items-center space-x-4">
          <span className="text-ms font-medium text-[#FFEFCF] mr-2">Made with <span className="text-xs font-medium text-[#FFEFCF]">❤️</span> by</span>
          <span className="text-ms font-bold text-[#FFEFCF]">Tarondro Studio</span>
        </div>
      </motion.a>
    </div>
  );
};

export default EndCard;
