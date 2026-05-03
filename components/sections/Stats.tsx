'use client';
// components/sections/Stats.tsx
import { motion } from 'framer-motion';

const stats = [
  { number: '300+', label: 'Mariages', desc: 'célébrés en France et à l\'international' },
  { number: '800+', label: 'Sessions', desc: 'portrait, studio & corporate' },
  { number: '10', label: 'Années', desc: 'd\'expérience photographique' },
  { number: '98%', label: 'Satisfaction', desc: 'clients qui nous recommandent' },
];

export default function Stats() {
  return (
    <section className="px-8 md:px-16">
      <div className="bg-ink rounded-3xl py-16 px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center"
        >
          <p className="text-[0.65rem] font-normal tracking-[0.18em] uppercase text-white/28 mb-2">Chiffres clés</p>
          <h2 className="font-serif text-[clamp(1.8rem,3.5vw,3rem)] leading-[1.08] tracking-[-0.025em] text-white">
            En quelques <em className="not-italic text-white/35">chiffres.</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              className="bg-ink px-8 py-10 text-center group hover:bg-white/5 transition-colors"
            >
              <p className="font-serif text-[2.2rem] tracking-[-0.03em] text-white mb-1">{s.number}</p>
              <p className="text-[0.78rem] font-normal text-white/70 mb-1">{s.label}</p>
              <p className="text-[0.65rem] text-white/28 leading-relaxed hidden md:block">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
