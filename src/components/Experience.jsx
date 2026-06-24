import { motion } from 'framer-motion';

const SkillItem = ({ name, level, index }) => {
  return (
    <motion.article 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="flex w-40 sm:w-44 lg:w-auto gap-3 items-start"
    >
      <i className="fa-solid fa-circle-check text-xl mt-1 text-gray-700 dark:text-gray-300"></i>
      <div className="text-left">
        <h3 className="text-lg font-bold leading-tight dark:text-white">{name}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">{level}</p>
      </div>
    </motion.article>
  );
};

const SkillCard = ({ title, skills, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="p-8 bg-white dark:bg-[#1e293b] rounded-[2rem] border border-gray-400 dark:border-gray-700 text-center shadow hover:shadow-lg transition-all"
    >
      <h2 className="text-gray-700 dark:text-gray-200 font-semibold text-2xl mb-8">{title}</h2>
      <div className="grid grid-cols-1 gap-y-6 justify-items-center w-full lg:grid-cols-2 lg:gap-x-8 lg:gap-y-8 lg:justify-items-start lg:px-4">
        {skills.map((skill, index) => (
          <SkillItem key={skill.name} name={skill.name} level={skill.level} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const frontendSkills = [
    { name: 'HTML', level: 'Experienced' },
    { name: 'CSS', level: 'Experienced' },
    { name: 'JavaScript', level: 'Experienced' },
    { name: 'Tailwind CSS', level: 'Experienced' },
    { name: 'TypeScript', level: 'Intermediate' },
    { name: 'Next.js', level: 'Intermediate' },
  ];

  const backendSkills = [
    { name: 'PostgreSQL', level: 'Basic' },
    { name: 'Node JS', level: 'Intermediate' },
    { name: 'Express JS', level: 'Intermediate' },
    { name: 'Git', level: 'Intermediate' },
  ];

  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-6 py-12 mb-12 min-h-screen flex flex-col justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-center text-[#555555] dark:text-gray-400 block my-2">Explore My</p>
        <h1 className="text-3xl md:text-[3rem] text-center mb-12 font-bold dark:text-white">
          Experience
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SkillCard title="Frontend Development" skills={frontendSkills} delay={0.2} />
        <SkillCard title="Backend Development" skills={backendSkills} delay={0.4} />
      </div>
    </section>
  );
};

export default Experience;
