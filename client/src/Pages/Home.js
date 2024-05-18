import React from "react";
import Nav from "../Components/Nav";
import Hero from "../Components/Hero";
import Carousel from "../Components/Carousel";
import Features from "../Components/Features";
import Footer from "../Components/Footer";
import CTA from "../Components/CTA";

function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Carousel />
      <Features />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;
