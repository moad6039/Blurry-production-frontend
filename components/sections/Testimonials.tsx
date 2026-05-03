'use client';
// components/sections/Testimonials.tsx — Connecté à l'API backend
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useTestimonials } from '@/hooks/useTestimonials';

export default function Testimonials() {
  const { items, loading } = useTestimonials({ limit: 3 });

  return (
    <section className="px-8 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="mb-11"
      >
        <p className="text-[0.65rem] font-normal tracking-[0.18em] uppercase text-ash mb-2">Témoignages</p>
        <h2 className="font-serif text-[clamp(1.8rem,3.5vw,3rem)] leading-[1.08] tracking-[-0.025em] text-ink">
          Ce qu&apos;ils <em className="not-italic text-ash">disent.</em>
        </h2>
      </motion.div>

      {/* Loading skeleton */}
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white border border-[#ebebeb] rounded-2xl p-8 h-52 animate-pulse">
              <div className="h-4 bg-bone rounded w-3/4 mb-3" />
              <div className="h-3 bg-bone rounded w-full mb-2" />
              <div className="h-3 bg-bone rounded w-5/6" />
            </div>
          ))}
        </div>
      )}

      {/* Données API */}
      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((t, i) => (
            <motion.div
              key={t._id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className="bg-white border border-[#ebebeb] rounded-2xl p-8 flex flex-col gap-5 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-between">
                <Quote size={18} className="text-bone" />
                {t.rating && (
                  <div className="flex gap-0.5">
                    {[...Array(t.rating)].map((_, si) => (
                      <Star key={si} size={10} className="fill-ink text-ink" />
                    ))}
                  </div>
                )}
              </div>
              <p className="text-[0.88rem] leading-[1.8] text-[#666] flex-1">{t.text}</p>
              <div>
                <p className="text-[0.88rem] font-normal text-ink">{t.author}</p>
                {t.role && (
                  <p className="text-[0.65rem] text-ash uppercase tracking-[0.1em] mt-0.5">{t.role}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
