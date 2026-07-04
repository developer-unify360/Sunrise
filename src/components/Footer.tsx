import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Images/LOGO PNG.png';

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/about' },
    { label: 'Careers', href: '/contact' },
    { label: 'Contact Us', href: '/contact' },
  ],
  Products: [
    { label: 'Flanges', href: '/products' },
    { label: 'Buttweld Fittings', href: '/products' },
    { label: 'Forged Fittings', href: '/products' },
    { label: 'Pipes & Tubes', href: '/products' },
    { label: 'Valves', href: '/products' },
    { label: 'Fasteners', href: '/products' },
  ],
  'Raw Materials': [
    { label: 'Bar / Rod / Wire', href: '/products' },
    { label: 'Angle, Channel & Flat', href: '/products' },
    { label: 'Sheet, Plate & Coil', href: '/products' },
    { label: 'Perforated Sheet', href: '/products' },
    { label: 'Hose Pipe', href: '/products' },
    { label: 'Ferrule Fittings', href: '/products' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t-4 border-sky-600">

      {/* CTA Banner */}
      <div className="bg-sky-600 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-black text-2xl uppercase tracking-wide">
              Have a Project in Mind?
            </h3>
            <p className="text-white/80 text-sm mt-1">
              Reach out for pricing, stock availability, or a custom order — we typically respond within 24 hours.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-sky-600 hover:bg-sky-50 font-black uppercase tracking-widest text-sm px-8 py-4 transition-colors shadow-lg"
          >
            Talk to Us <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <img
                src={Logo}
              alt="Sunrise Enterprise"
              className="h-20 w-auto object-contain p-1"
            />
            </Link>
            <p className="text-sky-600 text-sm font-bold uppercase tracking-wide mb-2">
              Built on Precision, Backed by Trust
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              SUNRISE ENTERPRISE has been manufacturing and supplying pipes, fittings, flanges,
              valves and raw materials to industries worldwide since 1987.
            </p>
            <div className="space-y-3 text-sm">
              {[
                { icon: Phone, text: '+91 97227 75181', href: 'tel:+919722775181' },
                { icon: Mail, text: 'sunernt20@gmail.com', href: 'mailto:sunernt20@gmail.com' },
                { icon: MapPin, text: 'C-1/389, Shop No. 1-2, Shree Pramukh Swami Industrial Estate, GIDC, Makarpura, Vadodara - 390 010', href: 'https://maps.google.com' },
              ].map(item => (
                <div key={item.text} className="flex items-start gap-2 text-gray-500">
                  <item.icon size={14} className="text-sky-600 shrink-0 mt-0.5" />
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="hover:text-sky-600 transition-colors leading-tight"
                  >
                    {item.text}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-gray-900 font-bold uppercase tracking-widest text-xs mb-5 pb-3 border-b-2 border-sky-600">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-gray-500 text-sm hover:text-sky-600 transition-colors flex items-center gap-1.5 group"
                    >
                      <span className="w-0 h-0.5 bg-sky-600 group-hover:w-3 transition-all duration-200" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} Sunrise Enterprise. All rights reserved. | C-1/389, Shop No. 1-2, Shree Pramukh Swami Industrial Estate, GIDC, Makarpura, Vadodara - 390 010.</span>
          <div className="flex items-center gap-5">
            <span className="text-gray-400">
              Designed &amp; Developed by{' '}
              <a
                href="https://unify360.in"
                target="_blank"
                rel="noopener noreferrer"
                  className="text-sky-600 font-bold hover:text-sky-700 transition-colors"
              >
                Unify-360
              </a>
            </span>
          </div>
        </div>
      </div>

    </footer>
  );
}
