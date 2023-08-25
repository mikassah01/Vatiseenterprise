import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const OurServices = () => {
  return (
    <div className="gap-4 mb-32 grid lg:grid-cols-2">
      <motion.div
        className="px-5 flex flex-col items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h1 className="font-bold md:text-4xl text-3xl mb-4">What we do</h1>
        <p>
          We provide cost effective, world-class serices and equipment to
          enhance the development of Kenya's infrastructure.
          Vatise Enterprises deliver a wide range of services within water
          treatment solutions management, civil engineering, earthworks,
          building and road construction throughout East Africa.
        </p>
        <Link
          to="/services"
          className=" m-5 w-40 py-3 px-5 border-2 border-orange-500 text-white rounded-full
               hover:bg-orange-500 transition duration-300 text-center"
        >
          {" "}
          Learn more
        </Link>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 grid-rows-6 md:h-[70vh] h-[50vh] md:px-9 px-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <img
          loading="lazy"
          className="row-span-3 object-cover w-full h-full p-1"
          src="images/housedesign.jpg"
          alt="building-design"
        />
        <img
          loading="lazy"
          className="row-span-2 object-cover w-full h-full p-1"
          src="images/design5.jpg"
          alt="dam-design"
        />
        <img
          loading="lazy"
          className="row-span-2 object-cover w-full h-full p-1"
          src="images/design7.jpg"
          alt="road-design"
        />
        <img
          loading="lazy"
          className="row-span-3 object-cover w-full h-full p-1 shadow-sm"
          src="images/constructionconsultation.jpg"
          alt="construction-consultation"
        />
        <img
          loading="lazy"
          className="row-span-2 object-cover w-full h-full p-1"
          src="/images/drawing.jpg"
          alt="modern-tap-delivery"
        />
      </motion.div>
    </div>
  );
};

export default OurServices;
