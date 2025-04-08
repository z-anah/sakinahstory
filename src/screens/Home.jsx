import '@styles/Home.css';
import { motion, useAnimation } from "framer-motion";
import { useRef, useState } from "react";
import { CARD_HEIGHT, DRAG_VELOCITY_THRESHOLD, SPRING_CONFIG } from "../config/constants";
import CardContainer from "@components/CardContainer";
import WelcomeCard from "@components/WelcomeCard";
import AnnouncementCard from "@components/AnnouncementCard";
import GalleryTextCard from "@components/GalleryTextCard";
import GalleryCard from "@components/GalleryCard";
import CTACard from "@components/CTACard";
import ChatCard from '@components/ChatCard';

const BASE_PATH = import.meta.env.BASE_URL;
const cards = 6;

const Home = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCard, setVisibleCard] = useState(0);

  const cardComponents = [
    { Component: WelcomeCard },
    { Component: AnnouncementCard },
    { Component: GalleryTextCard },
    { Component: GalleryCard },
    { Component: CTACard },
    { Component: ChatCard }
  ];

  const snapToIndex = (index) => {
    setCurrentIndex(index);
    setVisibleCard(index);
    controls.start({
      y: -index * CARD_HEIGHT,
      transition: SPRING_CONFIG
    });
  };

  return (
    <motion.div
      className='home'
      ref={containerRef}
      drag="y"
      dragConstraints={{ 
        top: -(cards - 1) * CARD_HEIGHT, 
        bottom: currentIndex === cards - 1 ? -(cards - 1) * CARD_HEIGHT : 0 
      }}
      onDragEnd={(event, info) => {
        const velocity = info.velocity.y;
        let newIndex = currentIndex;

        if (velocity > DRAG_VELOCITY_THRESHOLD && currentIndex > 0) {
          newIndex = currentIndex - 1;
        } else if (velocity < -DRAG_VELOCITY_THRESHOLD && currentIndex < cards - 1) {
          newIndex = currentIndex + 1;
        }

        snapToIndex(newIndex);
      }}
      animate={controls}
      style={{ position: "relative" }}
    >
      {cardComponents.map(({ Component }, index) => (
        <CardContainer key={index}>
          <Component BASE_PATH={BASE_PATH} isVisible={visibleCard === index} />
        </CardContainer>
      ))}
    </motion.div>
  );
};

export default Home;

