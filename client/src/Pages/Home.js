import React from "react";
import Nav from "../Components/Nav";
import Hero from "../Components/Hero";
import Carousel from "../Components/Carousel";
import Features from "../Components/Features";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Carousel />
      <Features />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
