import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "../Images/hero.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Config/firebase";

function Hero() {
  const [user] = useAuthState(auth);
  return (
    <main className="py-20   bg-[#f9fafc] text-black">
      <section>
        <div className="container mx-auto px-6 flex items-center justify-between gap-8 flex-col md:flex-row">
          <div className="w-full md:w-1/2 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold leading-10">
              Generate Stunning AI Images
            </h1>
            <p className="text-base text-gray-500 md:text-lg">
              Simply input your desired parameters and prompts, and let our
              AI-powered system generate unique and visually striking images
              that are sure to leave a lasting impression.
            </p>
            <div>
              <Link to="/dashboard">
                <button className="py-2 px-6 rounded-md bg-primary text-white">
                  {user ? "Dashboard" : "Get started for free"}
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <img src={HeroImg} alt="AI Generated Example" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;
