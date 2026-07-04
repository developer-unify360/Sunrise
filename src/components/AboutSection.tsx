import { CheckCircle, Award, Users, Wrench } from 'lucide-react';
import IMG_MOLTEN_STEEL from '../assets/Images/pexels-photo-2760243.jpeg';
import IMG_QUALITY_CHECK from '../assets/Images/pexels-photo-190537.jpeg';

const highlights = [
  'ISO 9001:2015 Certified Facility',
  'Advanced CNC Machining Setup',
  'In-House Metallurgy Lab',
  'Dedicated QA Specialists',
  'Reliable, On-Time Dispatch',
  'Round-the-Clock Technical Assistance',
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10">
              <img
                src={IMG_MOLTEN_STEEL}
                alt="Steel factory floor"
                className="w-full h-[480px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-56 h-56 border-4 border-white z-20 hidden md:block">
              <img
                src={IMG_QUALITY_CHECK}
                alt="Metal fabrication"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-sky-600 -z-0" />
            <div className="absolute top-6 left-6 bg-sky-600 text-white p-5 z-20">
              <div className="text-5xl font-black leading-none">35</div>
              <div className="text-xs uppercase tracking-widest font-bold mt-1">Years of<br/>Excellence</div>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-sky-600" />
              <span className="text-sky-600 text-xs font-bold uppercase tracking-[0.3em]">About Us</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-6 text-gray-900">
              Engineered for <span className="text-sky-600">Performance</span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              SUNRISE ENTERPRISE manufactures and supplies stainless steel pipes, fittings, flanges, valves and raw materials to industries around the world, backed by a firm commitment to engineering excellence.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Whether it's a precision fitting or a bulk raw material order, every item in our catalog is held to international standards, so reliability and punctual delivery are never in question.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-10">
              {highlights.map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle size={15} className="text-sky-600 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-md transition-colors"
            >
              Discover Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
