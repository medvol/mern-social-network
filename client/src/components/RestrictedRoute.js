import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "hooks/useAuth";

export const RestrictedRoute = ({ redirectTo = "/" }) => {
  const location = useLocation()
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) return <Navigate to={location.state.from || redirectTo} />;
  return <Outlet />;
};
