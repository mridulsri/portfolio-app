import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { navLinks } from '../constants/navLinks';
import { useTheme } from '../hooks/useTheme';
import { useActiveSection } from '../hooks/useActiveSection';

const sectionIds = navLinks.map((link) => link.id);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const activeId = useActiveSection(sectionIds);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-sunset-50 dark:bg-midnight-950 shadow-sm border-b border-sunset-200/50 dark:border-midnight-800/50">
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        <a
          href="#hero"
          onClick={scrollToSection('hero')}
          className="text-lg font-bold text-midnight-900 dark:text-sunset-100 cursor-pointer"
        >
          Mridul<span className="text-sunset-600 dark:text-sunset-400">.dev</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={scrollToSection(id)}
                className={`text-sm font-medium transition-colors cursor-pointer ${
                  activeId === id
                    ? 'text-sunset-600 dark:text-sunset-400'
                    : 'text-midnight-800/80 dark:text-sunset-100/80 hover:text-sunset-600 dark:hover:text-sunset-400'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <Link
              to="/resume"
              className="text-sm font-medium px-4 py-2 rounded-full bg-sunset-500 text-white hover:bg-sunset-600 transition-colors"
            >
              Resume
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-full text-midnight-900 dark:text-sunset-100 hover:bg-sunset-200/50 dark:hover:bg-midnight-800/50 transition-colors"
          >
            {theme === 'dark' ? <FaSun size={16} /> : <FaMoon size={16} />}
          </button>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full text-midnight-900 dark:text-sunset-100 hover:bg-sunset-200/50 dark:hover:bg-midnight-800/50 transition-colors"
          >
            {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-sunset-50 dark:bg-midnight-950 border-t border-sunset-200/50 dark:border-midnight-800/50"
          >
            {navLinks.map(({ id, label }) => (
              <li key={id} className="px-6 py-3">
                <a
                  href={`#${id}`}
                  onClick={scrollToSection(id)}
                  className={`block text-sm font-medium cursor-pointer ${
                    activeId === id
                      ? 'text-sunset-600 dark:text-sunset-400'
                      : 'text-midnight-800 dark:text-sunset-100'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="px-6 py-3">
              <Link
                to="/resume"
                onClick={() => setIsOpen(false)}
                className="inline-block text-sm font-medium px-4 py-2 rounded-full bg-sunset-500 text-white"
              >
                Resume
              </Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
