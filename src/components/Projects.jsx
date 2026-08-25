import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';

const PROJECTS = [
  {
    name: 'get-contact.js',
    description: 'GetContact client library for NodeJS that connects through the GetContact Web browser app.',
    language: 'JavaScript',
    stars: 11,
    link: 'https://github.com/ilhamridho04/get-contact.js',
  },
  {
    name: 'docker-routeros',
    description: 'Docker setup to run RouterOS with QEMU on Alpine Linux — exposes ports for RouterOS & VPN services.',
    language: 'Dockerfile',
    stars: 4,
    link: 'https://github.com/ilhamridho04/docker-routeros',
  },
  {
    name: 'whatsapp-web.js',
    description: 'WhatsApp client library for NodeJS that connects through the WhatsApp Web browser app.',
    language: 'JavaScript',
    stars: 3,
    link: 'https://github.com/ilhamridho04/whatsapp-web.js',
  },
  {
    name: 'github-api-statistic',
    description: 'GitHub Statistics generator.',
    language: 'JavaScript',
    stars: 2,
    link: 'https://github.com/ilhamridho04/github-api-statistic',
  },
  {
    name: 'laravel-module-generator',
    description: 'Module generator for Laravel.',
    language: 'PHP',
    stars: 2,
    link: 'https://github.com/ilhamridho04/laravel-module-generator',
  },
  {
    name: 'mikci',
    description: 'Mikrotik RouterOS API client for CodeIgniter.',
    language: 'PHP',
    stars: 2,
    link: 'https://github.com/ilhamridho04/mikci',
  },
  {
    name: 'laravel-doctypes',
    description: 'Laravel Doctypes helper.',
    language: 'PHP',
    stars: 1,
    link: 'https://github.com/ilhamridho04/laravel-doctypes',
  },
  {
    name: 'project-osrm',
    description: 'OSRM-based routing experiments.',
    language: 'JavaScript',
    stars: 1,
    link: 'https://github.com/ilhamridho04/project-osrm',
  },
];

const LANG_COLORS = {
  JavaScript: '#f7df1e',
  PHP: '#8993be',
  Dockerfile: '#0db7ed',
};

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -8, y: px * 10 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.12 }}
      className="relative group glass rounded-2xl p-6 overflow-hidden hover:shadow-[0_0_35px_rgba(34,211,238,0.2)] transition-shadow duration-500"
      style={{ perspective: 900 }}
    >
      <div
        className="relative z-10"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.15s ease-out',
        }}
      >
        <div className="flex items-start justify-between gap-3">
          <h4 className="text-xl font-bold text-[#e2f4fc] group-hover:text-[#67e8f9] transition-colors break-all">
            {project.name}
          </h4>
          <Star className="w-4 h-4 text-[#f7df1e] shrink-0" />
        </div>
        <div className="flex items-center gap-2 mt-2 text-sm text-gray-400">
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ background: LANG_COLORS[project.language] || '#22d3ee' }}
          />
          <span>{project.language}</span>
          <span className="text-[#67e8f9]">{project.stars}★</span>
        </div>
        <p className="mt-4 text-gray-300 text-sm leading-relaxed min-h-[4.5rem]">
          {project.description}
        </p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#67e8f9] hover:underline"
        >
          View Project <ExternalLink className="w-4 h-4" />
        </a>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.08),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};

const Projects = () => (
  <section id="projects" className="py-24 md:py-32 border-t border-[#0e7490]/20">
    <div className="container mx-auto px-6 max-w-[1200px]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="text-sm md:text-base font-semibold text-[#67e8f9] tracking-[0.4em]">
          05 / PROJECTS
        </p>
        <h3 className="mt-3 text-4xl md:text-6xl font-extrabold text-[#e2f4fc] [text-shadow:0_3px_10px_rgba(103,232,249,0.5)]">
          Selected Work Samples
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
