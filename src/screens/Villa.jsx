import React from "react";
import { motion } from "framer-motion";
import ImageCard from "../components/ImageCard";
import VideoCard from "../components/VideoCard";
import { IoIosBed } from "react-icons/io";
import { MdOutlineVilla } from "react-icons/md";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Villa = () => {
  return (
    <div className="bg-slate-800 md:p-16 p-7 text-white font-poppins flex flex-col items-center justify-center">
      <h1 className="mt-16 md:font-extrabold font-bold md:text-4xl text-3xl md:mb-12 mb-0">
        Villa
      </h1>
      <div className="text-center font-semibold my-10 px-8 py-2 rounded-md flex items-center justify-center bg-orange-400 text-slate-800">
        <p className="flex items-center justify-center gap-3">
          <MdOutlineVilla size={25}/>
          Modern Villa
        </p>
      </div>

      <motion.div
        className="w-full mb-8 grid md:max-h-[70vh] md:grid-cols-3 grid-cols-2 md:grid-rows-2 grid-rows-3 gap-2"
        initial="hidden"
        whileInView="visible"
        variants={container}
      >
        <ImageCard
          source={"/images/villa1pic1.jpg"}
          type={"Modern Villa"}
          bedrooms={4}
          squareArea={"100m"}
          size={"100"}
          other={"gym"}
        />

        <VideoCard source={"/videos/villa1.mp4"} />

        <ImageCard
          source={"/images/villa1pic2.jpg"}
          type={"Modern Villa"}
          bedrooms={4}
          squareArea={"100m"}
          size={"100"}
          other={"pool"}
        />
      </motion.div>

      <div className="text-center font-semibold my-10 px-8 py-2 rounded-md flex items-center justify-center bg-orange-400 text-slate-800">
        <p className="flex items-center justify-center gap-3">
          <MdOutlineVilla size={25}/>
          One Storey Villa
        </p>
      </div>
      <motion.div
        className="w-full mb-8 grid md:max-h-[70vh] md:grid-cols-3 grid-cols-2 md:grid-rows-2 grid-rows-3 gap-2"
        initial="hidden"
        whileInView="visible"
        variants={container}
      >
        <VideoCard source={"/videos/villa2.mp4"} />

        <ImageCard
          source={"/images/villa2pic1.jpg"}
          type={"Modern Villa"}
          bedrooms={4}
          squareArea={"100m"}
          size={"100"}
          other={"pool"}
        />

        <ImageCard
          source={"/images/villa2pic2.jpg"}
          type={"Modern Villa"}
          bedrooms={4}
          squareArea={"100m"}
          size={"100"}
          other={"pool"}
        />
      </motion.div>

      <div className="text-center font-semibold my-10 px-8 py-2 rounded-md flex items-center justify-center bg-orange-400 text-slate-800">
        <p className="flex items-center justify-center gap-3">
          <MdOutlineVilla size={25}/>
          Wooden Villa
        </p>
      </div>

      <motion.div
        className="w-full mb-8 grid md:max-h-[70vh] md:grid-cols-3 grid-cols-2 md:grid-rows-2 grid-rows-3 gap-2"
        initial="hidden"
        whileInView="visible"
        variants={container}
      >
        <ImageCard
          source={"/images/villa3pic1.jpg"}
          type={"Wooden Villa"}
          bedrooms={4}
          squareArea={"100m"}
          size={"100"}
          other={"pool"}
        />

        <VideoCard source={"/videos/villa3.mp4"} />

        <ImageCard
          source={"/images/villa3pic2.jpg"}
          type={"Wooden Villa"}
          bedrooms={4}
          squareArea={"100m"}
          size={"100"}
          other={"pool"}
        />
      </motion.div>
    </div>
  );
};

export default Villa;
