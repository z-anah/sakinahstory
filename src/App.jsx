import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './screens/Home';
import CardScroller from './screens/CardScroller';
// import Login from './screens/Login';

const App = () => {
  const BASE_PATH = import.meta.env.BASE_URL;

  
  return (
    <Routes>
      <Route path={BASE_PATH} element={<Home />} />
      <Route path={`${BASE_PATH}/scroll`} element={<CardScroller />} />
      <Route path="*" element={<Navigate to={BASE_PATH} />} />
    </Routes>
  );
};

export default App;
