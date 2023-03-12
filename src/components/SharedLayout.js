import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from './AppBar/AppBar';

export const SharedLayout = () => {
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Outlet />
    </>
  );
};
