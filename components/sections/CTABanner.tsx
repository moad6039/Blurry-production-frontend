"use client";
// components/sections/CTABanner.tsx
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="px-8 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-3xl"
      >
        <Image
          src="https://cdn.myportfolio.com/c005775b-fd65-4e69-934d-1eb80e8a753d/aec092a3-662a-4215-b5d3-58bb11b5e588_rwc_0x192x3840x2164x32.jpg?h=adb1cb232ef0862e5978227e742d3e59"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 30%" }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 py-20 px-8 md:px-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-[0.68rem] tracking-[0.18em] uppercase text-white/40 mb-3">
              Réservation
            </p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.08] tracking-[-0.025em] text-white">
              Votre projet
              <br />
              <em className="not-italic text-white/45">mérite le meilleur.</em>
            </h2>
          </div>
          <Link
            href="/contact"
            className="flex items-center gap-3 bg-white text-ink text-[0.82rem] font-normal px-8 py-3.5 rounded-full hover:bg-white/88 hover:scale-[1.02] transition-all duration-200 whitespace-nowrap"
          >
            Réserver une séance
            <ArrowRight size={16} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
