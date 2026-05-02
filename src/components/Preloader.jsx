import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white dark:bg-[#0f172a]"
    >
      <div className="relative">
        {/* Animated Rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 border-4 border-t-black dark:border-t-white border-r-transparent border-b-transparent border-l-transparent rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-24 h-24 border-4 border-r-black dark:border-r-white border-t-transparent border-b-transparent border-l-transparent rounded-full opacity-50"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-2xl font-bold tracking-widest dark:text-white"
      >
        KARIM SABIR
      </motion.div>
      
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="mt-2 text-sm text-gray-500 uppercase tracking-[0.3em]"
      >
        Loading Experience...
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
