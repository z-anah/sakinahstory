import { motion } from "framer-motion";

const AnnouncementCard = ({ BASE_PATH, isVisible }) => {
  return (
    <div className="min-h-[calc(90dvh)] border-2 border-[#FFEFCF] flex justify-between items-center flex-col text-center p-10">
      <div className="flex flex-col items-center justify-center">   
        <img
          src={`${BASE_PATH}/images/rings.png`}
          alt="Rings"
          className="h-12 mb-5"
        />
        <img
          src={`${BASE_PATH}/images/alhamdulillah.png`}
          alt="Alhamdulillah"
          className="h-10 mb-10"
        />
        <p className="text-xs">
          BY THE GRACE OF ALLAH (SWT), WE
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className='text-3xl mb-2'>
          PUTRI
        </h1>
        <h2 className='text-3xl mb-2'>
          and
        </h2>
        <h1 className='text-3xl'>
          FAHMI
        </h1>
      </div>
      <div className="bg-[#FFEFCF] text-black shadow-lg rounded-xl flex justify-between items-center flex-col text-center p-4 max-w-md mx-auto">
        <h5 className="text-md mb-2 font-bold">
          ARE MARRIED
        </h5>
        <h4 className="text-xs mb-2">
          ON FRIDAY, <span className="text-2xl">11<sup className="text-xs">th</sup></span> APRIL <span className="text-2xl">2025</span>
        </h4>
        <h5 className="text-xs">
          AT KUA CIRACAS, IN DKI JAKARTA, INDONESIA, PLANET EARTH
        </h5>
      </div>
    </div>
  );
};

export default AnnouncementCard;
