import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import IMG_PIPES   from '../assets/Product/Pipes and tubes.avif';
import IMG_FLANGES from '../assets/Product/Flanges.png';
import IMG_BUTT    from '../assets/Product/Buttwels feeting.jpg';
import IMG_FORGED  from '../assets/Product/Forged-Fittings.jpg';
import IMG_FERRULE from '../assets/Product/ferrule-fittings-.webp';
import IMG_DAIRY   from '../assets/Product/stainless-steel-dairy-fittings.jpg';
import IMG_VALVES  from '../assets/Product/Valves.jpg';
import IMG_HOSE    from '../assets/Product/Flanges.webp';

const mainCategories = [
  {
    id: 'raw-materials',
    title: 'Pipes, Tubes & Raw Materials',
    tag: 'Raw Materials',
    image: IMG_PIPES,
    count: 6,
    items: [
      'Seamless & ERW Pipes / Tubes',
      'Bars, Rods & Wires',
      'Angles, Channels & Flats',
      'Sheets, Plates & Coils',
      'Perforated Sheets',
      'Fasteners',
    ],
  },
  {
    id: 'flanges',
    title: 'Flanges',
    tag: 'Fittings',
    image: IMG_FLANGES,
    count: 2,
    items: [
      'Industrial Flanges (1/2"–24" NB)',
      'SAE Hydraulic Flanges',
      'Weld Neck, Slip-On, Blind, Threaded',
      'Socket Weld, Orifice, Plate Flange',
    ],
  },
  {
    id: 'buttweld',
    title: 'Buttweld Fittings',
    tag: 'Pipe Fittings',
    image: IMG_BUTT,
    count: 4,
    items: [
      '45° & 90° Elbows (1D/1.5D/3D/5D)',
      '180° LR / SR Return',
      'Equal & Reducing Tees',
      'Concentric & Eccentric Reducers',
    ],
  },
  {
    id: 'forged',
    title: 'Forged Fittings',
    tag: 'Threaded & SW',
    image: IMG_FORGED,
    count: 3,
    items: [
      'Threaded Fittings (FNPT)',
      'Socket Weld Fittings',
      'Hex & Swage Nipples',
      'Union, Cross, Cap, Plug, Sockolet',
    ],
  },
  {
    id: 'ferrule',
    title: 'Ferrule & Instrumentation',
    tag: 'Instrumentation',
    image: IMG_FERRULE,
    count: 5,
    items: [
      'Male & Female Connectors',
      'Bulkhead Connectors & Tee Fittings',
      'Front / Back Ferrule & Ferrule Nut',
      'Hydraulic & Pneumatic Quick Release',
    ],
  },
  {
    id: 'dairy',
    title: 'Dairy & Pharma Fittings',
    tag: 'Sanitary',
    image: IMG_DAIRY,
    count: 2,
    items: [
      'TC Clamps & TC Ferrules',
      'DIN / SMS / Trickover Union',
      'Sanitary Butterfly & Ball Valves',
      'SS Spray Balls & Tri Clamp Fittings',
    ],
  },
  {
    id: 'valves',
    title: 'Industrial Valves',
    tag: 'Valves',
    image: IMG_VALVES,
    count: 2,
    items: [
      'Ball, Gate & Globe Valves',
      'Butterfly & Check Valves',
      'Needle, Plug & Control Valves',
      'Safety / Relief & Diaphragm Valves',
    ],
  },
  {
    id: 'hoses',
    title: 'Flexible Hoses & Accessories',
    tag: 'Specialty',
    image: IMG_HOSE,
    count: 3,
    items: [
      'Corrugated & Braided Hose Pipes',
      'Interlock Hose Pipe',
      'Syphon Tubes (Q / O / U Types)',
      'Snubbers (SS / Bronze / Aluminium)',
    ],
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="bg-gray-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-blue-600" />
              <span className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em]">Product Range</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight text-gray-900">
              Our <span className="text-blue-600">Products</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl">
              Proudly presenting a product range par excellence — quality that speaks the global language of precision.
            </p>
          </div>
          <Link
            to="/products"
            className="hidden md:inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-widest px-6 py-3 transition-colors shadow-md"
          >
            View Full Catalogue <ArrowRight size={14} />
          </Link>
        </div>

        {/* Category Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mainCategories.map((cat) => (
            <Link
              key={cat.id}
              to="/products"
              className="group bg-white border border-gray-200 hover:border-blue-600 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 block"
            >
              {/* Image with title heading overlay */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                {/* Orange bottom accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600" />
                {/* Product name as image heading */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-black text-sm uppercase leading-tight tracking-wide group-hover:text-blue-300 transition-colors">
                    {cat.title}
                  </h3>
                </div>
              </div>

              {/* Items list */}
              <div className="p-4">
                <ul className="space-y-1">
                  {cat.items.slice(0, 4).map((item) => (
                    <li key={item} className="text-gray-500 text-xs flex items-start gap-1.5">
                      <span className="w-1 h-1 bg-blue-600 rounded-full flex-shrink-0 mt-[5px]" />
                      {item}
                    </li>
                  ))}
                  {cat.items.length > 4 && (
                    <li className="text-blue-600 text-xs font-bold mt-0.5">
                      +{cat.items.length - 4} more
                    </li>
                  )}
                </ul>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <div className="w-6 h-0.5 bg-blue-600 group-hover:w-12 transition-all duration-300" />
                  <ArrowRight size={13} className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="text-center mt-10 md:hidden">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 transition-colors"
          >
            View Full Catalogue <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
