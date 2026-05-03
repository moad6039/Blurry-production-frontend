"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const HERO_IMAGE = "/images/hero.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

export default function Hero() {
  return (
    <header
      className="relative w-full overflow-hidden"
      style={{ height: "100svh", minHeight: "600px" }}
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Overlay dégradé */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.1) 100%)",
        }}
      />

      {/* Bande déco gauche */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-[3px]"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(255,255,255,0.3), transparent)",
        }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.4, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Contenu */}
      <div className="absolute inset-0 flex flex-col justify-end px-8 md:px-16 pb-16 md:pb-20 pt-24">
        <motion.p
          custom={0.4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-[0.65rem] font-normal tracking-[0.22em] uppercase mb-5"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          Blurry Production — Photographe
        </motion.p>

        <motion.h1
          custom={0.55}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-serif leading-[1.0] tracking-[-0.02em] text-white mb-6"
          style={{ fontSize: "clamp(3.2rem, 9vw, 7.5rem)" }}
        >
          L&apos;instant
          <br />
          <span style={{ opacity: 0.45, fontStyle: "italic" }}>
            avant tout.
          </span>
        </motion.h1>

        {/* Ligne déco */}
        <motion.div
          custom={0.65}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex items-center gap-4 mb-6"
        >
          <div
            style={{
              width: "32px",
              height: "1px",
              background: "rgba(255,255,255,0.35)",
            }}
          />
          <p
            className="text-[0.78rem] tracking-[0.1em]"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Mariage · Portrait · Studio · Événements
          </p>
        </motion.div>

        <motion.div
          custom={0.75}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex gap-3 flex-wrap"
        >
          <Link
            href="/portfolio"
            className="text-[0.82rem] font-normal px-7 py-3 rounded-full transition-all duration-300"
            style={{
              background: "#fff",
              color: "#111",
              letterSpacing: "0.03em",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.88)";
              e.currentTarget.style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Voir le portfolio
          </Link>
          <Link
            href="/contact"
            className="text-[0.82rem] font-normal px-7 py-3 rounded-full transition-all duration-300"
            style={{
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.3)",
              letterSpacing: "0.03em",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            Réserver
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute left-1/2 bottom-8 -translate-x-1/2 flex flex-col items-center gap-1"
        aria-hidden
      >
        {[0, 1, 2].map((n) => (
          <motion.span
            key={n}
            style={{
              display: "block",
              width: "10px",
              height: "10px",
              borderRight: "1.5px solid rgba(255,255,255,0.55)",
              borderBottom: "1.5px solid rgba(255,255,255,0.55)",
              transform: "rotate(45deg)",
            }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: n * 0.22,
            }}
          />
        ))}
      </motion.div>

      {/* Compteur photos en bas droite */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2"
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: i === 0 ? "24px" : "8px",
              height: "2px",
              background:
                i === 0 ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.2)",
              borderRadius: "2px",
              transition: "all 0.3s",
            }}
          />
        ))}
      </motion.div>
    </header>
  );
}
