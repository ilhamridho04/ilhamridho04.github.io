import { motion } from 'framer-motion';
import { BadgeCheck, MapPin, Quote } from 'lucide-react';

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8, delay },
});

const About = () => (
  <section id="about" className="py-24 md:py-32 border-t border-[#0e7490]/20">
    <div className="container mx-auto px-6 max-w-[1100px]">
      <motion.div {...reveal()} className="text-center mb-16">
        <p className="text-sm md:text-base font-semibold text-[#67e8f9] tracking-[0.4em]">
          02 / ABOUT
        </p>
        <h3 className="mt-3 text-4xl md:text-6xl font-extrabold text-[#e2f4fc] [text-shadow:0_3px_10px_rgba(103,232,249,0.5)]">
          Who I Am
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        <motion.div {...reveal(0.15)} className="glass rounded-2xl p-7">
          <h4 className="text-xl font-bold text-[#67e8f9] mb-4">My Philosophy</h4>
          <p className="text-gray-300 leading-relaxed">
            I write code at the intersection of high performance and elegant user experience — not
            just building features, but solving core problems with robust, scalable infrastructure
            on the backend while presenting a beautiful, performant interface on the frontend.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#22d3ee]/10 border border-[#22d3ee]/30 text-[#67e8f9]">
              81 public repos
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#22d3ee]/10 border border-[#22d3ee]/30 text-[#67e8f9]">
              @ngodingskuyy
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#22d3ee]/10 border border-[#22d3ee]/30 text-[#67e8f9] flex items-center gap-1">
              <BadgeCheck className="w-3.5 h-3.5" /> Open to hire
            </span>
          </div>
        </motion.div>

        <motion.div {...reveal(0.3)} className="glass rounded-2xl p-7 flex items-center">
          <div className="w-full">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-3 h-3 rounded-full bg-[#22d3ee]" />
              <span className="w-3 h-3 rounded-full bg-[#0e7490]" />
              <span className="w-3 h-3 rounded-full bg-[#04121a]" />
              <span className="ml-3 text-xs text-gray-500 font-mono">craft.sh</span>
            </div>
            <pre className="font-mono text-sm text-[#67e8f9]/90 leading-relaxed">{`$ whoami
> ilhamridho04
$ mission
> build tools that are
  useful for everyone
$ status
> [██████████] 100%`}</pre>
          </div>
        </motion.div>

        <motion.div
          {...reveal(0.45)}
          className="glass rounded-2xl p-7 flex flex-col justify-between gap-6"
        >
          <div>
            <h4 className="text-xl font-bold text-[#67e8f9] mb-4">Motto & Location</h4>
            <div className="border-l-4 border-[#67e8f9] bg-[#061c26]/60 rounded-r-xl p-5">
              <Quote className="w-5 h-5 text-[#22d3ee]/70 mb-2" />
              <p className="italic text-lg text-gray-200 leading-snug">
                &quot;Mulai aja dulu. Nunggu siap gak bakal bikin lo jalan.&quot;
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-lg text-gray-300">
            <MapPin className="w-5 h-5 text-[#22d3ee]" /> Kuningan, West Java, Indonesia
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
