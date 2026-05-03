// app/page.tsx
import Hero from "@/components/sections/Hero";
import Univers from "@/components/sections/Univers";
import Gallery from "@/components/sections/Gallery";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Stats from "@/components/sections/Stats";
import CTABanner from "@/components/sections/CTABanner";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Sections avec espacement premium */}
      <div className="flex flex-col gap-32 mt-32 mb-0">
        <Univers />
        <Gallery />
        <Stats />
        <Testimonials />
        <About />
        <CTABanner />
      </div>

      <div className="mt-24">
        <Footer />
      </div>
    </>
  );
}
