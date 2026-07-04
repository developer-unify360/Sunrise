import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import IMG_HERO     from '../assets/Images/Hero section.jpeg';
import IMG_FLANGES  from '../assets/Product/Flanges.png';
import IMG_BUTT     from '../assets/Product/Buttwels feeting.jpg';
import IMG_PIPES    from '../assets/Product/Pipes and tubes.avif';
import IMG_VALVES   from '../assets/Product/Valves.jpg';

const showcase = [
  { image: IMG_FLANGES, label: 'Flanges' },
  { image: IMG_PIPES,   label: 'Pipes & Tubes' },
  { image: IMG_BUTT,    label: 'Buttweld Fittings' },
  { image: IMG_VALVES,  label: 'Industrial Valves' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${IMG_HERO}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-sky-900/85 via-gray-900/80 to-sky-800/80" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, #f97316 0, #f97316 1px, transparent 0, transparent 60px),
                            repeating-linear-gradient(90deg, #f97316 0, #f97316 1px, transparent 0, transparent 60px)`,
        }}
      />

      {/* Blue side accents */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-sky-600" />
      <div className="absolute right-0 top-0 bottom-0 w-2 bg-sky-600" />

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: Text content ── */}
          <div className="flex flex-col items-start">

            {/* Badge */}
            <div className="inline-flex items-center gap-3 mb-8 bg-sky-600/20 border border-sky-600/40 px-5 py-2 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-sky-600 rounded-full animate-pulse" />
              <span className="text-sky-400 text-xs font-bold uppercase tracking-[0.3em]">
                Built on Precision, Backed by Trust
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.9] mb-6">
              <span className="block text-white">Industry Leading</span>
              <span className="block text-sky-600">Craftsmanship</span>
              <span className="block text-white">In Every Component</span>
            </h1>

            {/* Subtitle */}
            <p className="text-white/75 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              SUNRISE ENTERPRISE manufactures and supplies premium-grade pipes, fittings, flanges,
              valves and raw materials, earning the confidence of industries across the globe through
              consistent quality and dependable service.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-14">
              <Link
                to="/products"
                className="group inline-flex items-center gap-3 bg-sky-600 hover:bg-sky-700 text-white font-bold uppercase tracking-widest text-sm px-10 py-4 rounded-md transition-all duration-200 shadow-lg shadow-sky-600/30"
              >
                Explore Products
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border-2 border-white/50 hover:border-sky-600 hover:bg-sky-600 text-white font-bold uppercase tracking-widest text-sm px-10 py-4 rounded-md transition-all duration-200"
              >
                Request a Quote
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10 w-full">
              {[
                { value: '35+',  label: 'Years in Business' },
                { value: '500+', label: 'Product Varieties' },
                { value: '50+',  label: 'Global Markets' },
                { value: '98%',  label: 'Customer Satisfaction' },
              ].map(stat => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-black text-sky-600 leading-none">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/50 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Product showcase grid ── */}
          <div className="hidden lg:grid grid-cols-2 gap-3">
            {showcase.map(({ image, label }) => (
              <div
                key={label}
                className="group relative overflow-hidden border-2 border-white/10 hover:border-sky-600 transition-all duration-300"
              >
                <img
                  src={image}
                  alt={label}
                  className="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                {/* Blue bottom bar */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                {/* Label */}
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs font-bold uppercase tracking-wide leading-tight">
                    {label}
                  </p>
                </div>
              </div>
            ))}

            {/* Decorative bottom tagline */}
            <div className="col-span-2 bg-sky-600/20 border border-sky-600/40 backdrop-blur-sm px-4 py-3 text-center">
              <p className="text-sky-300 text-[11px] font-bold uppercase tracking-[0.3em]">
                500+ SKUs · Exporting to 50+ Nations · Est. 1987
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-sky-400 transition-colors animate-bounce"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ChevronDown size={18} />
      </a>
    </section>
  );
}
