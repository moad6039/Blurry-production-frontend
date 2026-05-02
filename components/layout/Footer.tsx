// components/layout/Footer.tsx
import Link from 'next/link';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const footerLinks = [
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/services', label: 'Services' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
  { href: '/mentions-legales', label: 'Mentions légales' },
  { href: '/politique-confidentialite', label: 'Confidentialité' },
];
 
export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#ebebeb]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="font-serif text-[0.9rem] text-ink block mb-2">Blurry Production</span>
            <p className="text-[0.72rem] text-ash max-w-xs leading-relaxed">
              Photographe professionnel basé en France.
              Mariage, portrait, studio & événements.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((l) => (
              <Link key={l.href} href={l.href} className="text-[0.7rem] text-ash hover:text-ink transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-4">
            {[
              { Icon: Instagram, href: '#', label: 'Instagram' },
              { Icon: Facebook, href: '#', label: 'Facebook' },
              { Icon: Linkedin, href: '#', label: 'LinkedIn' },
            ].map(({ Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 rounded-full border border-bone flex items-center justify-center text-ash hover:text-ink hover:border-ink/30 transition-all"
              >
                <Icon size={14} />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#ebebeb] flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-[0.68rem] text-ash">© {new Date().getFullYear()} Blurry Production - Tous droits réservés à MA</p>
          <p className="text-[0.68rem] text-ash">France & International</p>
        </div>
      </div>
    </footer>
  );
}
