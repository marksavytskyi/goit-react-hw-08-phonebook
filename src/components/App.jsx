import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from './SharedLayout';
import { useDispatch } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { refresh } from 'redux/auth/operations';
import { useAuth } from './hooks/useAuth';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import Home from './Home/Home';

const RegisterPage = lazy(() => import('../Pages/Register'));
const LoginPage = lazy(() => import('../Pages/Login'));
const ContactsPage = lazy(() => import('../Pages/Contacts'));

const App = () => {
  const { isRefreshing } = useAuth();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route
              path="register"
              element={
                <RestrictedRoute
                  component={RegisterPage}
                  redirectTo="/contacts"
                />
              }
            ></Route>
            <Route
              path="login"
              element={
                <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
              }
            ></Route>
            <Route
              path="contacts"
              element={
                <PrivateRoute component={ContactsPage} redirectTo="/login" />
              }
            ></Route>

            <Route path="*" element={<h1>Not Found</h1>} />
          </Route>
        </Routes>
      </Suspense>
    )
  );
};

export default App;
