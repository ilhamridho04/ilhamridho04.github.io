import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, FolderGit, Lightbulb, Star } from 'lucide-react';
import useCountUp from '../utils/useCountUp';

const STATS = [
  { label: 'Public Repositories', value: 81, suffix: '+', icon: FolderGit },
  { label: 'GitHub Stars', value: 67, suffix: '+', icon: Star },
  { label: 'Years Coding', value: 6, suffix: '', icon: Calendar },
  { label: 'Core Focus Areas', value: 4, suffix: '', icon: Lightbulb },
];

const StatCard = ({ label, value, suffix, icon: Icon, start }) => {
  const count = useCountUp(value, 1600, start);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="glass rounded-2xl p-8 flex flex-col items-start justify-between h-full group hover:shadow-[0_0_35px_rgba(103,232,249,0.2)] transition-shadow duration-500"
    >
      <Icon className="w-7 h-7 text-[#22d3ee] mb-5 group-hover:scale-110 transition-transform duration-300" />
      <div>
        <p className="text-5xl md:text-6xl font-extrabold text-gradient-cyan">
          {count}
          {suffix}
        </p>
        <p className="mt-2 text-gray-400">{label}</p>
      </div>
    </motion.div>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="stats" className="py-20 md:py-28 border-t border-[#0e7490]/20">
      <div ref={ref} className="container mx-auto px-6 max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-sm md:text-base font-semibold text-[#67e8f9] tracking-[0.4em]">
            CORE METRICS
          </p>
          <h3 className="mt-3 text-3xl md:text-5xl font-extrabold text-[#e2f4fc]">
            A Snapshot of Experience
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} start={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
