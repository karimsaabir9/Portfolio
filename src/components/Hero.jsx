import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-12 lg:gap-20 min-h-[80vh] px-6 py-4">
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="h-[300px] w-[300px] my-auto overflow-clip rounded-full md:h-[320px] md:w-[320px] lg:h-[400px] lg:w-[400px] shadow-lg shrink-0"
      >
        <img
          src="/images/s.JPG"
          alt="Karim Sabir"
          className="object-cover object-top w-full h-full"
        />
      </motion.div>

      {/* Text */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center md:text-left"
      >
        <p className="font-semibold text-[#555555] dark:text-gray-400 mb-2 text-center">
          Hello, I'm
        </p>
        <h1 className="text-4xl md:text-5xl mb-3 font-bold text-center dark:text-white">
          Karim Sabir
        </h1>
        <h2 className="font-semibold text-2xl md:text-[1.75rem] text-[#555555] dark:text-gray-400 mb-4 text-center">
          Frontend Developer
        </h2>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/images/CV.pdf"
            download="Sabir_CV.pdf"
            className="font-semibold transition-all duration-300 ease-in-out p-4 w-36 md:w-40 rounded-full border border-gray-800 dark:border-gray-200 dark:text-white hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black cursor-pointer mx-auto sm:mx-0 text-center"
          >
            Download CV
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="bg-[#353535] dark:bg-gray-200 text-white dark:text-black font-semibold transition-all duration-300 ease-in-out p-4 w-36 md:w-40 rounded-full border border-[#353535] dark:border-gray-200 hover:bg-black dark:hover:bg-white cursor-pointer mx-auto sm:mx-0 inline-flex items-center justify-center"
          >
            Contact Info
          </motion.a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center mt-4 gap-6">
          <motion.a
            whileHover={{ y: -5 }}
            href="https://www.linkedin.com/in/sabir-salad-hassan-36260819a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <i className="fa-brands fa-linkedin"></i>
          </motion.a>
          <motion.a
            whileHover={{ y: -5 }}
            href="https://github.com/karimsaabir9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
          >
            <i className="fa-brands fa-github"></i>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
