import { CheckCircle, Award, Target, Eye, Heart } from 'lucide-react';
import IMG_MOLTEN_STEEL from '../assets/Images/pexels-photo-2760243.jpeg';
import IMG_QUALITY_CHECK from '../assets/Images/pexels-photo-190537.jpeg';
import PageHero from '../components/PageHero';
import TeamSection from '../components/TeamSection';
import TestimonialsSection from '../components/TestimonialsSection';
import StatsSection from '../components/StatsSection';

const highlights = [
  'ISO 9001:2015 Certified Manufacturer',
  'Third-Party Inspected Products (DNV, SGS, TUV)',
  'In-house Quality Testing Laboratory',
  'Dedicated Quality Assurance Team',
  'On-time Delivery Guarantee',
  '24/7 Technical & After-Sales Support',
];

const values = [
  {
    icon: Target,
    title: 'Precision',
    desc: 'Every product we supply is checked against the tightest international standards. We never compromise on quality.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    desc: 'We keep clients informed at every stage — from quoting to delivery — with clear communication and honest timelines.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    desc: 'Our reputation is built on trust. We stand behind every product with full accountability and long-term relationships.',
  },
  {
    icon: Award,
    title: 'Excellence',
    desc: 'We pursue continuous improvement in sourcing, testing, and logistics to consistently exceed client expectations.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About"
        highlight="Satvik Pipe Industries"
        subtitle="35+ years of excellence in stainless steel pipes, fittings, flanges and raw materials supply worldwide."
        image={IMG_MOLTEN_STEEL}
      />

      {/* Story section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={IMG_MOLTEN_STEEL}
                alt="Satvik factory floor"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute -bottom-8 -right-8 w-56 h-56 border-4 border-white z-20 hidden md:block">
                <img
                  src={IMG_QUALITY_CHECK}
                  alt="Quality inspection"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-500 -z-0" />
              <div className="absolute top-6 left-6 bg-orange-500 text-white p-5 z-20">
                <div className="text-5xl font-black leading-none">35</div>
                <div className="text-xs uppercase tracking-widest font-bold mt-1">Years of<br />Excellence</div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-0.5 bg-orange-500" />
                <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.3em]">Our Story</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-6 text-gray-900">
                A Legacy of <span className="text-orange-500">Quality</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Satvik Pipe Industries, based in Vadodara (Gujarat), is a leading manufacturer and supplier of Stainless Steel Pipes, Fittings, Flanges, Valves and Raw Materials. We have been serving the industry since 1987 with an unwavering commitment to quality.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                From precision dairy fittings to heavy-duty industrial flanges, our comprehensive product range meets international standards (ASTM, ASME, DIN, JIS, EN) — ensuring quality, reliability and on-time delivery every time.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-10">
                {highlights.map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle size={15} className="text-orange-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 justify-center">
              <div className="w-8 h-0.5 bg-orange-500" />
              <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.3em]">What Drives Us</span>
              <div className="w-8 h-0.5 bg-orange-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight text-gray-900">
              Our Core <span className="text-orange-500">Values</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(v => (
              <div key={v.title} className="group bg-white p-8 hover:shadow-xl border border-gray-200 hover:border-orange-500 transition-all duration-300 border-t-4 border-t-orange-500">
                <div className="w-14 h-14 border-2 border-orange-500 flex items-center justify-center mb-5 group-hover:bg-orange-500 transition-colors">
                  <v.icon size={24} className="text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-gray-900 font-bold text-lg uppercase tracking-wide mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />
      <TeamSection />
      <TestimonialsSection />
    </>
  );
}
