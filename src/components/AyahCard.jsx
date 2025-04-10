import React from 'react';
import { motion } from 'framer-motion';

const AyahCard = ({ BASE_PATH, isVisible }) => {
  return (
    <div className="min-h-[calc(90dvh)] justify-between flex-col p-2 flex items-center pt-10">
      <img
        src={`${BASE_PATH}/images/crown.png`}
        alt="Crown"
        className="h-4"
      />
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-xl text-[#FFEFCF] leading-relaxed text-center mb-5">
          "And We made you in pairs"
        </h3>
        <p className="text-xs">
          (Surah An-Naba, 78:8)
        </p>
      </div>
      <img
        src={`${BASE_PATH}/images/crown.png`}
        alt="Crown"
        className="h-4"
      />
    </div>
  );
};

export default AyahCard;
