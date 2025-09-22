import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Background from "../component/Background";
import Footer from "../component/Footer";
import Loader3D from "../component/Loader3D";
import useImageLoader from "../hooks/useImageLoader";

const BANNER_IMAGE = "/Login.webp";

const Login: React.FC = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [animate, setAnimate] = useState<boolean>(false);
  const navigate = useNavigate();
  const { loaded: bannerLoaded, failed: bannerFailed } = useImageLoader(BANNER_IMAGE);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    login(username, password);

    if (rememberMe) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }

    navigate("/");
  };

  const handleSignUpClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    if (window.innerWidth >= 768) {
      setAnimate(false);
      setTimeout(() => {
        navigate("/signup");
      }, 2000);
    } else {
      navigate("/signup");
    }
  };

  useEffect(() => {
    if (!bannerLoaded) {
      return;
    }

    if (window.innerWidth >= 768) {
      const timeout = window.setTimeout(() => setAnimate(true), 0);
      return () => window.clearTimeout(timeout);
    }

    setAnimate(true);
  }, [bannerLoaded]);

  return (
    <section className="h-screen w-screen absolute top-0 left-0 z-20 grid md:grid-cols-2">
      <Background />

      <div
        className={`hidden md:flex relative flex-col justify-center items-center bg-[#060b26] bg-no-repeat bg-cover bg-center z-30 md:absolute md:h-screen w-screen h-screen
        md:transition-all md:duration-[2000ms] md:ease-in-out
        ${animate ? "md:w-[50vw] md:right-[50vw]" : "md:w-[100vw] md:right-0"}`}
        style={bannerLoaded && !bannerFailed ? { backgroundImage: `url(${BANNER_IMAGE})` } : undefined}
      >
        {!bannerLoaded ? (
          <div className="absolute inset-0 flex items-center justify-center bg-[#060b26]/80 backdrop-blur-md">
            <Loader3D label="Loading visual" />
          </div>
        ) : null}

        {bannerLoaded ? (
          <>
            <h2 className="md:text-[1.5vw] text-2xl">INSPIRED BY THE FUTURE</h2>
            <h1 className="font-semibold md:text-[2.35vw] text-3xl md:pt-[.4vw] pt-1">
              THE Vision UI DASHBOARD
            </h1>
            {bannerFailed ? (
              <p className="mt-6 text-sm text-secondary">
                We couldn't load the hero image. Please try refreshing the page.
              </p>
            ) : null}
          </>
        ) : null}
      </div>

      <div
        className={`flex justify-center items-center h-full
        md:transition-all md:duration-[2000ms] md:ease-in-out
        ${animate ? "md:opacity-100 md:translate-x-[50vw]" : "md:opacity-0 md:translate-x-0"}`}
      >
        <div className="md:p-[2.5vw] p-4 rounded-lg shadow-md md:w-[60%] md:h-auto h-[80%]">
          <h2 className="md:text-[1.5vw] text-2xl font-bold">Nice to see you!</h2>
          <h3 className="font-medium md:text-[1vw] text-xs text-secondary">
            Enter your username & password to Sign In
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="md:mt-[2.5vw] mt-8">
              <label className="md:text-[1.1vw] text-sm font-bold" htmlFor="username">
                Username
              </label>
              <input
                className="border rounded-2xl shadow-md shadow-[#ffffff5a] placeholder:text-gray-600 md:text-[1.25vw] text-base w-full md:py-[.5vw] py-2 md:px-[.85vw] px-3 text-secondary focus:outline-none"
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="md:my-[1.25vw] my-4">
              <label className="md:text-[1.1vw] text-sm font-bold" htmlFor="password">
                Password
              </label>
              <input
                className="border rounded-2xl shadow-md shadow-[#ffffff5a] placeholder:text-gray-600 md:text-[1.25vw] text-base w-full md:py-[.5vw] py-2 md:px-[.85vw] px-3 text-secondary focus:outline-none"
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center md:mb-[2.25vw] mb-6">
              <input
                className="md:mr-[.75vw] mr-2 md:h-[1.5vw] h-4 md:w-[1.25vw] w-4"
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label className="md:text-[1.1vw] text-sm" htmlFor="rememberMe">
                Remember Me
              </label>
            </div>

            <button
              className="bg-primary hover:bg-blue-700 md:text-[1.25vw] text-base font-bold md:py-[.5vw] py-2 w-full rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-center md:text-[1vw] text-xs text-secondary">
            Don't have an account?{" "}
            <a
              href="/signup"
              onClick={handleSignUpClick}
              className="text-primary hover:underline font-semibold"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>

      <div className="absolute md:w-[85%] w-full md:left-[5%] bottom-0 z-40">
        <Footer />
      </div>
    </section>
  );
};

export default Login;
