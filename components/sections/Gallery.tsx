"use client";
// components/sections/Gallery.tsx
import { useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { id: "all", label: "Tout" },
  { id: "mariage", label: "Mariage" },
  { id: "portrait", label: "Portrait" },
  { id: "studio", label: "Studio" },
  { id: "evenements", label: "Événements" },
  { id: "corporate", label: "Corporate" },
];

type GalleryItem = { id: string; category: string; title: string; src: string };

const ALL_IMAGES: GalleryItem[] = [
  // Mariage
  {
    id: "m1",
    category: "mariage",
    title: "Mariage",
    src: "/images/mariage/mariage-1.jpg",
  },
  {
    id: "m2",
    category: "mariage",
    title: "Mariage",
    src: "/images/mariage/mariage-2.jpg",
  },
  {
    id: "m3",
    category: "mariage",
    title: "Mariage",
    src: "/images/mariage/mariage-3.jpg",
  },
  {
    id: "m4",
    category: "mariage",
    title: "Mariage",
    src: "/images/mariage/mariage-4.jpg",
  },
  // Portrait
  {
    id: "p1",
    category: "portrait",
    title: "Portrait",
    src: "/images/portrait/portrait-1.jpg",
  },
  {
    id: "p2",
    category: "portrait",
    title: "Portrait",
    src: "/images/portrait/portrait-2.jpg",
  },
  {
    id: "p3",
    category: "portrait",
    title: "Portrait",
    src: "/images/portrait/portrait-3.jpg",
  },
  {
    id: "p4",
    category: "portrait",
    title: "Portrait",
    src: "/images/portrait/portrait-4.jpg",
  },
  {
    id: "p5",
    category: "portrait",
    title: "Portrait",
    src: "/images/portrait/portrait-5.jpg",
  },
  {
    id: "p6",
    category: "portrait",
    title: "Portrait",
    src: "/images/portrait/portrait-6.jpg",
  },
  {
    id: "p7",
    category: "portrait",
    title: "Portrait",
    src: "/images/portrait/portrait-7.jpg",
  },
  {
    id: "p8",
    category: "portrait",
    title: "Portrait",
    src: "/images/portrait/portrait-8.jpg",
  },
  {
    id: "p9",
    category: "portrait",
    title: "Portrait",
    src: "/images/portrait/portrait-9.jpg",
  },
  {
    id: "p10",
    category: "portrait",
    title: "Portrait",
    src: "/images/portrait/portrait-10.jpg",
  },
  // Studio
  {
    id: "s1",
    category: "studio",
    title: "Studio",
    src: "/images/studio/studio-1.jpg",
  },
  {
    id: "s2",
    category: "studio",
    title: "Studio",
    src: "/images/studio/studio-2.jpg",
  },
  {
    id: "s3",
    category: "studio",
    title: "Studio",
    src: "/images/studio/studio-3.jpg",
  },
  {
    id: "s4",
    category: "studio",
    title: "Studio",
    src: "/images/studio/studio-4.jpg",
  },
  // Événements
  {
    id: "e1",
    category: "evenements",
    title: "Événements",
    src: "/images/evenements/event-1.jpg",
  },
  {
    id: "e2",
    category: "evenements",
    title: "Événements",
    src: "/images/evenements/event-2.jpg",
  },
  {
    id: "e3",
    category: "evenements",
    title: "Événements",
    src: "/images/evenements/event-3.jpg",
  },
  {
    id: "e4",
    category: "evenements",
    title: "Événements",
    src: "/images/evenements/event-4.jpg",
  },
  {
    id: "e5",
    category: "evenements",
    title: "Événements",
    src: "/images/evenements/event-5.jpg",
  },
  {
    id: "e6",
    category: "evenements",
    title: "Événements",
    src: "/images/evenements/event-6.jpg",
  },
  {
    id: "e7",
    category: "evenements",
    title: "Événements",
    src: "/images/evenements/event-7.jpg",
  },
  {
    id: "e8",
    category: "evenements",
    title: "Événements",
    src: "/images/evenements/event-8.jpg",
  },
  {
    id: "e9",
    category: "evenements",
    title: "Événements",
    src: "/images/evenements/event-9.jpg",
  },
  // Corporate
  {
    id: "c1",
    category: "corporate",
    title: "Corporate",
    src: "/images/corporate/corporate-1.jpg",
  },
  {
    id: "c2",
    category: "corporate",
    title: "Corporate",
    src: "/images/corporate/corporate-2.jpg",
  },
  {
    id: "c3",
    category: "corporate",
    title: "Corporate",
    src: "/images/corporate/corporate-3.jpg",
  },
  {
    id: "c4",
    category: "corporate",
    title: "Corporate",
    src: "/images/corporate/corporate-4.jpg",
  },
];

const SPAN_PATTERNS = [
  "col-span-12 md:col-span-6 md:row-span-2",
  "col-span-12 md:col-span-3",
  "col-span-12 md:col-span-3",
  "col-span-12 md:col-span-3",
  "col-span-12 md:col-span-4",
  "col-span-12 md:col-span-4",
  "col-span-12 md:col-span-4",
];

export default function Gallery() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const validCats = tabs.map((t) => t.id);
  const catParam = searchParams.get("cat") ?? "all";
  const initialCat = validCats.includes(catParam) ? catParam : "all";

  const [activeCategory, setActiveCategory] = useState(initialCat);

  useEffect(() => {
    const cat = searchParams.get("cat") ?? "all";
    setActiveCategory(validCats.includes(cat) ? cat : "all");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleTabClick = (id: string) => {
    setActiveCategory(id);
    const params = new URLSearchParams(searchParams.toString());
    if (id === "all") {
      params.delete("cat");
    } else {
      params.set("cat", id);
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const filtered =
    activeCategory === "all"
      ? ALL_IMAGES
      : ALL_IMAGES.filter((i) => i.category === activeCategory);

  return (
    <section id="galerie" className="px-8 md:px-16">
      <div className="flex gap-2 flex-wrap mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`text-[0.73rem] font-normal px-4 py-1.5 rounded-full border transition-all duration-200 ${
              activeCategory === tab.id
                ? "bg-ink border-ink text-white"
                : "bg-white border-[#e0e0e0] text-ash hover:border-[#bbb] hover:text-ink"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-12 auto-rows-[270px] gap-2.5">
        <AnimatePresence mode="popLayout">
          {filtered.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className={`${SPAN_PATTERNS[idx % SPAN_PATTERNS.length]} relative overflow-hidden rounded-xl bg-bone group`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                priority={idx < 6}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-300 flex items-end p-3.5">
                <div className="opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-[0.63rem] tracking-[0.12em] uppercase text-white">
                    {item.title}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-ash text-sm">Aucun projet dans cette catégorie.</p>
        </div>
      )}
    </section>
  );
}
