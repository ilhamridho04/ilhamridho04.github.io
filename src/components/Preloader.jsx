import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const WORD = 'ILHAM RIDHO';

const Preloader = () => {
  const [phase, setPhase] = useState('visible'); // 'visible' -> 'exiting' -> 'gone'

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('exiting'), 1800);
    const t2 = setTimeout(() => setPhase('gone'), 2750);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === 'gone') return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020a0f]"
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === 'exiting' ? 0 : 1 }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
    >
      <div className="flex">
        {WORD.split('').map((ch, i) => (
          <motion.span
            key={i}
            className="text-4xl md:text-6xl font-extrabold tracking-[0.12em] text-gradient-cyan select-none"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 + i * 0.045, duration: 0.6, ease: 'easeOut' }}
          >
            {ch === ' ' ? '\u00A0' : ch}
          </motion.span>
        ))}
      </div>

      <motion.div
        className="mt-8 h-[3px] w-48 rounded-full bg-[#04121a] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[#67e8f9] to-[#06b6d4]"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
