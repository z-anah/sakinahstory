import '../styles/Home.css';

const BASE_PATH = import.meta.env.BASE_URL;
console.log(`BASE_PATH: ${BASE_PATH}`);

const Home = () => {
  return (
    <div className="background">
      <img src={`${BASE_PATH}/public/images/rings.png`} alt="My Image" width="120" style={{ marginBottom: '1em' }} />
      <img src={`${BASE_PATH}/public/images/alhamdulillah.png`} alt="My Image" width="300" style={{ marginBottom: '4em' }} />
      <p style={{ marginBottom: '4em' }}>BY THE GRACE OF ALLAH (SWT), WE, 3</p>
      <h1>PUTRI</h1>
      <h2>and</h2>
      <h1>FAHMI</h1>
      <div style={{ marginBottom: '4em' }} />
      <p>ARE MARRIED</p>
      <div style={{ marginBottom: '2em' }} />
      <p>ON</p>
      <div style={{ marginBottom: '2em' }} />
      <h3>11TH APRIL 2025</h3>
      <div style={{ marginBottom: '2em' }} />
      <p>FRIDAY, AT 8 O'CLOCK IN THE MORNING</p>
      <p>IN DKI JAKARTA, INDONESIA, PLANET EARTH</p>
      <div style={{ marginBottom: '2em' }} />
      <p>AND WE MADE YOU BY PAIR</p>
    </div>
  );
};

export default Home;
