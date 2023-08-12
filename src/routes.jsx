import React from "react";
import { Route, Routes, Navigate } from "react-router";

// pages
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import AboutPage from "./pages/about/AboutPage";
import TutorshipsPage from "./pages/tutorships/TutorshipsPage";
import ProfilePage from "./pages/profile/ProfilePage";
import Page404 from "./pages/Page404";
import SubjectPage from "./pages/subject/SubjectPage";

export default function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tutorships" element={<TutorshipsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/tutorships" element={<TutorshipsPage />} />
        <Route path="/subject/:id" element={<SubjectPage />} />
        <Route path="/404" element={<Page404 />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </div>
  );
}
