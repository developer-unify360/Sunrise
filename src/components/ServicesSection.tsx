import { Layers, Settings, Zap, Shield, Truck, FlaskConical, ArrowRight } from 'lucide-react';
import IMG_STEEL_STRUCTURE from '../assets/Images/Hero section.jpeg';
import IMG_CNC_MACHINE from '../assets/Images/pexels-photo-3862619.jpeg';
import IMG_MOLTEN_STEEL from '../assets/Images/pexels-photo-2760243.jpeg';
import IMG_QUALITY_CHECK from '../assets/Images/pexels-photo-190537.jpeg';
import IMG_WAREHOUSE from '../assets/Images/pexels-photo-1427107.jpeg';
import IMG_SURFACE_TREAT from '../assets/Images/pexels-photo-2381463.jpeg';

const services = [
  {
    icon: Layers,
    title: 'Pipes & Tubes Supply',
    desc: 'Comprehensive range of SS/CS pipes and tubes — seamless, welded, ERW — in all grades and sizes.',
    image: IMG_STEEL_STRUCTURE,
  },
  {
    icon: Settings,
    title: 'Fittings & Flanges',
    desc: 'Buttweld, forged, ferrule, dairy fittings and flanges manufactured to international standards.',
    image: IMG_CNC_MACHINE,
  },
  {
    icon: Zap,
    title: 'Valves & Actuators',
    desc: 'Full range of industrial valves — gate, globe, ball, butterfly, check — for all pressure classes.',
    image: IMG_MOLTEN_STEEL,
  },
  {
    icon: Shield,
    title: 'Quality Inspection',
    desc: 'Third-party inspections by DNV, Lloyd\'s, SGS, TUV, TATA — rigorous testing for every batch.',
    image: IMG_QUALITY_CHECK,
  },
  {
    icon: Truck,
    title: 'Logistics & Delivery',
    desc: 'Reliable packaging and on-time delivery worldwide — export quality packing as standard.',
    image: IMG_WAREHOUSE,
  },
  {
    icon: FlaskConical,
    title: 'Raw Material Supply',
    desc: 'Bar, rod, wire, sheet, plate, coil, angle, channel — all grades, custom cut lengths available.',
    image: IMG_SURFACE_TREAT,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-blue-600" />
              <span className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em]">What We Offer</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight text-gray-900">
              Our Core <span className="text-blue-600">Services</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
            From raw material to finished product — comprehensive supply services under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="group bg-white border border-gray-200 hover:border-blue-600 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-blue-600 flex items-center justify-center">
                  <svc.icon size={22} className="text-white" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-3 group-hover:text-blue-600 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{svc.desc}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-widest hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
