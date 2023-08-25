import React from "react";
import { motion } from "framer-motion";

const ServicesScreen = () => {
  return (
    <div className="bg-slate-800 md:p-16 p-4  text-white font-poppins overflow-x-hidden">
      <h1 className="mt-16 text-center font-extrabold md:text-4xl text-3xl md:mb-16 mb-0">
        Our Services
      </h1>

      <div
        className="w-full h-[50%] bg-slate-900 mx-auto my-20 md:pt-16 pt-10 lg:mb-[20%] md:mb-[5%]
       md:text-center px-2 grid lg:grid-cols-2"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className=" text-center md:font-extrabold font-bold md:text-3xl text-2xl">
            Architecture Plans
          </h1>
          <p className="md:px-12 px-5 mt-6 mb-6 text-lg ">
            Vatise is a leading architectural firm specializing in providing
            comprehensive architecture plan services. With a team of highly
            skilled architects and designers, they offer a wide range of
            innovative and tailored architectural solutions to meet the unique
            needs of their clients.
            <br />
            <br />
            We use advanced design software and stay up to date with the latest
            industry trends to creates detailed architectural plans that
            showcase the layout, structure, and materials, giving clients a
            clear visualization of their project.
          </p>
        </motion.div>

        <motion.div
          className="my-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img
            loading="lazy"
            className="rounded-sm md:w-[90%] w-full h-[90%]"
            src="/images/plan.jpg"
            alt="architecture-plan"
          />
        </motion.div>
      </div>

      <div
        className="w-full h-[50%] bg-slate-900 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%]
       md:text-center px-2 grid lg:grid-cols-2"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className=" text-center md:font-extrabold font-bold md:text-3xl text-2xl">
            Structural Designs
          </h1>
          <p className="md:px-12 px-5 mt-6 mb-6 text-lg ">
            We provide premier structural design services, delivering
            cutting-edge solutions for diverse construction projects. Our team
            of skilled engineers and designers offers comprehensive expertise in
            designing safe, efficient, and aesthetically pleasing structures.
            <br />
            <br />
            Through close collaboration with clients and industry professionals,
            we develop customized designs that meet project objectives and
            regulatory requirements. We ensure structural integrity and optimize
            material usage, resulting in cost-effective designs.
          </p>
        </motion.div>

        <motion.div
          className="my-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img
            loading="lazy"
            className="rounded-sm md:w-[90%] w-full h-[90%]"
            src="/images/structural-design.jpg"
            alt="structural-design"
          />
        </motion.div>
      </div>
      <div
        className="w-full h-[50%] bg-slate-900 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%]
       md:text-center px-2 grid lg:grid-cols-2 object-contain"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className=" text-center md:font-extrabold font-bold md:text-3xl text-2xl">
            Bill of Quantities
          </h1>
          <p className="md:px-12 px-5 mt-6 mb-6 text-lg ">
            Additionally, we provide comprehensive bill of quantities (BOQ)
            services, specializing in accurately estimating construction costs
            and quantities for projects of all sizes.
            <br />
            <br />
            Our team of experienced professionals meticulously analyzes project
            plans and specifications to generate detailed and itemized BOQ
            reports. With a strong focus on accuracy, we ensure that all
            elements of the project are accounted for, including materials,
            labor, equipment, and associated costs.
            <br />
            <br />
            Our expertise spans across various sectors, such as residential,
            commercial, infrastructure, and civil engineering projects.
          </p>
        </motion.div>

        <motion.div
          className="my-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img
            loading="lazy"
            className="rounded-sm md:w-[90%] w-full h-[90%]"
            src="/images/billofquantities.jpg"
            alt="bill-of-quantities"
          />
        </motion.div>
      </div>
      <div
        className="w-full h-[50%] bg-slate-900 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%]
       md:text-center px-2 grid lg:grid-cols-2"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className=" text-center md:font-extrabold font-bold md:text-3xl text-2xl">
            Construction Management
          </h1>
          <p className="md:px-12 px-5 mt-6 mb-6 text-lg ">
            With a team of skilled professionals, we provide end-to-end project
            management, ensuring successful execution from inception to
            completion. Our services encompass budgeting, scheduling,
            procurement, quality control, and coordination of all project
            stakeholders. Vatise utilizes industry-leading software and
            methodologies to optimize project efficiency and mitigate risks.
          </p>
        </motion.div>

        <motion.div
          className="my-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img
            loading="lazy"
            className="rounded-sm md:w-[90%] w-full h-[90%] "
            src="/images/constructionmanagement.jpg"
            alt="construction-management"
          />
        </motion.div>
      </div>
      <div
        className="w-full h-[50%] bg-slate-900 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%]
       md:text-center px-2 grid lg:grid-cols-2"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className=" text-center md:font-extrabold font-bold md:text-3xl text-2xl">
            Construction Consultation
          </h1>
          <p className="md:px-12 px-5 mt-6 mb-6 text-lg ">
            Vatise provides expert advice and guidance to clients throughout the
            construction process. With a team of seasoned professionals, we
            offer tailored consultation services to address specific project
            needs and challenges. Our expertise covers a wide range of areas,
            including project planning, feasibility studies, risk assessment,
            cost estimation, and regulatory compliance.
            <br />
            <br />
            We assists clients in making informed decisions, optimizing project
            outcomes, and maximizing value for their investments. Moreover we
            prioritize open communication and collaboration, working closely
            with clients and stakeholders to ensure clarity and alignment of
            project objectives.
          </p>
        </motion.div>

        <motion.div
          className="my-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img
            loading="lazy"
            className="rounded-sm md:w-[90%] w-full h-[90%]"
            src="/images/constructionconsultation.jpg"
            alt="construction-consultation"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesScreen;
