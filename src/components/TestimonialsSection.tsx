import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import IMG_T1 from '../assets/Images/pexels-photo-3760263.jpeg';
import IMG_T2 from '../assets/Images/pexels-photo-3778603.jpeg';
import IMG_T3 from '../assets/Images/pexels-photo-3756679.jpeg';

const testimonials = [
  {
    name: 'Rajesh Mehta',
    company: 'Petrochemical Solutions Pvt. Ltd.',
    role: 'Purchase Manager',
    image: IMG_T1,
    text: 'Sunrise Enterprise has been our trusted supplier for SS pipes and fittings for over 8 years. Their product quality, timely delivery and after-sales support is unmatched in the industry.',
    rating: 5,
  },
  {
    name: 'Anita Sharma',
    company: 'Pharma Tech Industries',
    role: 'VP Operations',
    image: IMG_T2,
    text: 'We rely on Sunrise Enterprise for all our dairy and pharma grade fittings. Their material test certificates, documentation and product quality meet every regulatory requirement we have. Highly recommended.',
    rating: 5,
  },
  {
    name: 'Suresh Patel',
    company: 'Gulf Export Trading LLC',
    role: 'Procurement Director',
    image: IMG_T3,
    text: 'Sunrise Enterprise has been exporting to us in the Middle East for 5 years. Excellent packing, on-time shipments and every product passes our third-party inspection without issues. A truly reliable partner.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx(i => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx(i => (i + 1) % testimonials.length);
  const t = testimonials[idx];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-blue-600">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)`,
          backgroundSize: '20px 20px',
        }}
      />
      {/* Top & bottom white strips */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-white/30" />
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-white/30" />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <div className="w-8 h-0.5 bg-white" />
            <span className="text-white text-xs font-bold uppercase tracking-[0.3em]">Client Reviews</span>
            <div className="w-8 h-0.5 bg-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight text-white">
            What Our <span className="text-white underline decoration-white/40 decoration-4">Clients Say</span>
          </h2>
          <p className="text-white/80 mt-4 text-sm">Trusted by businesses across India and 50+ countries worldwide</p>
        </div>

        {/* Testimonial card */}
        <div className="relative bg-white rounded-none shadow-2xl shadow-black/30 px-8 md:px-16 pt-16 pb-12">
          {/* Big quote icon */}
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-blue-600 border-4 border-white flex items-center justify-center shadow-lg">
            <Quote size={22} className="text-white" />
          </div>

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} size={22} className="text-orange-500 fill-orange-500" />
            ))}
          </div>

          {/* Quote text */}
          <p className="text-gray-700 text-xl md:text-2xl leading-relaxed text-center italic font-medium mb-10">
            "{t.text}"
          </p>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-gray-100" />
            <div className="w-2 h-2 bg-orange-500 rotate-45" />
            <div className="flex-1 h-px bg-gray-100" />
          </div>

          {/* Author */}
          <div className="flex items-center justify-center gap-5">
            <div className="relative">
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 object-cover object-top border-4 border-orange-500"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-orange-500 flex items-center justify-center">
                <Star size={10} className="text-white fill-white" />
              </div>
            </div>
            <div className="text-left">
              <div className="text-gray-900 font-black text-lg uppercase tracking-wide">{t.name}</div>
              <div className="text-orange-500 text-xs font-bold uppercase tracking-widest">{t.role}</div>
              <div className="text-gray-400 text-xs mt-0.5">{t.company}</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-12 h-12 bg-white/20 hover:bg-white border-2 border-white/40 hover:border-white flex items-center justify-center transition-all duration-200 group"
          >
            <ChevronLeft size={20} className="text-white group-hover:text-orange-500 transition-colors" />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`transition-all duration-300 ${
                  i === idx
                    ? 'w-8 h-3 bg-white'
                    : 'w-3 h-3 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-12 h-12 bg-white/20 hover:bg-white border-2 border-white/40 hover:border-white flex items-center justify-center transition-all duration-200 group"
          >
            <ChevronRight size={20} className="text-white group-hover:text-orange-500 transition-colors" />
          </button>
        </div>

        {/* Inspection agencies */}
        <div className="mt-16 pt-12 border-t border-white/20 text-center">
          <p className="text-white/60 text-xs uppercase tracking-[0.3em] mb-6 font-bold">
            Third Party Inspection Agencies
          </p>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {['DNV', "LLOYD'S", 'SGS', 'TUV', 'PDIL', 'RINA', 'EIL', 'TATA'].map(logo => (
              <span
                key={logo}
                className="text-white/80 font-black text-sm tracking-[0.15em] hover:text-white transition-colors cursor-default px-3 py-1 border border-white/20 hover:border-white/50"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
