import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaintBrush,
  faCloud,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import FeatureCard from "./FeatureCard";
import { Link } from "react-router-dom";

function Features() {
  return (
    <section className="bg-black  py-16">
      <div className="page_container">
        <h2 className="text-2xl text-white font-semibold mb-8 text-center md:text-left">
          Discover the Power of PixelAI
        </h2>
        <div className="flex flex-col gap-7 md:flex-row">
          <FeatureCard
            icon={
              <FontAwesomeIcon icon={faPaintBrush} size="3x" className="mb-4" />
            }
            title="Create Stunning AI Art in Seconds"
            description="   Simply input your desired parameters and prompts, and generate a
              unique AI art in seconds."
          />

          <FeatureCard
            icon={<FontAwesomeIcon icon={faCloud} size="3x" className="mb-4" />}
            title="Cloud-Based"
            description="  Our platform is cloud-based, so you can access it from anywhere
              and never have to worry about software updates."
          />

          <FeatureCard
            icon={
              <FontAwesomeIcon icon={faMoneyBill} size="3x" className="mb-4" />
            }
            title="Cost-Effective"
            description="  Stop spending money on stock photos or expensive design software.
              Our platform is affordable for everyone."
          />
        </div>
        <Link to="/register">
          <button className="py-1.5 mt-8 px-4 rounded-md bg-[#f9fafc] font-semibold text-lg transition-transform duration-300 ease-out transform hover:-translate-y-1">
            Get started now →
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Features;
