import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="gap-4 mb-32 grid lg:grid-cols-2">
      <motion.div
        className="grid grid-cols-2 grid-rows-4 md:h-[70vh] h-[50vh] md:px-9 px-3 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <img
          loading="lazy"
          className="row-span-2 object-cover w-full h-full p-1 cursor-pointer"
          src="images/project-3.jpg"
          alt="project-4"
        />

        <img
          loading="lazy"
          className="row-span-3 object-cover w-full h-full p-1"
          src="images/project-1.jpg"
          alt="project-1"
        />
        <img
          loading="lazy"
          className="row-span-2 object-cover w-full h-full p-1"
          src="images/project-5.jpg"
          alt="project-2"
        />

        <img
          loading="lazy"
          className="row-span-1 object-cover w-full h-full p-1"
          src="images/project-6.jpg"
          alt="project-3"
        />
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
        <h1 className="font-bold md:text-4xl text-3xl mb-4">
          Our Previous Works
        </h1>
        <p>
          Over the years, the firm has undertaken many challenging projects in
          design and build solutions, project management services, building
          trades and related engineering works.
        </p>
        <Link
          to="/projects"
          className=" m-5 w-48 py-3 px-5 border-2 border-orange-500 text-white rounded-full
               hover:bg-orange-500 transition duration-300 text-center"
        >
          {" "}
          View Projects
        </Link>
      </motion.div>
    </div>
  );
};

export default Projects;
