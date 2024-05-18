import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaintBrush,
  faCloud,
  faMoneyBill,
  faImage,
  faSave,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import FeatureCard from "./FeatureCard";
import { Link } from "react-router-dom";

function Features() {
  return (
    <section className="bg-white  py-16">
      <div className="container  mx-auto px-6 ">
        <div className="mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary">
            Features
          </h2>
        </div>

        <div className="flex flex-col gap-7 md:flex-row">
          <FeatureCard
            icon={
              <FontAwesomeIcon
                icon={faImage}
                size="lg"
                className="text-white"
              />
            }
            title="Generate Images"
            description="Simply input your desired parameters and prompts, and generate a
              unique AI art in seconds."
          />

          <FeatureCard
            icon={
              <FontAwesomeIcon icon={faSave} size="lg" className="text-white" />
            }
            title="Save to Dashboard"
            description="Easily save your generated images to your personal dashboard for future use."
          />

          <FeatureCard
            icon={
              <FontAwesomeIcon
                icon={faDownload}
                size="lg"
                className="text-white"
              />
            }
            title="Download Images"
            description="Quickly download your images in various formats and resolutions."
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
