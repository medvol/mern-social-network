import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "hooks/useAuth";

export const PrivateRoute = ({ redirectTo = "/" }) => {
  const location = useLocation();
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  if (shouldRedirect) return <Navigate to={redirectTo} state={{ from: location }} />;
  return <Outlet />;
}