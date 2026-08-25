import { motion } from 'framer-motion';
import { ArrowUpCircle } from 'lucide-react';

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="border-t border-[#0e7490]/20 bg-[#04121a]/60"
  >
    <div className="container mx-auto px-6 py-10 max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-[#e2f4fc] font-medium">© 2026 Ilham Ridho Asysyifa&apos;a</p>
      <p className="text-sm text-gray-500">
        Powered by <span className="text-[#67e8f9]">NgodingSkuyy</span>
      </p>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#22d3ee]/40 text-[#67e8f9] hover:bg-[#22d3ee]/10 transition-colors duration-300"
      >
        <ArrowUpCircle className="w-5 h-5" /> Back to Top
      </button>
    </div>
  </motion.footer>
);

export default Footer;
