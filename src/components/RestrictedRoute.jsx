import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getAuth } from 'redux/selectors';

export const RestrictedRoute = ({ component: Component, redirectTo }) => {
  const { isLoggedIn } = useSelector(getAuth);
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
