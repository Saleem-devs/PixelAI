import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white  py-9">
      <div className="page_container flex flex-col gap-5 md:flex-row justify-between items-center">
        <div className="text-2xl font-bold">PixelAI</div>
        <div className="text-lg">
          © {new Date().getFullYear()} PixelAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
