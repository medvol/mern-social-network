import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { RestrictedRoute } from "components/RestrictedRoute";
import { PrivateRoute } from "components/PrivateRoute";

const HomePage = lazy(() => import("pages/HomePage"));
const LoginPage = lazy(() => import("pages/LoginPage"));
const RegisterPage = lazy(() => import("pages/RegisterPage"));
const ProfilePage = lazy(() => import("pages/ProfilePage"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage"));

export const PagePoutes = () => {
  return (
    <Routes>
      <Route element={<RestrictedRoute redirectTo="/home" />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route element={<PrivateRoute redirectTo="/" />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile/:userId" element={<ProfilePage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

// isAuth ? <HomePage /> : <Navigate to="/" />
