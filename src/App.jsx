import { Route, Routes, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Welcome from './screens/Welcome';
import Home from './screens/Home';

const App = () => {
  const BASE_PATH = import.meta.env.BASE_URL;

  return (
    <Helmet>
      <meta property="og:title" content="My Page Title" />
      <meta property="og:description" content="Page description here" />
      <meta property="og:image" content="https://maxst.icons8.com/vue-static/landings/page-index/upgrade-tools/megaCreator1x.webp" />
      <meta property="og:url" content="https://yourdomain.com/page-link" />
      <meta name="twitter:card" content="summary_large_image" />
      <Routes>
        <Route path={BASE_PATH} element={<Welcome />} />
        <Route path={`${BASE_PATH}/home`} element={<Home />} />
        <Route path="*" element={<Navigate to={BASE_PATH} />} />
      </Routes>
    </Helmet>
  );
};

export default App;
