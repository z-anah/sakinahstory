import '../styles/Home.css';

import { motion, useAnimation } from "framer-motion";
import { useRef, useState } from "react";
import WelcomeCard from "../components/WelcomeCard";
import AnnouncementCard from "../components/AnnouncementCard";
import CTACard from "../components/CTACard";

const CARD_HEIGHT = window.innerHeight;
const BASE_PATH = import.meta.env.BASE_URL;
const cards = 3;

const Home = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCard, setVisibleCard] = useState(0);

  const snapToIndex = (index) => {
    setCurrentIndex(index);
    setVisibleCard(index);
    controls.start({
      y: -index * CARD_HEIGHT,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    });
  };

  return (
    <motion.div
      ref={containerRef}
      drag="y"
      dragConstraints={{ top: -(cards - 1) * CARD_HEIGHT, bottom: 0 }}
      onDragEnd={(event, info) => {
        const velocity = info.velocity.y;
        let newIndex = currentIndex;

        if (velocity > 50) newIndex = Math.max(0, currentIndex - 1); // Swipe Down
        else if (velocity < -50) newIndex = Math.min(cards - 1, currentIndex + 1); // Swipe Up

        snapToIndex(newIndex);
      }}
      animate={controls}
      style={{ position: "relative" }}
    >
      <motion.div style={{ height: CARD_HEIGHT }}>
        <div className="min-h-screen bg-[url('/images/mobile.png')] bg-cover bg-center bg-no-repeat p-2">
          <WelcomeCard BASE_PATH={BASE_PATH} isVisible={visibleCard === 0} />
        </div>
      </motion.div>
      <motion.div style={{ height: CARD_HEIGHT }}>
        <div className="min-h-screen bg-[url('/images/mobile.png')] bg-cover bg-center bg-no-repeat p-2">
          <AnnouncementCard BASE_PATH={BASE_PATH} isVisible={visibleCard === 1} />
        </div>
      </motion.div>
      <motion.div style={{ height: CARD_HEIGHT }}>
        <div className="min-h-screen bg-[url('/images/mobile.png')] bg-cover bg-center bg-no-repeat p-2">
          <CTACard BASE_PATH={BASE_PATH} isVisible={visibleCard === 2} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;

