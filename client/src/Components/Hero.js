import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <main className="py-14 bg-black text-white text-center">
      <section className="w-11/12 mx-auto md:w-2/3 lg:w-4/5">
        <div className="flex flex-col items-center space-y-7">
          <h1 className="font-extrabold tracking-normal text-4xl leading-9 lg:text-5xl lg:leading-10">
            Produce breathtaking and visually stunning images through the use of
            AI technology
          </h1>
          <p className="text-lg text-[#d4dce5] lg:text-xl">
            Simply input your desired parameters and prompts, and let our{" "}
            <span className="text-primary">
              AI-powered system generate unique and visually striking images
            </span>{" "}
            that are sure to leave a lasting impression.
          </p>
          <Link to="/register">
            <button className="py-1.5 px-4 rounded-md bg-primary font-semibold text-lg transition-transform duration-300 ease-out transform hover:-translate-y-1">
              Try for free →
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Hero;
