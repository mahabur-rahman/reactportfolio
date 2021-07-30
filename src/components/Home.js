import React from "react";
import Banner from "./Banner";
import Services from "./Services";
import About from "./About";
import Price from "./Price";
import Contact from "./Contact";
import Blog from "./Blog";
import Experience from "./Experience";
import Portfolio from "./Portfolio";

function Home() {
  return (
    <>
      <Banner />
      <Services />
      <About />
      <Price />
      <Experience />
      <Blog />
      <Portfolio />
      <Contact />
    </>
  );
}

export default Home;
