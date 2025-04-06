import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './screens/Home';
import Welcome from './screens/Welcome';

const App = () => {
  const BASE_PATH = import.meta.env.BASE_URL;

  
  return (
    <Routes>
      <Route path={BASE_PATH} element={<Welcome />} />
      <Route path={BASE_PATH + '/home'} element={<Home />} />
      <Route path="*" element={<Navigate to={BASE_PATH} />} />
    </Routes>
  );
};

export default App;
