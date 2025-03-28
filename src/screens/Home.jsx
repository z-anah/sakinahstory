import '../styles/Home.css';

const BASE_PATH = import.meta.env.BASE_URL;

const Home = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col text-center bg-[url('/images/mobile.png')] bg-cover bg-center bg-no-repeat">
      <img src={`${BASE_PATH}/public/images/rings.png`} alt="My Image" width="120" className="mb-4" />
      <img src={`${BASE_PATH}/public/images/alhamdulillah.png`} alt="My Image" width="300" className="mb-16" />
      <p className="mb-16">BY THE GRACE OF ALLAH (SWT), WE, 3</p>
      <h1>PUTRI</h1>
      <h2>and</h2>
      <h1>FAHMI</h1>
      <div className="mb-16" />
      <p>ARE MARRIED</p>
      <div className="mb-8" />
      <p>ON</p>
      <div className="mb-8" />
      <h3>11TH APRIL 2025</h3>
      <div className="mb-8" />
      <p>FRIDAY, AT 8 O'CLOCK IN THE MORNING</p>
      <p>IN DKI JAKARTA, INDONESIA, PLANET EARTH</p>
      <div className="mb-8" />
      <p>AND WE MADE YOU BY PAIR</p>
    </div>
  );
};

export default Home;
