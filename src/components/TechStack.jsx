import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiPython,
  SiDart,
  SiLua,
  SiGnubash,
  SiLaravel,
  SiExpress,
  SiCodeigniter,
  SiNodedotjs,
  SiVuedotjs,
  SiReact,
  SiFlutter,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiRedis,
  SiDocker,
  SiNginx,
  SiApache,
  SiGit,
  SiGithubactions,
  SiTelegram,
  SiWhatsapp,
} from 'react-icons/si';
import {
  Bot,
  CircuitBoard,
  Cloud,
  Code,
  CreditCard,
  Cpu,
  Database,
  GitBranch,
  Layout,
  Map,
  Radar,
  Rocket,
  Route,
  Router,
  Zap,
} from 'lucide-react';

const TECH_STACKS = [
  {
    category: 'Languages',
    icon: Code,
    chips: ['JavaScript', 'TypeScript', 'PHP', 'Python', 'Dart', 'Lua', 'Bash/Shell'],
  },
  {
    category: 'Backend & Frameworks',
    icon: Zap,
    chips: ['Laravel', 'Express.js', 'CodeIgniter', 'Node.js', 'Vue 3', 'React'],
  },
  {
    category: 'Mobile & Desktop',
    icon: Layout,
    chips: ['Flutter', 'React Native'],
  },
  {
    category: 'Databases & Data',
    icon: Database,
    chips: ['MySQL', 'PostgreSQL', 'SQLite', 'Redis'],
  },
  {
    category: 'DevOps & Infrastructure',
    icon: Rocket,
    chips: ['Docker', 'Nginx', 'Apache', 'QEMU/VM', 'Azure', 'RouterOS', 'OSRM', 'Traccar'],
  },
  {
    category: 'Tools & Integrations',
    icon: GitBranch,
    chips: [
      'Git',
      'GitHub Actions',
      'Midtrans',
      'Telegram Bot API',
      'WhatsApp API',
      'Ollama',
      'ROCm',
      'Xray/3x-ui',
    ],
  },
];

// Brand icon per tech name (react-icons/si) with lucide fallbacks for brands without logos.
const TECH_ICONS = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  PHP: SiPhp,
  Python: SiPython,
  Dart: SiDart,
  Lua: SiLua,
  'Bash/Shell': SiGnubash,
  Laravel: SiLaravel,
  'Express.js': SiExpress,
  CodeIgniter: SiCodeigniter,
  'Node.js': SiNodedotjs,
  'Vue 3': SiVuedotjs,
  React: SiReact,
  Flutter: SiFlutter,
  'React Native': SiReact,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  SQLite: SiSqlite,
  Redis: SiRedis,
  Docker: SiDocker,
  Nginx: SiNginx,
  Apache: SiApache,
  'QEMU/VM': Cpu,
  Azure: Cloud,
  RouterOS: Router,
  OSRM: Route,
  Traccar: Map,
  Git: SiGit,
  'GitHub Actions': SiGithubactions,
  Midtrans: CreditCard,
  'Telegram Bot API': SiTelegram,
  'WhatsApp API': SiWhatsapp,
  Ollama: Bot,
  ROCm: CircuitBoard,
  'Xray/3x-ui': Radar,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const TechChip = ({ name }) => (
  <motion.span
    className="px-4 py-2 rounded-full text-sm font-medium cursor-pointer bg-[#061c26]/70 border border-[#22d3ee]/30 hover:bg-[#22d3ee]/20 transition-colors duration-300 shadow-md"
    whileHover={{ scale: 1.06, y: -2, boxShadow: '0 4px 15px rgba(34, 211, 238, 0.3)' }}
  >
    {name}
  </motion.span>
);

const TechMarquee = () => {
  const chips = TECH_STACKS.flatMap((stack) => stack.chips);
  const track = [...chips, ...chips];

  return (
    <div
      className="overflow-hidden py-6 border-y border-[#0e7490]/30"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      }}
    >
      <div className="flex w-max animate-marquee">
        {track.map((chip, i) => {
          const Icon = TECH_ICONS[chip];
          return (
            <span
              key={`${chip}-${i}`}
              className="mx-6 flex items-center gap-2.5 font-mono text-[#e2f4fc]/80 whitespace-nowrap"
            >
              {Icon && <Icon className="w-5 h-5 text-[#22d3ee]" />}
              {chip}
            </span>
          );
        })}
      </div>
    </div>
  );
};

const TechStack = () => (
  <section id="stack" className="py-24 md:py-32 border-t border-[#0e7490]/20">
    <div className="container mx-auto px-6 max-w-[1200px]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <p className="text-sm md:text-base font-semibold text-[#67e8f9] tracking-[0.4em]">
          04 / TECHNOLOGY STACK
        </p>
        <h3 className="mt-3 text-4xl md:text-6xl font-extrabold text-[#e2f4fc] [text-shadow:0_3px_10px_rgba(103,232,249,0.5)]">
          Tools of the Trade
        </h3>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-14 mb-16"
      >
        {TECH_STACKS.map((stack) => (
          <motion.div key={stack.category} variants={itemVariants}>
            <h4 className="text-2xl md:text-3xl font-extrabold text-[#67e8f9] mb-6 flex items-center">
              <stack.icon className="w-6 h-6 mr-3" /> {stack.category}
            </h4>
            <div className="flex flex-wrap gap-4">
              {stack.chips.map((chip) => (
                <TechChip key={chip} name={chip} />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="pt-6">
        <h4 className="text-center text-lg font-semibold text-[#67e8f9] mb-4">Knowledge Flow</h4>
        <TechMarquee />
      </div>
    </div>
  </section>
);

export default TechStack;
