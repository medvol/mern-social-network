import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HomePage = lazy(() => import("pages/HomePage"));
const LoginPage = lazy(() => import("pages/LoginPage"));
const RegisterPage = lazy(() => import("pages/RegisterPage"));
const ProfilePage = lazy(() => import("pages/ProfilePage"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage"));

export const PagePoutes = () => {
  const isAuth = Boolean(useSelector((state) => state.token));
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}>
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route path="/home" element={<HomePage />} />
      <Route
        path="/profile/:userId"
        element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

{
  /* // isAuth ? <HomePage /> : <Navigate to="/" />; */
}
