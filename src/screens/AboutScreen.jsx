import React from "react";
import { motion } from "framer-motion";

const AboutScreen = () => {
  return (
    <div className="bg-slate-800 text-white font-poppins ">
      <motion.div
        className="w-full h-[70vh] "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, z: -50 },
          visible: { opacity: 1, z: 0 },
        }}
      >
        <img
          className="rounded-sm w-full md:h-full h-[70%] md:object-fill object-cover "
          src="/images/hero2.jpg"
          alt="aboutUs"
        />
      </motion.div>

      <h1 className="md:mt-16 -mt-10 text-center font-extrabold md:text-4xl text-3xl md:mb-7">
        About Us
      </h1>

      <p className="md:p-16 p-7 md:text-lg text-base ">
        Vatise Enterprises is private limited company which is fully registered
        in Kenya to undertake General Supplies services and General Works
        Construction Services. Over the years, the firm has undertaken many
        challenging projects and accumulated skills, knowhow and experiences in
        design and build solutions, project management services, building trades
        and related engineering works, humanitarian and emergency supplies
        especially in WASH and educational, supplies and consultancy sectors
        asresult of it expanded resources and human resources.
        <br />
        <br />
        Vatise Enterprises has a reputation of high quality construction works
        that can stand the scrutiny of world class evaluator as well as superior
        quality supplies. Today, we take on the role of main contractor for
        small to medium size projects and performs project management services
        to coordinates specialist trades for industrial / commercial projects in
        different disciplines. We also provide efficient and quality services to
        the community while working in different WASH programs particularly in
        ASARs by engineering solutions as value add services to our clients.
        <br />
        <br />
        The firm lays more emphasis on clear communication and follow-through
        procedures ensures that client’s objectives are top priority in the
        planning and execution of all our processes; whether in construction or
        supplies.
        <br />
        <br />
        We also stand in offering our clients reliable, consistent and well
        organized program-plans and strategies which are well suited to their
        day to day business and humanitarian needs. Our operations are
        professional and ethical with the primary priorities of the safety and
        comfort of the human life above all other operational goals.
        <br />
        <br />
        We build our firm around the fundamental goals of improving human
        inspiring and stimulating value based development.
        <br />
        <br />
        We attribute our success by combining innovative technologies and
        exceptional human expertise in our overall business operations
      </p>

      <motion.div
        className="md:px-32 px-4 md:text-s text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.1, duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: -100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h1 className="mt-12 text-center font-bold md:text-2xl text-gray-500 text-xl md:mb-7 mb-4">Objectives</h1>
        <p className=" text-lg">
          Our objective is to meet the customer expectations in terms of
          standards, time frame, operational costs and scale of demand in the
          most appropriate manner.
        </p>
      </motion.div>

      <motion.div
        className="md:px-32 px-4 pt-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.1, duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: -100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h1 className="mt-6 text-center font-bold md:text-2xl text-gray-500 text-xl md:mb-7 mb-4">Aim</h1>
        <p className=" text-lg">
          Our target is to bring quality into the Construction Industry by
          focusing on development and research by using latest and effective
          methods in construction and investing on the most effective, efficient
          and evident technology. We aim to expand and develop our methods of
          construction in order to meet the demands of our clients with low
          prices and quality work
        </p>
      </motion.div>

      <motion.div
        className="md:px-32 px-4 pt-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.1, duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: -100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h1 className="mt-6 text-center font-bold md:text-2xl text-gray-500 text-xl md:mb-7 mb-4">Our Niche</h1>
        <p className=" text-lg">
          To curve a niche in the supplies sector, our target is to employ the
          latest technology that will enable us provide a one stop shop for the
          construction materials, office stationery, computer hardware and
          software, home appliances, industrial apparels, clothing’s and
          electrical appliances
        </p>
      </motion.div>

      <motion.div
        className="md:px-32 px-4 pt-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.1, duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: -100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h1 className="mt-6 text-center font-bold md:text-2xl text-gray-500 text-xl md:mb-7 mb-4">
          Our Mission
        </h1>
        <p className=" text-lg">
          Deliver high quality goods and services to our customers by employing
          innovative technology in all our operations.
        </p>
      </motion.div>

      <motion.div
        className="md:px-32 px-4 pt-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.1, duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: -100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h1 className="mt-6 text-center font-bold md:text-2xl text-gray-500 text-xl md:mb-7 mb-4">Our Vision</h1>
        <p className=" text-lg">
          Is to become a premier construction and general supplies company that
          meets the demands of the competitive market
        </p>
      </motion.div>

      <motion.div
        className="md:px-32 px-4 pt-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.1, duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: -100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h1 className="mt-6 text-center font-bold md:text-2xl text-gray-500 text-xl md:mb-7 mb-4">Strategy</h1>
        <p className=" text-lg">
          Our primary strategies towards our objectives are: Risk assessment,
          Early planning, Cost efficiency, Capacity building, Surveys and
          research, Technology and innovation, and Expert opinion.
        </p>
      </motion.div>

      <motion.div
        className="md:px-32 px-4 py-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.1, duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: -100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h1 className="mt-6 text-center font-bold md:text-2xl text-gray-500 text-xl md:mb-7 mb-4">Our Values</h1>
        <p className="text-base md:text-lg md:pb-28 pb-14">
          Our values provide the standard of behaviour by which Vatise
          Enterprises conduct business. These values represent how we treat we
          treat one another, deal with our customers, stakeholders and how we
          keep ourselves accountable as a team: They are professionalism,
          Safety, reliability,Accountability and Persuit of Excellence
        </p>
      </motion.div>
    </div>
  );
};

export default AboutScreen;
