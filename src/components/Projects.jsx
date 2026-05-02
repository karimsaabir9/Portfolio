import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-white dark:bg-[#1e293b] w-full max-w-2xl max-h-[90vh] rounded-[2.5rem] shadow-2xl overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>

          <div className="p-8">
            <div className="w-full rounded-[1.5rem] overflow-hidden mb-6 border border-gray-100 dark:border-gray-800 shadow-sm">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto max-h-[500px] object-contain bg-gray-50 dark:bg-gray-900"
              />
            </div>

            <h2 className="text-3xl font-bold mb-4 dark:text-white">{project.title}</h2>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech?.map((t) => (
                <span key={t} className="px-4 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                  {t}
                </span>
              ))}
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
              {project.description}
            </p>

            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-black font-bold py-4 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all"
              >
                Github Source
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-black dark:bg-white text-white dark:text-black font-bold py-4 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all"
              >
                Live Demo
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const ProjectCard = ({ project, index, onOpen }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onClick={onOpen}
      className="p-6 bg-white dark:bg-[#1e293b] rounded-[2rem] border border-gray-400 dark:border-gray-700 text-center shadow hover:shadow-xl transition-all cursor-pointer group"
    >
      <div className="h-80 w-full rounded-[2rem] overflow-hidden mb-6 border border-gray-200 dark:border-gray-800 relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="bg-white/90 px-6 py-2 rounded-full font-bold text-black shadow-lg">View Details</span>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4 dark:text-white">{project.title}</h2>
      <div className="flex justify-center gap-4" onClick={(e) => e.stopPropagation()}>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold transition-all duration-300 ease-in-out p-3 px-6 rounded-full border border-gray-800 dark:border-gray-200 dark:text-white hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black cursor-pointer"
        >
          Github
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold transition-all duration-300 ease-in-out p-3 px-6 rounded-full border border-gray-800 dark:border-gray-200 dark:text-white hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black cursor-pointer"
        >
          Live
        </motion.a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      image: '/images/Photo One.png',
      title: 'Blogify CMS',
      description: 'A modern full-stack content management system built with React, Supabase, and Tailwind CSS. It features a rich text editor, image uploads, and real-time database updates.',
      tech: ['React', 'Supabase', 'Tailwind', 'Framer Motion'],
      githubUrl: 'https://github.com/karimsaabir9/Blogify-A-Modern-Full-Stack-Content-Management-System-with-Supabase',
      liveUrl: 'https://blogify-a-modern-full-stack-content-pied.vercel.app/',
    },
    {
      image: '/images/Photo Three.png',
      title: 'Dynamic Clock',
      description: 'An interactive clock application that shows real-time updates with smooth animations. Designed with a clean UI focus and modern aesthetics.',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'Animation'],
      githubUrl: 'https://github.com/karimsaabir9/Clock',
      liveUrl: 'https://clock-smoky-six.vercel.app/',
    },
    {
      image: '/images/Photo Two.png',
      title: 'Uni Technology',
      description: 'A professional business website for a technology company, featuring responsive layouts, service showcases, and a contact system.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Responsive Design'],
      githubUrl: 'https://github.com/karimsaabir9/Uni-Technology',
      liveUrl: 'https://uni-technology.vercel.app/',
    },
  ];

  return (
    <section
      id="project"
      className="max-w-6xl mx-auto px-6 py-12 mb-12 min-h-screen flex flex-col justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-center text-[#555555] dark:text-gray-400 block my-2 text-lg">
          Browse My Recent
        </p>
        <h1 className="text-4xl md:text-[3.5rem] text-center mb-16 font-bold dark:text-white">
          Projects
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            onOpen={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
