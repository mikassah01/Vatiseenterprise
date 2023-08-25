import React from "react";
import SocialmediaIcons from "../../SocialmediaIcons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div 
    className="w-full h-screen m-0 p-0 box-border overflow-x-hidden"
    >
      <img
        className="top-0 left-0 w-full h-full object-cover"
        src="images/project-9.jpg"
        alt="hero-image"
      />
      <div className="bg-black/50 absolute top-0 left-0 w-full h-screen" />
      <div className="absolute top-0 w-full h-screen flex flex-col justify-center items-center text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 2 }}
          variants={{
            hidden: { opacity: 0, y: -150 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h1 className="md:mb-5 mb-4 md:font-extrabold font-bold md:text-2xl text-lg text-orange-600">
            Vatise Company
          </h1>
          <h1 className="mb-5 py-2 font-extrabold md:text-5xl text-3xl drop-shadow-2xl">
            Bring Your Dream Home To Life.
          </h1>

          <button
            className=" my-5 w-52 md:py-4 py-3 md:px-8 px-5 text-white rounded-full border-2 border-orange-600
               hover:bg-orange-500 transition duration-1000 cursor-pointer"
          >
            <Link to="/contactus"> Find Us Today</Link>
          </button>

          <div className="flex justify-center items-center text-center">
            <SocialmediaIcons />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
