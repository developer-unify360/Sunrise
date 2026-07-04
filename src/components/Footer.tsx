import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Images/Logo.png';

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
    <footer className="bg-white border-t-4 border-orange-500">

      {/* CTA Banner */}
      <div className="bg-orange-500 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-black text-2xl uppercase tracking-wide">
              Ready to Get a Quote?
            </h3>
            <p className="text-white/80 text-sm mt-1">
              Contact us for pricing, availability, and custom requirements within 24 hours.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-orange-500 hover:bg-orange-50 font-black uppercase tracking-widest text-sm px-8 py-4 transition-colors shadow-lg"
          >
            Request a Quote <ArrowRight size={16} />
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
                alt="Satvik Pipe Industries"
                className="h-20 w-auto object-contain p-1"
              />
            </Link>
            <p className="text-orange-500 text-sm font-bold uppercase tracking-wide mb-2">
              Commit to Quality, Deliver with Pride
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              Satvik Pipe Industries delivers precision-engineered pipes, fittings, flanges, valves
              and raw materials trusted worldwide since 1987.
            </p>
            <div className="space-y-3 text-sm">
              {[
                { icon: Phone, text: '+91 97232 69427', href: 'tel:+919723269427' },
                { icon: Mail, text: 'satvikpipe@gmail.com', href: 'mailto:satvikpipe@gmail.com' },
                { icon: MapPin, text: '749/7/4, G.I.D.C. Makarpura, Vadodara - 390 010, Gujarat', href: 'https://maps.google.com' },
              ].map(item => (
                <div key={item.text} className="flex items-start gap-2 text-gray-500">
                  <item.icon size={14} className="text-orange-500 shrink-0 mt-0.5" />
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="hover:text-orange-500 transition-colors leading-tight"
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
              <h4 className="text-gray-900 font-bold uppercase tracking-widest text-xs mb-5 pb-3 border-b-2 border-orange-500">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-gray-500 text-sm hover:text-orange-500 transition-colors flex items-center gap-1.5 group"
                    >
                      <span className="w-0 h-0.5 bg-orange-500 group-hover:w-3 transition-all duration-200" />
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
          <span>© {new Date().getFullYear()} Satvik Pipe Industries. All rights reserved. | 749/7/4, G.I.D.C. Makarpura, Vadodara - 390 010.</span>
          <div className="flex items-center gap-5">
            <span className="text-gray-400">
              Designed &amp; Developed by{' '}
              <a
                href="https://unify360.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 font-bold hover:text-orange-600 transition-colors"
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
