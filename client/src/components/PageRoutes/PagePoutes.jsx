import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { RestrictedRoute } from "components/RestrictedRoute";
import { PrivateRoute } from "components/PrivateRoute";

const HomePage = lazy(() => import("pages/HomePage"));
const MainPage = lazy(() => import("pages/MainPage"));
const LoginPage = lazy(() => import("pages/LoginPage"));
const RegisterPage = lazy(() => import("pages/RegisterPage"));
const ProfilePage = lazy(() => import("pages/ProfilePage"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage"));

export const PagePoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route element={<RestrictedRoute redirectTo="/main" />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route element={<PrivateRoute redirectTo="/" />}>
        <Route path="/main" element={<MainPage />} />
        <Route path="/profile/:userId" element={<ProfilePage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
