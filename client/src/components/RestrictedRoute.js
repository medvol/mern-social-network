import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "hooks/useAuth";

export const RestrictedRoute = ({ redirectTo = "/" }) => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) return <Navigate to={redirectTo} />;
  return <Outlet />;
};
