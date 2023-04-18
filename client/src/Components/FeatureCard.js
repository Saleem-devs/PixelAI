import React from "react";

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-[#f9fafc] rounded-xl p-8 my-4 flex flex-col items-center w-full md:w-[31%]">
      <div>{icon}</div>
      <h3 className="text-xl text-center font-bold mb-2">{title}</h3>
      <p className="text-center text-lg">{description}</p>
    </div>
  );
}

export default FeatureCard;
