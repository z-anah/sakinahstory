import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '@screens/Home';
import Welcome from '@screens/Welcome';
import AdminLogin from '@screens/AdminLogin';
import AdminDashboard from '@screens/AdminDashboard';
import AdminUsers from '@screens/AdminUsers';
import AdminDoaMessages from '@screens/AdminDoaMessages';
import AdminURL from '@screens/AdminURL';
import AdminUserEdit from '@screens/AdminUserEdit';
import NotFound from '@screens/NotFound';

const App = () => {
  const BASE_PATH = import.meta.env.BASE_URL;

  return (
    <Routes>
      <Route element={<Welcome />} path={BASE_PATH + '/open/user/:id'} />
      <Route element={<Home />} path={BASE_PATH + '/breaking-news/user/:id'} />
      <Route element={<AdminURL />} path={BASE_PATH + '/admin/url'} />
      <Route element={<AdminLogin />} path={BASE_PATH + '/admin/login'} />
      <Route element={<AdminDashboard />} path={BASE_PATH + '/admin/dashboard'} />
      <Route element={<AdminUsers />} path={BASE_PATH + '/admin/users'} />
      <Route element={<AdminUserEdit />} path={BASE_PATH + '/admin/user/:id/edit'} />
      <Route element={<AdminDoaMessages />} path={BASE_PATH + '/admin/doa-messages'} />

      <Route element={<NotFound />} path="*" />
    </Routes>
  );
};

export default App;
