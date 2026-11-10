import Image from 'next/image';
import Link from 'next/link';
import {
  BriefcaseBusiness,
  Camera,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#2E1F42] text-[#E6D9F0]">
      {/* Main Footer */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="relative h-10 w-10 shrink-0">
                <Image
                  src="/logo.png"
                  alt="Flourish Interiors logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-extrabold text-white">
                Flourish{' '}
                <span className="bg-[linear-gradient(90deg,#FFC8DD,#CDB4DB,#A2D2FF)] bg-clip-text font-normal text-transparent">
                  Interiors
                </span>
              </span>
            </Link>
            <p className="mb-5 text-sm leading-relaxed text-[#CDB4DB]">
              Premium interior solutions including flooring, wall coverings,
              ceilings, window treatments, and doors for residential and
              commercial spaces.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/1EVHaAm5ZZ/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#E6D9F0] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FFAFCC] hover:bg-[#FFAFCC] hover:text-[#3B2A4F]"
              >
                <Globe2 className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/flourishinteriorsandkitchen?utm_source=qr&stkn=Y3RwdTlzb2Jrc3Ji"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#E6D9F0] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FFAFCC] hover:bg-[#FFAFCC] hover:text-[#3B2A4F]"
              >
                <Camera className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#E6D9F0] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FFAFCC] hover:bg-[#FFAFCC] hover:text-[#3B2A4F]"
              >
                <BriefcaseBusiness className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/923299906666"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#E6D9F0] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FFAFCC] hover:bg-[#FFAFCC] hover:text-[#3B2A4F]"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-bold text-white">Quick Links</h3>
            <nav className="space-y-3">
              <Link
                href="/"
                className="block text-sm text-[#CDB4DB] transition-colors hover:text-[#FFAFCC]"
              >
                Home
              </Link>
              <Link
                href="/catalog"
                className="block text-sm text-[#CDB4DB] transition-colors hover:text-[#FFAFCC]"
              >
                Catalog
              </Link>
              <Link
                href="/about"
                className="block text-sm text-[#CDB4DB] transition-colors hover:text-[#FFAFCC]"
              >
                About Us
              </Link>
              <Link
                href="/design-and-finishing"
                className="block text-sm text-[#CDB4DB] transition-colors hover:text-[#FFAFCC]"
              >
                Design &amp; Finishing
              </Link>
              <Link
                href="/quote"
                className="block text-sm text-[#CDB4DB] transition-colors hover:text-[#FFAFCC]"
              >
                Quote Calculator
              </Link>
              <a
                href="#contact"
                className="block text-sm text-[#CDB4DB] transition-colors hover:text-[#FFAFCC]"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4 font-bold text-white">Products</h3>
            <nav className="space-y-3">
              <Link
                href="/catalog?category=flooring"
                className="block text-sm text-[#CDB4DB] transition-colors hover:text-[#FFAFCC]"
              >
                Flooring
              </Link>
              <Link
                href="/popular-finishes"
                className="block text-sm text-[#CDB4DB] transition-colors hover:text-[#FFAFCC]"
              >
                Popular Finishes
              </Link>
              <Link
                href="/catalog?category=wall-coverings"
                className="block text-sm text-[#CDB4DB] transition-colors hover:text-[#FFAFCC]"
              >
                Wall Coverings
              </Link>
              <Link
                href="/catalog?category=ceiling"
                className="block text-sm text-[#CDB4DB] transition-colors hover:text-[#FFAFCC]"
              >
                Ceilings
              </Link>
              <Link
                href="/catalog/window-coverings"
                className="block text-sm text-[#CDB4DB] transition-colors hover:text-[#FFAFCC]"
              >
                Window Coverings
              </Link>
              <Link
                href="/catalog?category=doors"
                className="block text-sm text-[#CDB4DB] transition-colors hover:text-[#FFAFCC]"
              >
                Doors
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-bold text-white">Contact Us</h3>
            <div className="space-y-4">
              <a
                href="tel:+923299906666"
                className="group flex items-start gap-3 text-sm text-[#CDB4DB] transition-colors hover:text-[#FFAFCC]"
              >
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FFAFCC] transition-transform group-hover:scale-110" />
                <span>03299906666</span>
              </a>
              <a
                href="tel:+923364666696"
                className="group flex items-start gap-3 text-sm text-[#CDB4DB] transition-colors hover:text-[#FFAFCC]"
              >
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FFAFCC] transition-transform group-hover:scale-110" />
                <span>03364666696</span>
              </a>
              <a
                href="mailto:Flourish.interiors.pk@gmail.com"
                className="group flex items-start gap-3 text-sm text-[#CDB4DB] transition-colors hover:text-[#FFAFCC]"
              >
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FFAFCC] transition-transform group-hover:scale-110" />
                <span className="break-all">
                  Flourish.interiors.pk@gmail.com
                </span>
              </a>
              <div className="flex items-start gap-3 text-sm text-[#CDB4DB]">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FFAFCC]" />
                <span>
                  Grand Trunk (G.T.) Road, Zone 5,
                  <br />
                  Federal Capital Islamabad, Pakistan
                  <br />
                  <span className="text-xs text-[#9D7FB5]">
                    Serving clients all over Pakistan
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/10" />

        {/* Bottom Section */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="text-sm text-[#CDB4DB]">
            &copy; {currentYear} Flourish Interiors. All rights reserved.
          </div>
          <div className="flex gap-4 md:justify-end">
            <Link
              href="#privacy"
              className="text-sm text-[#CDB4DB] transition-colors hover:text-[#FFAFCC]"
            >
              Privacy Policy
            </Link>
            <Link
              href="#terms"
              className="text-sm text-[#CDB4DB] transition-colors hover:text-[#FFAFCC]"
            >
              Terms of Service
            </Link>
            <Link
              href="#sitemap"
              className="text-sm text-[#CDB4DB] transition-colors hover:text-[#FFAFCC]"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}