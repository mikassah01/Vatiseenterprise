import React from "react";
import { motion } from "framer-motion";
import VideoCard from "../components/VideoCard";
import ImageCard from "../components/ImageCard";
import { IoIosBed } from "react-icons/io";
import AppartmentImage from "../components/AppartmentImage";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Mansionette = () => {
  return (
    <div className="bg-slate-800 md:p-16 p-7 text-white font-poppins flex flex-col items-center justify-center">
      <h1 className="mt-16 md:font-extrabold font-bold md:text-4xl text-3xl md:mb-16 mb-0">
        Maisonette
      </h1>

      <div className="text-center font-semibold my-10 px-8 py-2 rounded-md flex items-center justify-center bg-orange-400 text-slate-800">
        <p className="flex items-center justify-center gap-3">
          <IoIosBed />2 bedroom
        </p>
      </div>

      <motion.div
        className="w-full mb-8 grid md:max-h-[70vh] md:grid-cols-3 grid-cols-2 md:grid-rows-2 grid-rows-3 gap-2"
        initial="hidden"
        whileInView="visible"
        variants={container}
      >
        <VideoCard source={"/videos/2bdrmmaisonette.mp4"} />

        <ImageCard
          source={"/images/maisonette1.jpg"}
          type={"8-corner house design"}
          bedrooms={2}
          squareArea={"102"}
          size={"11m x 11m"}
          other={"Rooftop entertainment area"}
        />

        <ImageCard
          source={"/images/maisonette2.jpg"}
          type={"8-corner house design"}
          bedrooms={2}
          squareArea={"102"}
          size={"11m x 11m"}
          other={"Rooftop entertainment area"}
        />
      </motion.div>

      <div className="text-center font-semibold my-10 px-8 py-2 rounded-md flex items-center justify-center bg-orange-400 text-slate-800">
        <p className="flex items-center justify-center gap-3">
          <IoIosBed />3 bedroom
        </p>
      </div>

      <motion.div
        className="w-full mb-8 grid md:max-h-[70vh] md:grid-cols-3 grid-cols-2 md:grid-rows-2 grid-rows-3 gap-2"
        initial="hidden"
        whileInView="visible"
        variants={container}
      >
        <ImageCard
          source={"/images/maisonette3.jpg"}
          type={"Modern small house"}
          bedrooms={3}
          squareArea={"148"}
          size={"13.5m x 11.8m"}
          other={"2 car open garage"}
        />

        <VideoCard source={"/videos/3bdrmmaisonette1.mp4"} />

        <ImageCard
          source={"/images/maisonette4.jpg"}
          type={"Modern small house"}
          bedrooms={3}
          squareArea={"148"}
          size={"13.5m x 11.8m"}
          other={"2 car open garage"}
        />
      </motion.div>

      <div className="text-center font-semibold my-10 px-8 py-2 rounded-md flex items-center justify-center bg-orange-400 text-slate-800">
        <p className="flex items-center justify-center gap-3">
          <IoIosBed />4 bedroom
        </p>
      </div>
      <motion.div
        className="w-full mb-8 grid md:max-h-[100vh] md:grid-cols-3 grid-cols-2 md:grid-rows-2 grid-rows-3 gap-2"
        initial="hidden"
        whileInView="visible"
        variants={container}
      >
        <ImageCard
          source={"/images/maisonette5.jpg"}
          type={"Double storey design"}
          bedrooms={4}
          squareArea={"229"}
          size={"17m x 18.9m"}
          other={"Double garage"}
        />

        <VideoCard source={"/videos/4bdrmmaisonette.mp4"} />

        <ImageCard
          source={"/images/maisonette7.jpg"}
          type={"Double storey design"}
          bedrooms={4}
          squareArea={"229"}
          size={"17m x 18.9m"}
          other={"Bar area"}
        />
      </motion.div>

      <div className="text-center font-semibold my-10 px-8 py-2 rounded-md flex items-center justify-center bg-orange-400 text-slate-800">
        <p className="flex items-center justify-center gap-3">
          <IoIosBed />5 bedroom
        </p>
      </div>

      <motion.div
        className="w-full grid md:max-h-[100vh] md:grid-cols-3 grid-cols-2 md:grid-rows-2 grid-rows-3 gap-2"
        initial="hidden"
        whileInView="visible"
        variants={container}
      >
        <VideoCard source={"/videos/5bdrmmaisonette.mp4"} />

        <ImageCard
          source={"/images/maisonette9.jpg"}
          type={"Double storey design"}
          bedrooms={5}
          squareArea={"338"}
          size={""}
          other={"Double garage"}
        />

        <ImageCard
          source={"/images/maisonette10.jpg"}
          type={"Double storey design"}
          bedrooms={5}
          squareArea={"338"}
          size={""}
          other={"Double garage"}
        />
      </motion.div>
    </div>
  );
};

export default Mansionette;
