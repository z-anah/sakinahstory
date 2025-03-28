import '../styles/Home.css';

const BASE_PATH = import.meta.env.BASE_URL;

const Home = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col text-center bg-[url('/images/mobile.png')] bg-cover bg-center bg-no-repeat">
      <img src={`${BASE_PATH}/public/images/rings.png`} alt="My Image" className="h-14 mb-5" />
      <img src={`${BASE_PATH}/public/images/alhamdulillah.png`} alt="My Image" className="h-20 mb-7" />
      <p className="text-xs mb-7">BY THE GRACE OF ALLAH (SWT), WE</p>
      <h1 className='text-3xl'>PUTRI</h1>
      <h2 className='text-3xl'>and</h2>
      <h1 className='text-3xl mb-7'>FAHMI</h1>
      <p className="text-xs mb-3">ARE MARRIED</p>
      <p className="text-xs mb-3">ON</p>
      <h3 className="text-2xl mb-3">11TH APRIL 2025</h3>
      <p className="text-xs mb-1">FRIDAY, AT 8 O'CLOCK IN THE MORNING</p>
      <p className="text-xs mb-16">IN DKI JAKARTA, INDONESIA, PLANET EARTH</p>
      <p className="text-xs mb-16">AND WE MADE YOU BY PAIR</p>
    </div>
  );
};

export default Home;
