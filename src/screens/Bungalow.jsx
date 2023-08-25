import React from "react";
import { motion } from "framer-motion";
import ImageCard from "../components/ImageCard";
import VideoCard from "../components/VideoCard";
import { IoIosBed } from "react-icons/io"

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Bungalow = () => {
  return (
    <div className="bg-slate-800 md:p-16 p-7 text-white font-poppins flex flex-col items-center justify-center">
      <h1 className="mt-16 md:font-extrabold font-bold md:text-4xl text-3xl md:mb-12 mb-0">
        Bungalow
      </h1>

      <div className="text-center font-semibold my-10 px-8 py-2 rounded-md flex items-center justify-center bg-orange-400 text-slate-800">
        <p className="flex items-center justify-center gap-3"><IoIosBed/>2 bedroom</p>
      </div>

      <motion.div
        className="w-full mb-8 grid md:max-h-[70vh] md:grid-cols-3 grid-cols-2 md:grid-rows-2 grid-rows-3 gap-2"
        initial="hidden"
        whileInView="visible"
        variants={container}
      >

        <VideoCard
          source={"/videos/2bdrmbungalow.mp4"}
        />

        <ImageCard
          source={"/images/bungalow1.jpg"}
          type={"Roundavel design"}
          bedrooms={3}
          squareArea={"102"}
          size={"11m x 11m"}
        />

        <ImageCard
          source={"/images/bungalow2.jpg"}
          type={"Roundavel design"}
          bedrooms={3}
          squareArea={"102"}
          size={"11m x 11m"}
        />

      </motion.div>

      <div className="text-center font-semibold my-10 px-8 py-2 rounded-md flex items-center justify-center bg-orange-400 text-slate-800">
        <p className="flex items-center justify-center gap-3"><IoIosBed/>3 bedroom</p>
      </div>

      <motion.div
        className="w-full mb-8 grid md:max-h-[70vh] md:grid-cols-3 grid-cols-2 md:grid-rows-2 grid-rows-3 gap-2"
        initial="hidden"
        whileInView="visible"
        variants={container}
      >
        <VideoCard
          source={"/videos/3bdrmbungalow1.mp4"}
        />
        <ImageCard
          source={"/images/bungalow3.jpg"}
          type={"Tuscan roof design"}
          bathrooms={3}
          squareArea={"260"}
          other={"Double garage"}
          size={"16.9m x 16.7m"}
        />

        <ImageCard
          source={"/images/bungalow4.jpg"}
          type={"Tuscan roof design"}
          bathrooms={3}
          squareArea={"260"}
          other={"Double garage"}
          size={"16.9m x 16.7m"}
        />
      </motion.div>

      <div className="text-center font-semibold my-10 px-8 py-2 rounded-md flex items-center justify-center bg-orange-400 text-slate-800">
        <p className="flex items-center justify-center gap-3"><IoIosBed/>3 bedroom</p>
      </div>
      <motion.div
        className="w-full mb-8 grid md:max-h-[100vh] md:grid-cols-3 grid-cols-2 md:grid-rows-2 grid-rows-3 gap-2"
        initial="hidden"
        whileInView="visible"
        variants={container}
      >
        <ImageCard
          source={"/images/bungalow5.jpg"}
          type={"Butterfly roof"}
          bedrooms={3}
          squareArea={"261"}
          other={"Double garage"}
          size={"19m x 17m"}
        />

        <VideoCard
          source={"/videos/3bdrmbungalow2.mp4"}
        />

        <ImageCard
          source={"/images/bungalow7.jpg"}
          type={"Butterfly roof"}
          bedrooms={3}
          squareArea={"261"}
          other={"Double garage"}
          size={"19m x 17m"}
        />
      </motion.div>

      
    </div>
  );
};

export default Bungalow;
