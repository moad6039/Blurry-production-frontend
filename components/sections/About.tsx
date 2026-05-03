"use client";
// components/sections/About.tsx
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "@/lib/utils";

export default function About() {
  return (
    <section id="apropos">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[400px] md:h-[640px] overflow-hidden group"
        >
          <Image
            src={IMAGES.studio}
            alt="Studio Blurry Production"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="bg-mist px-8 py-16 md:px-[72px] md:py-20 flex flex-col justify-center"
        >
          <p className="text-[0.65rem] font-normal tracking-[0.16em] uppercase text-ash mb-2.5">
            À propos
          </p>
          <h2 className="font-serif text-[clamp(2rem,3.2vw,2.8rem)] leading-[1.1] tracking-[-0.025em] text-ink mb-7">
            Derrière
            <br />
            <em className="not-italic text-ash">l&apos;objectif.</em>
          </h2>
          <p className="text-[0.9rem] leading-[1.78] text-[#777] mb-3.5 max-w-[400px]">
            Photographe depuis plus de 10 ans, je travaille avec une approche
            documentaire et émotionnelle. Mon travail est guidé par une
            conviction : les meilleures photos se trouvent entre les poses.
          </p>
          <p className="text-[0.9rem] leading-[1.78] text-[#777] mb-8 max-w-[400px]">
            Basé en France, je me déplace partout — en France et à
            l&apos;international — pour capturer vos moments les plus précieux.
          </p>
          <Link
            href="/a-propos"
            className="inline-flex items-center gap-2 text-[0.82rem] font-normal text-ink group/link self-start"
          >
            En savoir plus
            <ArrowRight
              size={14}
              className="group-hover/link:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
