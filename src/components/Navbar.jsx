import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#project', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="max-w-6xl mx-auto text-black dark:text-white px-6 py-8 md:px-8 lg:p-12 min-h-[10vh]">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="font-semibold text-2xl md:text-3xl text-gray-700 dark:text-gray-200">
          KarimSabir9️⃣
        </div>

        {/* Desktop Navigation & Toggle */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex space-x-8 capitalize text-gray-700 dark:text-gray-300 text-lg lg:text-2xl">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-gray-500 dark:hover:text-white hover:underline decoration-gray-500 underline-offset-8 decoration-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setDarkMode(!darkMode)}
            className="text-2xl cursor-pointer p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <i className={`fa-solid ${darkMode ? 'fa-sun text-yellow-400' : 'fa-moon text-gray-700'}`}></i>
          </motion.button>
        </div>

        {/* Mobile Menu Button & Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-2xl cursor-pointer"
          >
            <i className={`fa-solid ${darkMode ? 'fa-sun text-yellow-400' : 'fa-moon text-gray-700'}`}></i>
          </button>
          <button
            onClick={toggleMenu}
            className="text-3xl focus:outline-none cursor-pointer"
          >
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu Dropdown */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center mt-4 space-y-4 bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-800 lg:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xl text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-white"
              onClick={toggleMenu}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
