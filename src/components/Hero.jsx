import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Star } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import profileImage from '../assets/45212532.png';

const ROLES = [
  'Senior Full-Stack Developer',
  'Backend Engineer',
  'Systems & Network Engineer',
  'Open Source Contributor',
  'Laravel Craftsman',
];

const Typewriter = ({ roles }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const current = roles[index];
    let char = 0;
    let timeout;

    const type = () => {
      if (char <= current.length) {
        setText(current.slice(0, char));
        char += 1;
        timeout = setTimeout(type, 70);
      } else {
        timeout = setTimeout(() => {
          setIndex((i) => (i + 1) % roles.length);
        }, 2100);
      }
    };

    timeout = setTimeout(type, 400);
    return () => clearTimeout(timeout);
  }, [index, roles]);

  return (
    <div className="min-h-[3.5rem] md:min-h-[4.5rem] flex items-center justify-center">
      <span className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#e2f4fc]">
        {text}
        <span className="inline-block w-[3px] h-[1.1em] ml-1 align-middle bg-[#22d3ee] animate-cursor" />
      </span>
    </div>
  );
};

const BADGES = [
  { icon: <GithubIcon className="w-4 h-4" />, text: 'GitHub — 81 Repos' },
  { icon: <Star className="w-4 h-4" />, text: 'Laravel / Docker' },
  { icon: <span className="text-sm">⚙️</span>, text: 'React / Vue / Flutter' },
];

const Hero = () => (
  <section
    id="home"
    className="relative pt-36 pb-24 md:pb-36 min-h-screen flex items-center justify-center"
  >
    <div className="container mx-auto px-4 text-center max-w-5xl">
      <motion.div
        initial={{ scale: 0.4, opacity: 0, rotate: -8 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 14 }}
        className="mx-auto w-28 h-28 md:w-36 md:h-36 rounded-3xl bg-gradient-to-br from-[#22d3ee] via-[#0e7490] to-[#020a0f] p-[2px] shadow-[0_10px_60px_rgba(34,211,238,0.45)] animate-pulse-glow"
      >
        <div className="w-full h-full rounded-3xl bg-[#04121a] flex items-center justify-center">
          <img
            src={profileImage}
            alt="Ilham Ridho Asysyifa'a"
            className="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover"
          />
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.9 }}
        className="mt-10 text-4xl md:text-6xl font-extrabold tracking-tight text-[#e2f4fc]"
      >
        Ilham Ridho <span className="text-gradient-cyan">Asysyifa'a</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55, duration: 0.8 }}
        className="mt-4 text-lg md:text-xl text-[#9ca3af]"
      >
        build a new project to be useful for everyone.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.8 }}
        className="mt-6"
      >
        <Typewriter roles={ROLES} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-10 flex flex-wrap justify-center gap-5"
      >
        <button
          onClick={() => document.getElementById('senior')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-3.5 rounded-full font-bold uppercase tracking-wide text-[#020a0f] bg-gradient-to-r from-[#67e8f9] to-[#06b6d4] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300 hover:-translate-y-0.5"
        >
          View Expertise <ChevronRight className="inline w-5 h-5 ml-1" />
        </button>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-3.5 rounded-full font-bold uppercase tracking-wide border border-[#22d3ee]/50 text-[#67e8f9] hover:bg-[#22d3ee]/10 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-300 hover:-translate-y-0.5"
        >
          Get In Touch
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="mt-12 flex flex-wrap justify-center gap-4"
      >
        {BADGES.map((badge, i) => (
          <motion.div
            key={badge.text}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.8,
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium glass"
          >
            <span className="text-[#67e8f9]">{badge.icon}</span> {badge.text}
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Hero;
