import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getAuth } from 'redux/selectors';

export const PrivateRoute = ({ component: Component, redirectTo }) => {
  const { isLoggedIn } = useSelector(getAuth);
  return isLoggedIn ? <Component /> : <Navigate to={redirectTo} />;
};
