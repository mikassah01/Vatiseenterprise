import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-4 md:mb-32 mb-24 md:mt-32 mt-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <img className="w-full h-full" src="images/aboutUs.jpg" alt="/" />
      </motion.div>

      <motion.div
        className="px-5 flex flex-col items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h1 className="font-bold md:text-4xl text-3xl mb-4">Who We Are</h1>
        <p>
          Vatise Enterprises is private limited company providing efficient and
          quality work in general supplies and general works
          construction services. We take on the role of the main contractor for
          small-to-medium size projects and offer project management services
          to coordinate specialist trades for commercial projects in different
          disciplines.
        </p>
        <Link
          to="/about"
          className=" m-5 w-40 py-3 px-5 border-2 border-orange-500 text-white rounded-full
               hover:bg-orange-500 transition duration-300 text-center"
        >
          {" "}
          Learn more
        </Link>
      </motion.div>
    </div>
  );
};

export default AboutUs;
