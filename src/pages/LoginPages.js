import React, { useEffect, useState } from "react";
import LoginForm from "../component/login/LoginForm";

const LoginPages = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  // Function to check screen size
  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 768);
  };

  // Add and cleanup resize listener
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen flex">
      <section className="min-h-screen w-full bg-cyan-700">
        <div>
          <LoginForm />
        </div>
      </section>

      {/* Display second section only on desktop */}
      {isDesktop && (
        <section className="min-h-screen w-full bg-batik bg-cover bg-center flex justify-center items-center">
          <div className="text-white text-center">
            <h2 className="text-3xl font-bold">Welcome Back!</h2>
            <p className="mt-2 text-lg">Please log in to access your account.</p>
          </div>
        </section>
      )}
    </div>
  );
};

export default LoginPages;
