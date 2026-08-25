import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const LINKS = [
  { href: 'home', label: 'Home' },
  { href: 'about', label: 'About' },
  { href: 'senior', label: 'Expertise' },
  { href: 'stack', label: 'Stack' },
  { href: 'projects', label: 'Projects' },
  { href: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    LINKS.forEach(({ href }) => {
      const el = document.getElementById(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-[#020a0f]/90 backdrop-blur-md border-b border-[#0e7490]/30 shadow-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-[1400px]">
        <a href="#home" className="text-2xl font-extrabold tracking-wider text-gradient-cyan">
          IR<span className="text-[#e2f4fc]">.</span>dev
        </a>

        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={`#${href}`}
              className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                active === href ? 'text-[#67e8f9]' : 'text-[#e2f4fc]/80 hover:text-[#67e8f9]'
              }`}
            >
              {label}
              {active === href && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-2 right-2 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-[#67e8f9] to-[#06b6d4]"
                />
              )}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/ilhamridho04"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[#e2f4fc]/70 hover:text-[#67e8f9] transition-colors"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href="https://ilhamridho04.github.io"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Website"
            className="text-[#e2f4fc]/70 hover:text-[#67e8f9] transition-colors"
          >
            <Globe className="w-5 h-5" />
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="md:hidden text-[#67e8f9]"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#04121a]/95 backdrop-blur-lg border-t border-[#0e7490]/30 shadow-xl"
        >
          <div className="flex flex-col items-center py-4 space-y-1">
            {LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={`#${href}`}
                onClick={() => setIsOpen(false)}
                className={`block text-lg py-2.5 transition-colors ${
                  active === href ? 'text-[#67e8f9]' : 'text-[#e2f4fc]/85 hover:text-[#67e8f9]'
                }`}
              >
                {label}
              </a>
            ))}
            <div className="flex gap-5 pt-3">
              <a
                href="https://github.com/ilhamridho04"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#67e8f9]"
              >
                <GithubIcon className="w-6 h-6" />
              </a>
              <a
                href="https://ilhamridho04.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#67e8f9]"
              >
                <Globe className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
