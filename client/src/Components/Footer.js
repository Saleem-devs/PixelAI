import React from "react";

function Footer() {
  return (
    <footer className="bg-primary text-white  py-9">
      <div className="container px-8 mx-auto ">
        <div className="pb-8 mb-4 border-gray-300 border-b">
          <h2 className="text-2xl font-bold">PixelAI</h2>
          <p>High-quality images generator AI</p>
        </div>
        <div className="flex justify-between gap-4">
          <p> © {new Date().getFullYear()} PixelAI. All rights reserved.</p>
          <p>
            Developed by{" "}
            <a
              href="https://twitter.com/abdsalam_saleem"
              target="_blank"
              rel="noopener noreferrer"
            >
              SALEEM
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
