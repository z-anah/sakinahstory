'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function EnvelopeCard() {
  const [isOpening, setIsOpening] = useState(false);
  const router = useRouter();

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(() => {
      router.push('/home');
    }, 1000); // Delay navigation until animation completes
  };

  return (
    <div className="relative cursor-pointer" onClick={handleOpen}>
      <div className={`transform transition-all duration-1000 ${isOpening ? 'scale-150 opacity-0' : 'scale-100'}`}>
        <Image
          src="/envelope-closed.png"
          alt="Envelope"
          width={300}
          height={200}
          className={`transition-opacity duration-500 ${isOpening ? 'opacity-0' : 'opacity-100'}`}
        />
      </div>
      <button
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                   px-6 py-2 bg-pink-500 text-white rounded-full shadow-lg
                   transition-all duration-300 hover:bg-pink-600
                   ${isOpening ? 'opacity-0' : 'opacity-100'}`}
      >
        Open
      </button>
    </div>
  );
}
