import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

/**
 * MainLayout component that provides consistent header and footer across pages
 * Uses React Router's Outlet for rendering child routes
 */
function MainLayout() {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const location = useLocation();

  // Reset scroll position when the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToLoginForm = () => {
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
      const headerHeight = document.querySelector(".header")?.clientHeight || 80;
      window.scrollTo({
        top: loginForm.offsetTop - headerHeight - 60,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header 
        scrollToLoginForm={scrollToLoginForm}
        setShowRegisterForm={setShowRegisterForm}
      />
      
      {/* Main Content - Will be replaced by the matched route */}
      <main className="flex-grow pt-20">
        <Outlet context={{ showRegisterForm, setShowRegisterForm, scrollToTop, scrollToLoginForm }} />
      </main>
      
      <Footer />
    </div>
  );
}

export default MainLayout;