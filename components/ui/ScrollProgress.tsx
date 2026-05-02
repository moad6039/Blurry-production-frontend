"use client";
// components/ui/ScrollProgress.tsx
// Une barre de progression en haut de la page qui indique le pourcentage de scroll.
//Lié à app/layout.tsx
import { useEffect } from "react";

export default function ScrollProgress() {
  useEffect(() => {
    const bar = document.getElementById("scroll-progress");
    const onScroll = () => {
      if (!bar) return;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / total;
      bar.style.transform = `scaleX(${progress})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div id="scroll-progress" />;
}
