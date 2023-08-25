import React from "react";
import Hero from "./HomeComponents/Hero";
import AboutUs from "./HomeComponents/AboutUs";
import OurServices from "./HomeComponents/OurServices";
import Projects from "./HomeComponents/Projects";
import Team from "./HomeComponents/Team";
import ContactUs from "./HomeComponents/ContactUs";

const Home = () => {
  return (
    <div className="bg-slate-800 text-white font-poppins m-0 p-0 box-border overflow-x-hidden">
      <Hero />
      <div className="md:p-10 p-4">
        <AboutUs />
        <OurServices />
        <Projects />
        <Team />
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
