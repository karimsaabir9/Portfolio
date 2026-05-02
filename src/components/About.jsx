import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-12 min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-center text-[#555555] dark:text-gray-400 block my-2">Get To Know More</p>
        <h1 className="text-3xl md:text-[3rem] text-center mb-8 md:mb-12 font-bold dark:text-white">
          About Me
        </h1>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
        {/* About Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="shrink-0 w-full sm:w-80 lg:w-[400px]"
        >
          <img
            src="/images/saa.JPG"
            className="rounded-[4rem] object-cover shadow-2xl w-full h-auto max-h-[600px]"
            alt="Karim Sabir"
          />
        </motion.div>

        {/* About Content */}
        <div className="flex flex-col justify-center w-full">
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="p-8 text-center bg-white dark:bg-[#1e293b] rounded-[2rem] border border-gray-400 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
            >
              <i className="fa-solid fa-certificate text-2xl mb-3 text-black dark:text-white"></i>
              <h3 className="font-bold text-xl mb-1 dark:text-white">Experience</h3>
              <p className="text-gray-600 dark:text-gray-400">2+ years</p>
              <p className="text-gray-600 dark:text-gray-400">Frontend Development</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="p-8 text-center bg-white dark:bg-[#1e293b] rounded-[2rem] border border-gray-400 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
            >
              <i className="fa-solid fa-user-graduate text-2xl mb-3 text-black dark:text-white"></i>
              <h3 className="font-bold text-xl mb-1 dark:text-white">Education</h3>
              <p className="text-gray-600 dark:text-gray-400">B.Sc. in Computer Science</p>
              <p className="text-gray-600 dark:text-gray-400">University of Somalia</p>
            </motion.div>
          </div>

          {/* Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed"
          >
            <p>
              "I am a dedicated Frontend Developer with over 2 years of professional experience in building responsive and user-friendly websites. Holding a B.Sc. in Computer Science from the University of Somalia (UNISO), I specialize in transforming design concepts into functional code using modern technologies like JavaScript, TypeScript, and Tailwind CSS. I am passionate about writing clean code and delivering high-quality web solutions."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
