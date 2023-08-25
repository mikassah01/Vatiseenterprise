import React from "react";
import { motion } from "framer-motion";

const team = [
  {
    url: "/images/danson-mutiso.jpg",
    name: "Eng. Danson Mutiso",
    designation: "Director",
    experience: "4 yrs",
  },
  {
    url: "/images/paul.jpg",
    name: "Paul Kiarie",
    designation: "Engineer",
    experience: "4 yrs",
  },
];

const Team = () => {
  return (
    <div>
      <motion.div
        className="px-5 flex flex-col items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h1 className="font-bold md:text-4xl text-3xl mb-4">Our Team</h1>
        <p>Our team of highly skilled key personnel.</p>
      </motion.div>

      <div className="flex md:flex-row flex-col justify-center items-center py-10 md:gap-10 gap-6">
        {team.map((member) => {
          return (
            <motion.div
              className="md:w-[21%] w-[70%] h-[50vh] bg-slate-500/20 rounded-lg overflow-hidden flex flex-col items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 1 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <img
                loading="lazy"
                className="w-[100%] h-[70%] top-0"
                src={member.url}
                alt={member.name}
              />
              <h1 className="text-md mb-1 mt-4">{member.name}</h1>
              <p className="text-gray-400 mb-1">{member.designation}</p>
              <p className="text-sm">Experience: {member.experience}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
