import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SocialmediaIcons from "../screens/SocialmediaIcons";

const Footer = () => {
  return (
    <div className="text-center items-baseline justify-between bg-slate-900 text-lg text-white md:py-12 py-4 px-3 font-poppins">
      <motion.div
        className="md:grid flex flex-col items-center justify-center grid-cols-3 gap-4 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <p className="flex items-center justify-center md:mb-0 mb-2">
          ©Vatise2023
        </p>
        <div className="md:flex flex-col items-center justify-center hidden">
          <Link to="/about" className="hover:text-orange-500">
            {" "}
            About
          </Link>
          <Link to="/services" className="hover:text-orange-500">
            {" "}
            Services
          </Link>
          <Link to="/projects" className="hover:text-orange-500">
            {" "}
            Projects
          </Link>
          <Link to="/contactus" className="hover:text-orange-500">
            {" "}
            Get in Touch
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center md:pb-0 pb-4 ">
          <p className="md:mb-4 mb-3">Let's Connect</p>
          <SocialmediaIcons />
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
