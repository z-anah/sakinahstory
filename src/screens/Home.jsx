import { useState, useEffect } from 'react';
import '@styles/Home.css';
import WelcomeCard from "@components/WelcomeCard";
import AnnouncementCard from "@components/AnnouncementCard";
import GalleryTextCard from "@components/GalleryTextCard";
import GalleryCard from "@components/GalleryCard";
import CTACard from "@components/CTACard";
import ChatCard from '@components/ChatCard';
import AyahCard from '@components/AyahCard';
import EndCard from '@components/EndCard';
import { useParams } from 'react-router-dom';
import { SSUsersService } from '../services/ss_users_service';

const BASE_PATH = import.meta.env.BASE_URL;

const Home = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [doaRefreshTrigger, setDoaRefreshTrigger] = useState(0);

  const { id } = useParams();

  const fetchUser = async () => {
    try {
      if (id) {
        const userData = await SSUsersService.getUser(id);
        setUser(userData);
      }
    } catch (error) {
      console.error('Failed to fetch user:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  const refreshDoaMessages = () => {
    setDoaRefreshTrigger(prev => prev + 1);
  };

  const baseComponents = [
    { Component: WelcomeCard },
    { Component: AnnouncementCard },
    { Component: AyahCard },
  ];

  const galleryComponent = [
    { Component: GalleryTextCard },
    { Component: GalleryCard }
  ];

  const endComponents = [
    { Component: ChatCard, props: { refreshTrigger: doaRefreshTrigger } },
    { Component: CTACard, props: { onUserUpdate: fetchUser, onMessageUpdate: refreshDoaMessages } },
    { Component: EndCard },
  ];

  const cardComponents = [
    ...baseComponents,
    ...(user?.can_read_picture ? galleryComponent : []),
    ...endComponents
  ];

  if (loading) {
    return <div className="min-h-screen bg-[url('/images/mobile.png')] bg-cover bg-center bg-repeat-y p-2">
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin text-4xl">❤️</div>
      </div>
    </div>;
  }

  return (
    <>
      {cardComponents.map(({ Component, props = {} }, index) => (
        <div key={index} className="home min-h-screen bg-[url('/images/mobile.png')] bg-cover bg-center bg-repeat-y p-2">
          <Component BASE_PATH={BASE_PATH} isVisible={true} user={user} {...props} />
        </div>
      ))}
    </>
  );
};

export default Home;

