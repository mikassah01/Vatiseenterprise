import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { Menu, Transition, Popover } from "@headlessui/react";

const NavBar = ({ isTopOfPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreen = useMediaQuery("(min-width: 768px)");
  const navBarBackground = isTopOfPage
    ? ""
    : "bg-black/90 transition duration-500";

  return (
    <nav
      className={`${navBarBackground} fixed w-full flex items-center justify-between md:py-6 py-3 md:px-14 
       px-7 text-white z-40 font-poppins`}
    >
      <Link to="/" className="text-2xl uppercase font-bold">
        Vatise
      </Link>

      {/**DESKTOP NAVIGATION */}
      {isAboveSmallScreen ? (
        <div className=" no-underline flex items-center justify-center gap-14">
          <Link to="/" className="hover:text-orange-500">
            {" "}
            Home
          </Link>
          <Link to="/about" className="hover:text-orange-500">
            {" "}
            About
          </Link>
          <Link to="/services" className="hover:text-orange-500">
            {" "}
            Services
          </Link>
          <Link to="/projects" className="hover:text-orange-500">
            {" "}
            Projects
          </Link>

          <Popover className="relative" onMouseLeave={() => setIsOpen(false)}>
            {({ open }) => (
              <Menu as="div" className="relative">
                <Popover.Button
                  className={`${
                    open ? "text-white" : "text-white"
                  } group hover:text-orange-500 inline-flex items-center justify-center focus:outline-none`}
                  onMouseEnter={() => setIsOpen(true)}
                >
                  Concepts
                  {open ? (
                    <BiChevronUp size={24} className="ml-[1px]" />
                  ) : (
                    <BiChevronDown size={24} className="ml-[1px]" />
                  )}
                </Popover.Button>

                <Transition
                  show={isOpen}
                  as={React.Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                  onMouseLeave={() => setIsOpen(false)}
                >
                  <Popover.Panel
                    static
                    className="absolute z-10 w-screen max-w-xs px-4 mt-3 transform -translate-x-1/4 left-1/2 sm:px-0"
                  >
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                      <Menu.Items
                        className="w-40 rounded-md shadow-lg bg-white origin-top-right focus:outline-none absolute"
                        static
                        onMouseEnter={() => setIsOpen(true)}
                      >
                        <div className="p-2 flex flex-col text-sm items-start justify-center gap-1">
                          {" "}
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/bungalow"
                                aria-hidden="true"
                                className={` w-full rounded-md py-2 ${
                                  active
                                    ? "bg-gray-100/70 text-darkBlue "
                                    : "text-red-400"
                                } flex items-center justify-center`}
                              >
                                {" "}
                                Bungalow
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/maisonette"
                                aria-hidden="true"
                                className={` w-full rounded-md py-2 ${
                                  active
                                    ? "bg-gray-100/70 text-darkBlue "
                                    : "text-red-400"
                                } flex items-center justify-center`}
                              >
                                {" "}
                                Maisonette
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/villa"
                                aria-hidden="true"
                                className={` w-full rounded-md py-2 ${
                                  active
                                    ? "bg-gray-100/70 text-darkBlue "
                                    : "text-red-400"
                                } flex items-center justify-center`}
                              >
                                {" "}
                                Villas
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </div>
                  </Popover.Panel>
                </Transition>
              </Menu>
            )}
          </Popover>
          <Link
            to="/contactus"
            className="bg-orange-500 hover:bg-orange-500/80 font-medium py-2 px-4 rounded-sm  hover:"
          >
            {" "}
            Get in Touch
          </Link>
        </div>
      ) : (
        <motion.button
          alt="menu"
          className="rounded-full text-white p-3 hover:text-white/70 transition duration-100"
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMenuToggled(!isMenuToggled)}
        >
          {!isAboveSmallScreen && isMenuToggled ? (
            <FaTimes size={24} />
          ) : (
            <FaBars size={24} />
          )}
        </motion.button>
      )}

      {/* MOILE MENU POUP */}
      {!isAboveSmallScreen && isMenuToggled && (
        <div className="fixed right-0 bottom-0 h-full bg-black/90 w-[80%]">
          <div className="flex justify-end px-7 py-2">
            {/**Close btn */}
            <motion.button
              alt="menu"
              className="rounded-full text-white p-3 hover:text-white/70 transition duration-100"
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              {!isAboveSmallScreen && isMenuToggled ? (
                <FaTimes size={24} />
              ) : (
                <FaBars size={24} />
              )}
            </motion.button>
          </div>
          <motion.div
            className="flex flex-col items-center justify-center gap-10 text-xl text-gray-300 py-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Link to="/" className="hover:text-orange-500">
              {" "}
              Home
            </Link>
            <Link to="/about" className="hover:text-orange-500">
              {" "}
              About
            </Link>
            <Link to="/services" className="hover:text-orange-500">
              {" "}
              Services
            </Link>
            <Link to="/projects" className="hover:text-orange-500">
              {" "}
              Projects
            </Link>

            <Menu as="div" className="relative">
              {({ open }) => (
                <Fragment>
                  <Menu.Button
                    className={`${
                      open ? "text-orange-500" : "text-white"
                    } mb-1 hover:text-orange-500 inline-flex items-center justify-center focus:outline-none`}
                  >
                    Concepts
                    {open ? (
                      <BiChevronUp size={24} className="ml-[1px]" />
                    ) : (
                      <BiChevronDown size={24} className="ml-[1px]" />
                    )}
                  </Menu.Button>

                  <Transition
                    show={open}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Menu.Items
                      className="w-40 rounded-md shadow-lg bg-white origin-top-right focus:outline-none absolute"
                      static
                    >
                      <div className="p-2 flex flex-col text-sm items-start justify-center gap-1">
                        {" "}
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/bungalow"
                              aria-hidden="true"
                              className={` w-full rounded-md py-2 ${
                                active
                                  ? "bg-gray-100/70 text-orange-500  "
                                  : "text-darkBlue"
                              } flex items-center justify-center`}
                            >
                              {" "}
                              Bungalow
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/maisonette"
                              aria-hidden="true"
                              className={` w-full rounded-md py-2 ${
                                active
                                  ? "bg-gray-100/70 text-orange-500  "
                                  : "text-darkBlue"
                              } flex items-center justify-center`}
                            >
                              {" "}
                              Maisonette
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/villa"
                              aria-hidden="true"
                              className={` w-full rounded-md py-2 ${
                                active
                                  ? "bg-gray-100/70 text-orange-500  "
                                  : "text-darkBlue"
                              } flex items-center justify-center`}
                            >
                              {" "}
                              Villas
                            </Link>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Fragment>
              )}
            </Menu>

            <Link
              to="/contactus"
              className="bg-orange-500 hover:bg-orange-500/80 font-medium py-2 px-4 rounded-sm mt-20"
            >
              {" "}
              Get in Touch
            </Link>
          </motion.div>
        </div>
      )}
    </nav>
  );
};
export default NavBar;
