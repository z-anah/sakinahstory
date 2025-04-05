import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './screens/Home';

const App = () => {
  const BASE_PATH = import.meta.env.BASE_URL;

  
  return (
    <Routes>
      <Route path={BASE_PATH} element={<Home />} />
      <Route path="*" element={<Navigate to={BASE_PATH} />} />
    </Routes>
  );
};

export default App;
