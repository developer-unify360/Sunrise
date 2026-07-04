import { Layers, Settings, Zap, Shield, Truck, FlaskConical, ArrowRight, CheckCircle } from 'lucide-react';
import IMG_WAREHOUSE from '../assets/Images/pexels-photo-1427107.jpeg';
import IMG_STEEL_STRUCTURE from '../assets/Images/Hero section.jpeg';
import IMG_CNC_MACHINE from '../assets/Images/pexels-photo-3862619.jpeg';
import IMG_MOLTEN_STEEL from '../assets/Images/pexels-photo-2760243.jpeg';
import IMG_QUALITY_CHECK from '../assets/Images/pexels-photo-190537.jpeg';
import IMG_SURFACE_TREAT from '../assets/Images/pexels-photo-2381463.jpeg';
import PageHero from '../components/PageHero';
import StatsSection from '../components/StatsSection';
import IndustriesSection from '../components/IndustriesSection';
import CertificationsSection from '../components/CertificationsSection';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Layers,
    title: 'Structural Steel Fabrication',
    desc: 'Custom structural steel components built to exact specifications for commercial and industrial construction projects. Our fabrication team works from your engineering drawings to produce beams, columns, trusses, and connections with unmatched accuracy.',
    features: ['Custom shop drawings', 'AISC certified fabrication', 'Any grade of structural steel', 'Full weld inspection'],
    image: IMG_STEEL_STRUCTURE,
  },
  {
    icon: Settings,
    title: 'CNC Precision Machining',
    desc: 'High-tolerance CNC machining for complex parts with tight dimensional accuracy and superior surface finishes. Our 5-axis machining centers handle the most demanding geometries for aerospace, energy, and industrial applications.',
    features: ['5-axis CNC centres', 'Tolerances to ±0.001"', 'All metals & alloys', 'CMM verification'],
    image: IMG_CNC_MACHINE,
  },
  {
    icon: Zap,
    title: 'Metal Casting & Forging',
    desc: 'Industrial-grade casting and forging processes for robust, high-performance metal components of any size. From small precision castings to large forgings exceeding 50 tons, we have the capacity to meet your requirements.',
    features: ['Sand & investment casting', 'Open & closed die forging', 'Carbon & alloy steels', 'Heat treatment in-house'],
    image: IMG_MOLTEN_STEEL,
  },
  {
    icon: Shield,
    title: 'Quality Control & Testing',
    desc: 'Rigorous NDT, material testing, and dimensional inspection ensuring every product meets international standards. Our in-house laboratory is equipped with the latest testing equipment and staffed by certified inspectors.',
    features: ['UT, MT, PT, RT testing', 'Material certification', 'Dimensional inspection', 'ASME & AWS compliance'],
    image: IMG_QUALITY_CHECK,
  },
  {
    icon: Truck,
    title: 'Logistics & Installation',
    desc: 'End-to-end project delivery including transportation, on-site installation, and commissioning services. Our field crews are experienced in complex structural erections, heavy lifts, and tight-schedule installations worldwide.',
    features: ['Heavy haulage coordination', 'Skilled erection crews', 'Worldwide delivery', 'As-built documentation'],
    image: IMG_WAREHOUSE,
  },
  {
    icon: FlaskConical,
    title: 'Surface Treatment',
    desc: 'Comprehensive surface finishing solutions including galvanizing, powder coating, sandblasting, and painting. Our surface treatment facility handles substrates of all sizes with fast turnaround and durable, specification-grade finishes.',
    features: ['Hot-dip galvanizing', 'Industrial painting', 'Powder coating', 'Abrasive blasting (Sa 2.5)'],
    image: IMG_SURFACE_TREAT,
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our"
        highlight="Services"
        subtitle="Comprehensive steel manufacturing and industrial services — from raw material to finished product, all under one roof."
        image={IMG_STEEL_STRUCTURE}
      />

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`relative ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-96 object-cover border border-gray-200"
                />
                <div className="absolute top-6 left-6 w-14 h-14 bg-sky-600 flex items-center justify-center shadow-lg">
                  <svc.icon size={26} className="text-white" />
                </div>
              </div>
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="w-8 h-0.5 bg-sky-600" />
                  <span className="text-sky-600 text-xs font-bold uppercase tracking-[0.3em]">Our Service</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black uppercase leading-tight mb-5 text-gray-900">
                  {svc.title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">{svc.desc}</p>
                <ul className="space-y-2 mb-8">
                  {svc.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle size={14} className="text-sky-600 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-bold uppercase tracking-widest text-xs px-6 py-3 transition-colors"
                >
                  Request a Quote <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <IndustriesSection />
      <CertificationsSection />
      <StatsSection />
    </>
  );
}
