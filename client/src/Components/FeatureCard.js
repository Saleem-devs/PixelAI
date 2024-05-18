import React from "react";

function FeatureCard({ icon, title, description }) {
  return (
    <div className="my-4 flex flex-col w-full md:w-[31%]">
      <div className="w-12 h-14 p-7 flex items-center justify-center rounded-md bg-primary mb-5">
        {icon}
      </div>
      <h3 className="text-xl  font-semibold mb-2">{title}</h3>
      <p className="">{description}</p>
    </div>
  );
}

export default FeatureCard;
