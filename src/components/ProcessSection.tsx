import { ClipboardList, Search, Package, CheckSquare, Truck, HeartHandshake } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    num: '01',
    title: 'Inquiry & Requirement',
    desc: 'Share your product requirements, grade, size, quantity and delivery timeline with our team.',
  },
  {
    icon: Search,
    num: '02',
    title: 'Sourcing & Procurement',
    desc: 'We source from certified mills and our large stock inventory to fulfil your exact specifications.',
  },
  {
    icon: Package,
    num: '03',
    title: 'Processing & Cutting',
    desc: 'Custom cut lengths, surface finishing, threading and other value-added processing as required.',
  },
  {
    icon: CheckSquare,
    num: '04',
    title: 'Quality Inspection',
    desc: 'Every product undergoes third-party and in-house testing — dimensional, chemical and mechanical.',
  },
  {
    icon: Truck,
    num: '05',
    title: 'Packing & Dispatch',
    desc: 'Export-quality wooden / PP packing with full documentation — MTC, test reports, COA.',
  },
  {
    icon: HeartHandshake,
    num: '06',
    title: 'After-Sales Support',
    desc: 'Dedicated account management and technical support even after delivery — always available.',
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-gray-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <div className="w-8 h-0.5 bg-orange-500" />
            <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.3em]">How We Work</span>
            <div className="w-8 h-0.5 bg-orange-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight text-gray-900">
            Our <span className="text-orange-500">Process</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            A streamlined six-step process ensures every order is processed accurately and delivered on time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="group relative bg-white border border-gray-200 hover:border-orange-500 p-8 transition-all duration-300 hover:shadow-xl overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-7xl font-black text-gray-100 leading-none select-none group-hover:text-orange-100 transition-colors">
                {step.num}
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 border-2 border-orange-500 flex items-center justify-center mb-5 group-hover:bg-orange-500 transition-colors duration-300">
                  <step.icon size={24} className="text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <div className="text-orange-500 text-xs font-black uppercase tracking-widest mb-2">Step {step.num}</div>
                <h3 className="text-gray-900 font-bold text-lg uppercase tracking-wide mb-3 leading-tight">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
