import React from 'react';
import { motion } from 'framer-motion';

const GalleryCard = ({ BASE_PATH, isVisible }) => {
  const images = [
    '04.jpeg',
    '07.jpeg',
    '09.jpeg',
    '01.jpeg',
  ];

  return (
    <div className="min-h-[calc(90dvh)] border-2 border-[#FFEFCF] justify-center flex-col text-center p-2 flex items-center">
      <div className="w-full max-w-4xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              key={index}
              className="aspect-auto overflow-hidden rounded-lg hover:scale-102"
            >
              <img
                src={`${BASE_PATH}/images/pictures/${image}`}
                alt={`Wedding moment ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
