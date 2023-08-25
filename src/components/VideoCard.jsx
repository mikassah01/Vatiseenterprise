import React from "react";
import { motion } from "framer-motion";

const cardVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const VideoCard = ({ source }) => {

  return (
    <motion.div
      variants={cardVariant}
      className="cursor-pointer w-full h-full md:row-span-2 row-span-1 col-span-2 rounded-md overflow-hidden  "
    >
      <video
        className="w-full h-full object-cover"
        muted = {true}
        controls={true}
        autoPlay={true}
        loop={true}
        src={source}
        alt="video"
      />
    </motion.div>
  );
};

export default VideoCard;
