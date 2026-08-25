import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, Rocket, Server, Wifi } from 'lucide-react';

const PILLARS = [
  {
    icon: Server,
    title: 'Backend Engineering',
    desc: 'Robust REST APIs, queued jobs, payment integrations and data pipelines with Laravel, Node.js & Express.',
  },
  {
    icon: Wifi,
    title: 'Networking & Systems',
    desc: 'Mikrotik RouterOS, GPS tracking (Traccar), VPN services, and self-hosted infrastructure at scale.',
  },
  {
    icon: Rocket,
    title: 'DevOps & Automation',
    desc: 'Docker-first workflows, CI-ready tooling, and server automation scripts built to just work.',
  },
  {
    icon: Palette,
    title: 'Frontend Craft',
    desc: 'Animated interfaces with React, Vue 3, Flutter and Tailwind — from dashboards to wedding invitations.',
  },
];

const TERMINAL_LINES = [
  { cmd: 'whoami', out: 'ilham — senior full-stack dev @ ngodingskuyy' },
  { cmd: 'location', out: 'Kuningan, West Java, ID' },
  { cmd: 'stack', out: 'laravel · nodejs · react · docker · mikrotik' },
];

const Terminal = () => {
  const [line, setLine] = useState(0);
  const [char, setChar] = useState(0);

  useEffect(() => {
    if (line >= TERMINAL_LINES.length) return undefined;
    const current = TERMINAL_LINES[line];
    let timeout;
    if (char <= current.out.length) {
      timeout = setTimeout(() => setChar((c) => c + 1), 28);
    } else {
      timeout = setTimeout(() => {
        setLine((l) => l + 1);
        setChar(0);
      }, 550);
    }
    return () => clearTimeout(timeout);
  }, [line, char]);

  const renderLine = (idx) => {
    const done = idx < line;
    const active = idx === line;
    const text = done ? TERMINAL_LINES[idx].out : active ? TERMINAL_LINES[idx].out.slice(0, char) : '';
    return (
      <div key={TERMINAL_LINES[idx].cmd} className="mb-1.5">
        <span className="text-[#67e8f9] mr-2">$</span>
        <span className="text-[#e2f4fc]">{TERMINAL_LINES[idx].cmd}</span>
        {active && <span className="ml-2 inline-block w-[8px] h-[1.1em] align-middle bg-[#22d3ee] animate-cursor" />}
        {text !== '' && (
          <div className="text-[#9ca3af] pl-6">{text}</div>
        )}
      </div>
    );
  };

  return <div className="font-mono text-sm md:text-base">{TERMINAL_LINES.map((_, i) => renderLine(i))}</div>;
};

const SeniorDev = () => (
  <section id="senior" className="py-24 md:py-32 border-t border-[#0e7490]/20">
    <div className="container mx-auto px-6 max-w-[1200px]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="text-sm md:text-base font-semibold text-[#67e8f9] tracking-[0.4em]">
          03 / EXPERTISE
        </p>
        <h3 className="mt-3 text-4xl md:text-6xl font-extrabold text-[#e2f4fc] [text-shadow:0_3px_10px_rgba(103,232,249,0.5)]">
          Engineering Pillars
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
        {PILLARS.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: (i % 2) * 0.12 }}
            className="group glass rounded-2xl p-8 relative overflow-hidden hover:shadow-[0_0_35px_rgba(34,211,238,0.2)] transition-shadow duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#67e8f9]/10 via-transparent to-[#22d3ee]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10">
              <div className="p-3 mb-5 inline-block rounded-xl bg-[#061c26]/80 border border-[#67e8f9]/30 group-hover:scale-110 transition-transform duration-300">
                <pillar.icon className="w-8 h-8 text-[#22d3ee]" />
              </div>
              <h4 className="text-2xl font-bold text-[#e2f4fc] mb-3">{pillar.title}</h4>
              <p className="text-gray-300 leading-relaxed">{pillar.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="glass rounded-2xl p-7 glow-ring"
      >
        <div className="flex items-center justify-between mb-5">
          <h4 className="text-lg font-bold text-[#67e8f9] flex items-center gap-2">
            Terminal Session
            <span className="text-xs font-normal text-gray-500">(Operational Info)</span>
          </h4>
          <span className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-[#22d3ee]" />
            <span className="w-3 h-3 rounded-full bg-[#0e7490]" />
            <span className="w-3 h-3 rounded-full bg-[#04121a]" />
          </span>
        </div>
        <div className="border-l-4 border-[#67e8f9] pl-4 py-2 bg-[#020a0f]/80 rounded-r-lg overflow-x-auto">
          <Terminal />
        </div>
      </motion.div>
    </div>
  </section>
);

export default SeniorDev;
