import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";

const SocialmediaIcons = () => {
  return (
    <div className="flex gap-5">
      <a
        className="hover:opacity-50 transition duration-500 "
        href="https://twitter.com/vatiseconstruction"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitter size={24} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500 "
        href="https://www.facebook.com/profile.php?id=100094162569462"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF size={24} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500 "
        href="https://www.linkedin.com/company/vatise-enterprise-limited/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn size={24} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500 "
        href="https://instagram.com/vatiseconstruction"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillInstagram size={24} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500 "
        href="https://wa.me/+254710482700"
        target="_blank"
        rel="noreferrer"
      >
        <RiWhatsappFill size={24} />
      </a>
    </div>
  );
};

export default SocialmediaIcons;
