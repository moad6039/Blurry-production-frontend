"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Mariage",
    sub: "Éternité",
    img: "/images/mariage/mariage-1.jpg",
    href: "/portfolio?cat=mariage",
    num: "01",
  },
  {
    title: "Portrait",
    sub: "Authenticité",
    img: "/images/portrait/portrait-1.jpg",
    href: "/portfolio?cat=portrait",
    num: "02",
  },
  {
    title: "Studio",
    sub: "Sculpture",
    img: "/images/studio/studio-1.jpg",
    href: "/portfolio?cat=studio",
    num: "03",
  },
  {
    title: "Événements",
    sub: "Mouvement",
    img: "/images/evenements/event-1.jpg",
    href: "/portfolio?cat=evenements",
    num: "04",
  },
  {
    title: "Corporate",
    sub: "Identité",
    img: "/images/corporate/corporate-1.jpg",
    href: "/portfolio?cat=corporate",
    num: "05",
  },
];

export default function Univers() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const autoScrollRef = useRef<number | null>(null);

  const stopAutoScroll = () => {
    if (autoScrollRef.current) {
      cancelAnimationFrame(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  };

  const onMouseDown = (e: React.MouseEvent) => {
    stopAutoScroll();
    setIsDown(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const onMouseUp = () => setIsDown(false);

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDown) {
      if (!scrollRef.current) return;
      e.preventDefault();
      const x = e.pageX - scrollRef.current.offsetLeft;
      scrollRef.current.scrollLeft = scrollLeft - (x - startX) * 1.2;
      return;
    }
    const el = scrollRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const w = rect.width;
    const zone = w * 0.14;
    stopAutoScroll();
    if (x < zone) {
      const speed = Math.max(1, ((zone - x) / zone) * 10);
      const loop = () => {
        el.scrollLeft -= speed;
        autoScrollRef.current = requestAnimationFrame(loop);
      };
      autoScrollRef.current = requestAnimationFrame(loop);
    } else if (x > w - zone) {
      const speed = Math.max(1, ((x - (w - zone)) / zone) * 10);
      const loop = () => {
        el.scrollLeft += speed;
        autoScrollRef.current = requestAnimationFrame(loop);
      };
      autoScrollRef.current = requestAnimationFrame(loop);
    }
  };

  const onMouseLeave = () => {
    setIsDown(false);
    stopAutoScroll();
  };

  return (
    <section id="univers" className="py-0">
      {/* Header */}
      <div className="px-8 md:px-16 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[0.65rem] font-normal tracking-[0.18em] uppercase text-ash mb-2">
            Univers
          </p>
          <h2 className="font-serif text-[clamp(1.8rem,3.5vw,3rem)] leading-[1.08] tracking-[-0.025em] text-ink">
            Ce que je <em className="not-italic text-ash">capture.</em>
          </h2>
        </motion.div>
      </div>

      {/* Cards scroll horizontal */}
      <div
        ref={scrollRef}
        className={`px-8 md:px-16 flex gap-4 overflow-x-auto select-none pb-2 ${isDown ? "cursor-grabbing" : "cursor-grab"}`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
      >
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            className="flex-shrink-0"
            style={{ width: "clamp(220px, 28vw, 320px)" }}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.04, y: -8 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              delay: i * 0.07,
              scale: { duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0 },
              y: { duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0 },
            }}
          >
            <Link
              href={cat.href}
              className="block group"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{
                  height: "clamp(280px, 36vw, 420px)",
                  background: "#1a1a1a",
                }}
              >
                <Image
                  src={cat.img}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform: hovered === i ? "scale(1.07)" : "scale(1)",
                  }}
                  priority={i < 3}
                />
                <div
                  className="absolute inset-0 transition-all duration-500"
                  style={{
                    background:
                      hovered === i
                        ? "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)"
                        : "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)",
                  }}
                />
                <div
                  className="absolute top-4 right-4 transition-opacity duration-300"
                  style={{ opacity: hovered === i ? 1 : 0.4 }}
                >
                  <span className="text-[0.65rem] text-white/60 tracking-[0.15em]">
                    {cat.num}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-[1.05rem] font-normal text-white tracking-[-0.01em]">
                        {cat.title}
                      </h3>
                      <p className="text-[0.62rem] text-white/50 uppercase tracking-[0.14em] mt-0.5">
                        {cat.sub}
                      </p>
                    </div>
                    <div
                      className="transition-all duration-300"
                      style={{
                        opacity: hovered === i ? 1 : 0,
                        transform:
                          hovered === i ? "translateX(0)" : "translateX(-8px)",
                      }}
                    >
                      <ArrowRight size={16} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4 px-1 flex items-center justify-between">
                <div>
                  <h3 className="text-[0.88rem] font-normal text-ink">
                    {cat.title}
                  </h3>
                  <p className="text-[0.62rem] text-ash uppercase tracking-[0.1em] mt-0.5">
                    {cat.sub}
                  </p>
                </div>
                <span className="text-[0.6rem] text-ash">{cat.num}</span>
              </div>
            </Link>
          </motion.div>
        ))}
        <div className="flex-shrink-0 w-8" />
      </div>
    </section>
  );
}
