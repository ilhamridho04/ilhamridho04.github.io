import { motion } from 'framer-motion';
import { Globe, Mail } from 'lucide-react';
import { GithubIcon, InstagramIcon } from './SocialIcons';

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/ilhamridho04', icon: GithubIcon },
  { label: 'Instagram', href: 'https://instagram.com/ilhamridho04', icon: InstagramIcon },
  { label: 'Website', href: 'https://ilhamridho04.github.io', icon: Globe },
];

const Contact = () => (
  <section id="contact" className="py-24 md:py-32 border-t border-[#0e7490]/20">
    <div className="container mx-auto px-6 max-w-[1100px] text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm md:text-base font-semibold text-[#67e8f9] tracking-[0.4em]">
          06 / CONTACT
        </p>
        <h3 className="mt-3 text-4xl md:text-6xl font-extrabold text-[#e2f4fc] [text-shadow:0_3px_10px_rgba(103,232,249,0.5)]">
          Let&apos;s build something useful.
        </h3>
        <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto">
          Open for collaborations, freelance projects, and interesting engineering problems.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="mt-12 flex flex-col items-center gap-10"
      >
        <a
          href="mailto:ilhamridho04@gmail.com"
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold uppercase tracking-wide text-[#020a0f] bg-gradient-to-r from-[#67e8f9] to-[#06b6d4] hover:shadow-[0_0_35px_rgba(34,211,238,0.5)] transition-all duration-300 hover:-translate-y-0.5"
        >
          <Mail className="w-5 h-5" /> Say Hello
        </a>

        <div className="flex flex-wrap justify-center gap-5">
          {SOCIALS.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6, boxShadow: '0 0 25px rgba(34,211,238,0.25)' }}
              className="glass rounded-2xl p-5 w-28 flex flex-col items-center gap-2 text-[#e2f4fc]/85 hover:text-[#67e8f9] hover:border-[#22d3ee]/60 transition-colors duration-300"
            >
              <social.icon className="w-6 h-6 text-[#67e8f9]" />
              <span className="text-sm font-medium">{social.label}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Contact;
