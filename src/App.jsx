import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Theme toggle
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f172a] text-black dark:text-white transition-colors duration-300">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-black dark:bg-white z-[10000] origin-left"
        style={{ scaleX }}
      />
      <Toaster position="top-center" reverseOrder={false} />
      {/* Navigation */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Me */}
        <About />

        {/* Experience */}
        <Experience />

        {/* Projects */}
        <Projects />

        {/* Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
