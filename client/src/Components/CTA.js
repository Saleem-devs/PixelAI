import React from "react";
import CTAImg from "../Images/cta.png";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Config/firebase";

function CTA() {
  const [user] = useAuthState(auth);
  return (
    <section className="py-16 container px-8 mx-auto">
      <div className="flex items-centerh justify-between gap-8 flex-col md:flex-row max-w-6xl rounded-xl bg-primary text-white">
        <div className="w-full md:w-1/2 space-y-4 px-8 py-12">
          <h2 className="text-3xl font-bold">
            Start creating AI Images for free!
          </h2>
          <p className="text-lg">
            Join thousands of users who are already generating unique and
            high-quality images with our AI-powered tool.
          </p>
          <div>
            <Link to="/dashboard">
              <button className="py-2 px-6 rounded-md bg-white text-primary">
                {user ? "Dashboard" : "Get started for free"}
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full cta_img md:w-1/2">
          {/* <img src={CTAImg} alt="AIimages" className="w-full object-cover" /> */}
        </div>
      </div>
    </section>
  );
}

export default CTA;
