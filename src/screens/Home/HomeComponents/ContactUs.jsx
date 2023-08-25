import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import SocialmediaIcons from "../../SocialmediaIcons";

const ContactUs = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section className="py-20 text-white">
      <motion.div
        className="flex justify-center w-full font-semibold md:text-4xl text-3xl my-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <p>
          <span className="text-orange-500">GET</span> IN TOUCH
        </p>
      </motion.div>

      {/**FORM */}
      <div className="md:flex md:justify-between text-sm text-black md:gap-16 gap-0 mt-5 p-2">
        <motion.div
          className="basis-1/2 flex flex-col justify-center items-center "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div
            className="md:p-20 p-10 rounded-2xl bg-white/10 backdrop-filter backdrop-blur-lg shadow-lg
           flex flex-col justify-center text-base items-center h-[80%] w-[90%]"
          >
            <div className="font-medium text-white flex flex-col justify-center items-start px-auto">
              <div className="flex mt-1">
                <CiPhone size={24} />
                <p className="mx-4">+254 710 482 700</p>
              </div>

              <div className="flex mt-5">
                <CiMail size={24} />
                <a
                  className="mx-4 hover:opacity-50 transition duration-500 "
                  href="mailto:vatiseconstruction@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  vatiseconstruction@gmail.com
                </a>
              </div>

              <div className="flex mt-5">
                <CiLocationOn size={24} />
                <p className="mx-4">Nairobi, Kenya</p>
              </div>
            </div>
            <div className="mt-7 text-white">
              <SocialmediaIcons />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="basis-1/2 mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            action="https://formsubmit.co/vatiseconstruction@gmail.com"
            onSubmit={onSubmit}
            target="_blank"
            method="POST"
          >
            <input
              className="w-full bg-white/90 placeholder-black placeholder-opacity-70 p-3 border-none rounded focus:outline-none"
              type="text"
              placeholder="Name"
              {...register("name", {
                required: true,
                maxLength: 50,
              })}
            />
            {errors.name && (
              <p className="text-red-400 mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" &&
                  "Maximum length is 50 characters."}
              </p>
            )}

            <input
              className="w-full bg-white/90 placeholder-black placeholder-opacity-70 p-3 mt-5 border-none rounded focus:outline-none"
              type="email"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red-400 mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Inalid email address."}
              </p>
            )}

            <input
              className="w-full bg-white/90 placeholder-black placeholder-opacity-70 px-3 py-5 mt-5 border-none rounded focus:outline-none"
              type="text"
              placeholder="Subject"
              {...register("subject", {
                required: true,
                maxLength: 200,
              })}
            />
            {errors.subject && (
              <p className="text-red-400 mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" &&
                  "Maximum length is 200 characters."}
              </p>
            )}

            <textarea
              className="w-full bg-white/70 placeholder-black placeholder-opacity-70 p-3 mt-5 border-none rounded focus:outline-none"
              type="text"
              placeholder="Message"
              rows="7"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red-400 mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Maximum is 2000 characters."}
              </p>
            )}

            <motion.button
              type="submit"
              className="w-full mt-5 py-3 text-deep-blue font-semibold bg-orange-600 rounded
               hover:bg-orange-500 transition duration-300"
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => (form.target = "_blank")}
            >
              SEND MESSAGE
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
