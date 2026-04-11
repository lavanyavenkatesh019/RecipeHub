import { Link, useNavigate } from "react-router-dom";
import LogoIcon from "./LogoIcon";
import { isAuthenticated } from "../utils/authUtils";

const Landing = () => {
  const nav = useNavigate();

  const handleStart = () => {
    nav("/Home");
  };

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src="/Picture/recipe.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      <div className="relative z-10 flex flex-col h-full">

        <div className="flex justify-between items-center px-4 sm:px-6 py-6 sm:py-8 flex-nowrap">
          <div className="cursor-pointer flex items-center bg-transparent group" onClick={handleStart}>
            <LogoIcon color="white" className="h-12 w-12 sm:h-14 sm:w-14 md:h-20 md:w-20 transition-transform group-hover:scale-110 drop-shadow-2xl" />
          </div>

          <div className="flex items-center justify-end gap-2 sm:gap-3 flex-nowrap">
            <Link to="/Login">
              <button className="px-4 sm:px-6 h-10 sm:h-11 md:h-12 text-white rounded-xl sm:rounded-2xl shadow-xl border-2 border-white/30 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black text-xs sm:text-sm md:text-base font-black uppercase tracking-widest whitespace-nowrap">
                Login
              </button>
            </Link>

            <Link to="/Signin">
              <button className="px-4 sm:px-6 h-10 sm:h-11 md:h-12 text-white rounded-xl sm:rounded-2xl shadow-xl border-2 border-white/30 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black text-xs sm:text-sm md:text-base font-black uppercase tracking-widest whitespace-nowrap">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center items-center text-center px-4 gap-6">
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold">
            Your Kitchen, Your Stories.
          </h1>
          <button 
            onClick={handleStart}
            className="text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-xl shadow-lg transition duration-300 hover:bg-amber-200 hover:text-black"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;