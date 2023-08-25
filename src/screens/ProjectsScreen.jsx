import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subtitle }) => {
  const overlayStyles = `absolute md:h-[70vh] h-[60vh] md:w-full w-[100%] p-10 opacity-0 hover:opacity-90 
   transition duration-700 bg-gray-400 z-30 flex flex-col justify-center items-center text-center text-black`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative cursor-pointer ">
      <div className={overlayStyles}>
        <p className="text-2xl text-orange-500 font-medium">{title}</p>
        <p className="mt-7">{subtitle}</p>
      </div>

      <img
        className="md:h-[70vh] h-[60vh] md:w-full w-[100%] object-cover"
        src={`/images/${projectTitle}.jpg`}
        alt={projectTitle}
      />
    </motion.div>
  );
};

const ProjectsScreen = () => {
  return (
    <div className="bg-slate-800 md:p-16 p-7 text-white font-poppins flex flex-col items-center justify-center">
      <h1 className="mt-16 md:font-extrabold font-bold md:text-4xl text-3xl md:mb-16 mb-0">
        Recent Projects
      </h1>

      <p className="mt-10 mb-10 text-center">
        This is an exhibition of the Vatise portfolio. Get your project on this
        awesome list !!
      </p>

      {/**Projects */}
      <div className="flex justify-center items-center">
        <motion.div
          className="grid md:grid-cols-3 gap-1"
          initial="hidden"
          whileInView="visible"
          variants={container}
        >
          {/**Row 1 */}
          <Project
            title="Project 1"
            subtitle="This is a structural plan and design of a modern home."
          />
          <Project
            title="Project 2"
            subtitle="This is a home construction fully planned, designed and managed with Vatise Company."
          />
          <Project
            title="Project 3"
            subtitle="This is an apartment design as per customer requirements."
          />
          {/**Row 2 */}
          <Project
            title="Project 4"
            subtitle="This is another home construction fully planned, designed and managed with Vatise Company till completion."
          />
          <Project
            title="Project 5"
            subtitle="Fully complete home construction planned, designed and managed with Vatise."
          />
          <Project
            title="Project 6"
            subtitle="This is a mansion design for a real esate customer."
          />
          {/**Row 3 */}
          <Project
            title="Project 7"
            subtitle="This is another home construction fully planned, designed and managed with Vatise Company till completion."
          />
          <Project
            title="Structural design"
            subtitle="Fully complete home construction planned, designed and managed with Vatise."
          />
          <Project
            title="Project 9"
            subtitle="This is a mansion design for a real esate customer."
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsScreen;
