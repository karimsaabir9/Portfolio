const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#project', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="max-w-6xl mx-auto px-6 pb-12 mt-8">
      {/* Links */}
      <nav className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 mb-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-xl text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-white capitalize transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Copyright */}
      <p className="text-center text-[#555555] dark:text-gray-400 text-sm px-4">
        Copyright &copy; {currentYear} KarimSabir. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
