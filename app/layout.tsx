// app/layout.tsx
import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["200", "300", "400"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://blurryproduction.fr",
  ),
  title: {
    default:
      "Blurry Production – Photographe Mariage, Portrait, Studio & Événements",
    template: "%s | Blurry Production",
  },
  description:
    "Blurry Production – Photographe professionnel basé en France. Mariage, portrait, studio, événements. Des images qui durent.",
  keywords: [
    "photographe",
    "mariage",
    "portrait",
    "studio",
    "événements",
    "France",
  ],
  authors: [{ name: "Blurry Production" }],
  creator: "Blurry Production",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://blurryproduction.fr",
    siteName: "Blurry Production",
    title: "Blurry Production – Photographe Professionnel",
    description:
      "Mariage, portrait, studio, événements. Des images qui durent.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blurry Production – Photographe Professionnel",
    description:
      "Mariage, portrait, studio, événements. Des images qui durent.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${dmSerif.variable} ${dmSans.variable}`}>
      <body>
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <BackToTop />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#1a1a1a",
              color: "#fff",
              borderRadius: "12px",
              fontSize: "0.85rem",
              fontFamily: "var(--font-dm-sans)",
              fontWeight: "300",
              padding: "12px 20px",
            },
          }}
        />
      </body>
    </html>
  );
}
