import { useState } from 'react';
import { Menu, X, Phone, Mail, Linkedin, Facebook, Instagram } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/Images/LOGO PNG.png';

interface HeaderProps {
  scrolled: boolean;
}

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Contact', href: '/contact' },
];

export default function Header({ scrolled }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-sky-600 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-10 text-xs text-white">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-semibold">
              <Phone size={11} />
              +91 97227 75181
            </span>
            <span className="flex items-center gap-1.5 font-semibold">
              <Mail size={11} />
              sunernt20@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="font-semibold">Mon–Sat: 9:00 AM – 6:00 PM</span>
            <div className="flex items-center gap-3 pl-6 border-l border-white/30">
              <span className="text-white">
                <Linkedin size={13} />
              </span>
              <span className="text-white">
                <Facebook size={13} />
              </span>
              <span className="text-white">
                <Instagram size={13} />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-300 top-0 md:top-10 ${
          scrolled
            ? 'bg-white shadow-lg border-b-2 border-sky-600'
            : 'bg-white/95 backdrop-blur-sm border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={Logo}
              alt="Sunrise Enterprise"
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-200 relative group ${
                    isActive
                      ? 'text-sky-600'
                      : 'text-gray-700 hover:text-sky-600'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-sky-600 transition-transform duration-200 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <Link
            to="/contact"
            className="hidden lg:flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-widest px-6 py-3 transition-all duration-200 shadow-md hover:shadow-sky-200 hover:shadow-lg"
          >
            Request a Quote
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-gray-700 p-2 hover:text-sky-600 transition-colors"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t-2 border-sky-600 shadow-xl">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-6 py-4 text-sm font-bold uppercase tracking-wider border-b border-gray-100 transition-colors ${
                  location.pathname === link.href
                    ? 'text-sky-600 bg-sky-50'
                    : 'text-gray-700 hover:text-sky-600 hover:bg-sky-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="p-4">
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-widest px-6 py-3 transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
