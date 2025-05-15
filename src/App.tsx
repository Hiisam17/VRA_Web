import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import VRALessonList from "./pages/MainFeature/VRALessonList";
import VRADetailReport from "./pages/MainFeature/VRADetailReport";
import HomePage from "./pages/Home/HomePage";

/**
 * Main application component with routing configuration
 * Using nested routes with MainLayout as the parent layout
 */
export default function App() {
  return (
    <Router>
      <Routes>
        {/* Main Layout contains consistent header and footer */}
        <Route element={<MainLayout />}>
          {/* Child routes rendered within MainLayout */}
          <Route path="/" element={<HomePage />} />
          <Route path="/lesson-list" element={<VRALessonList />} />
          <Route path="/report-detail" element={<VRADetailReport />} />
        </Route>
        
        {/* Fallback route - redirect to home if path doesn't exist */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
