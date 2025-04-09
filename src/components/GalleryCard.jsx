import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GalleryCard = ({ BASE_PATH, isVisible }) => {
  const [transforms, setTransforms] = useState([]);
  
  const images = [
    'image1.jpeg',
    'image2.jpeg',
    'image3.jpeg',
  ];

  const getRandomTransform = () => ({
    rotation: (Math.random() * 6) - 3,
    translateX: (Math.random() * 10) - 5,
    translateY: (Math.random() * 10) - 5,
    opacity: 0.7 + (Math.random() * 0.3), // Random opacity between 0.7 and 1
  });

  useEffect(() => {
    setTransforms(images.map(() => getRandomTransform()));
  }, [isVisible]);

  const createVariants = (index) => ({
    hidden: { 
      opacity: 0, 
      rotate: 0,
      x: 0,
      y: 0
    },
    visible: { 
      opacity: transforms[index]?.opacity || 1,
      rotate: transforms[index]?.rotation || 0,
      x: transforms[index]?.translateX || 0,
      y: transforms[index]?.translateY || 0
    }
  });

  return (
    <div className="min-h-[calc(97dvh)] border-2 border-[#FFEFCF] justify-center flex-col text-center p-2 flex items-center">
      <div className="w-full max-w-4xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              animate={isVisible ? "visible" : "hidden"}
              className="aspect-auto overflow-hidden rounded-lg hover:scale-102"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={createVariants(index)}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={`${BASE_PATH}/images/${image}`}
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
