import { ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface PageHeroProps {
  title: string;
  highlight: string;
  subtitle: string;
  image: string;
}

export default function PageHero({ title, highlight, subtitle, image }: PageHeroProps) {
  const location = useLocation();
  const pageName = location.pathname.replace('/', '') || 'home';
  const displayName = pageName.charAt(0).toUpperCase() + pageName.slice(1);

  return (
    <section className="relative h-72 md:h-96 flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-orange-900/85 via-gray-900/70 to-orange-800/75" />
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-orange-500" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-orange-500" />

      <div className="relative max-w-7xl mx-auto px-6 w-full pt-24">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-white/60 mb-4">
          <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
          <ChevronRight size={10} />
          <span className="text-orange-400 font-bold">{displayName}</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black uppercase leading-tight mb-3 text-white">
          {title} <span className="text-orange-500">{highlight}</span>
        </h1>
        <p className="text-white/70 text-sm md:text-base max-w-xl leading-relaxed">{subtitle}</p>
      </div>
    </section>
  );
}
