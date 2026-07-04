import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import IMG_CNC_MACHINE from '../assets/Images/pexels-photo-3862619.jpeg';
import PageHero from '../components/PageHero';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageHero
        title="Contact"
        highlight="Us"
        subtitle="Ready to start your project? Get in touch with our engineering team for a detailed quote within 24 hours."
        image={IMG_CNC_MACHINE}
      />

      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* Info cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {[
              { icon: Phone, label: 'Phone',   value: '+91 97227 75181',       sub: 'Mon–Sat 9AM–6PM',       href: 'tel:+919722775181' },
              { icon: Mail,  label: 'Email',   value: 'sunernt20@gmail.com',  sub: 'Reply within 24 hours', href: 'mailto:sunernt20@gmail.com' },
              { icon: MapPin,label: 'Address', value: 'C-1/389, Shop No. 1-2, Shree Pramukh Swami', sub: 'GIDC, Makarpura, Vadodara - 390 010', href: 'https://maps.app.goo.gl/NAZCdzjXUBibeSTq7' },
              { icon: Clock, label: 'Hours',   value: 'Mon–Sat: 9:00–18:00',  sub: 'Sunday: Closed' },
            ].map(item => {
              const content = (
                <>
                  <div className="w-12 h-12 bg-sky-50 border border-sky-200 flex items-center justify-center shrink-0 group-hover:bg-sky-600 transition-colors duration-300">
                    <item.icon size={20} className="text-sky-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-[10px] uppercase tracking-widest font-bold mb-1">{item.label}</div>
                    <div className="text-gray-900 font-bold text-sm">{item.value}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{item.sub}</div>
                  </div>
                </>
              );

              if (item.href) {
                return (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                    className="bg-white border border-gray-200 hover:border-sky-600 hover:shadow-md p-6 flex items-start gap-4 transition-all duration-300 group">
                    {content}
                  </a>
                );
              }
              return (
                <div key={item.label} className="bg-white border border-gray-200 p-6 flex items-start gap-4 group">
                  {content}
                </div>
              );
            })}
          </div>

          {/* Form + info panel */}
          <div className="grid lg:grid-cols-5 gap-0 shadow-xl shadow-gray-200">

            {/* Left info panel — blue */}
            <div className="lg:col-span-2 bg-sky-600 p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-white font-black text-2xl uppercase tracking-wide mb-2">Get a Free Quote</h3>
                <div className="w-12 h-0.5 bg-white/40 mb-6" />
                <p className="text-white/85 text-sm leading-relaxed mb-8">
                  Fill in the form and one of our engineers will review your requirements and respond
                  with a detailed proposal — typically within one business day.
                </p>
                <div className="space-y-4">
                  {[
                    'Share project drawings or specs',
                    'Receive a detailed cost estimate',
                    'Schedule an engineering consultation',
                    'Begin production within weeks',
                  ].map((step, i) => (
                    <div key={step} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-white/20 border border-white/30 flex items-center justify-center text-white text-xs font-black shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-white/90 text-sm">{step}</span>
                    </div>
                  ))}
                </div>

                {/* Contact quick links */}
                <div className="mt-8 space-y-3">
                  <a href="tel:+919722775181" className="flex items-center gap-3 text-white/90 hover:text-white transition-colors text-sm font-bold group">
                    <Phone size={14} className="shrink-0" />
                    +91 97227 75181
                  </a>
                  <a href="mailto:sunernt20@gmail.com" className="flex items-center gap-3 text-white/90 hover:text-white transition-colors text-sm font-bold group">
                    <Mail size={14} className="shrink-0" />
                    sunernt20@gmail.com
                  </a>
                  <div className="flex items-start gap-3 text-white/90 text-sm">
                    <MapPin size={14} className="shrink-0 mt-0.5" />
                    C-1/389, Shop No. 1-2, Shree Pramukh Swami Industrial Estate, GIDC, Makarpura, Vadodara - 390 010
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/20 text-white/60 text-xs">
                All enquiries treated in strict confidence. No obligation.
              </div>
            </div>

            {/* Right form panel — white */}
            <div className="lg:col-span-3 bg-white p-8 lg:p-10 border border-gray-200 border-l-0">
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-12">
                  <div className="w-16 h-16 bg-sky-50 border-2 border-sky-600 flex items-center justify-center">
                    <CheckCircle size={32} className="text-sky-600" />
                  </div>
                  <h3 className="text-gray-900 font-black text-2xl uppercase">Message Sent!</h3>
                  <p className="text-gray-500 text-sm max-w-xs">
                    Thank you. Our engineering team will review your request and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-4 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold uppercase tracking-widest px-6 py-3 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h4 className="text-gray-900 font-black text-xl uppercase tracking-wide mb-1">Send Us a Message</h4>
                    <p className="text-gray-400 text-xs">Fill in the details below and we'll get back to you shortly.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="Your Name"
                        className="w-full bg-gray-50 border-2 border-gray-200 focus:border-sky-600 text-gray-900 text-sm px-4 py-3 outline-none transition-colors placeholder:text-gray-400" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@company.com"
                        className="w-full bg-gray-50 border-2 border-gray-200 focus:border-sky-600 text-gray-900 text-sm px-4 py-3 outline-none transition-colors placeholder:text-gray-400" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Phone Number</label>
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210"
                        className="w-full bg-gray-50 border-2 border-gray-200 focus:border-sky-600 text-gray-900 text-sm px-4 py-3 outline-none transition-colors placeholder:text-gray-400" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Product Required</label>
                      <select name="service" value={form.service} onChange={handleChange}
                        className="w-full bg-gray-50 border-2 border-gray-200 focus:border-sky-600 text-gray-900 text-sm px-4 py-3 outline-none transition-colors appearance-none">
                        <option value="">Select product...</option>
                        <option>Flanges</option>
                        <option>Buttweld Fittings</option>
                        <option>Forged Fittings</option>
                        <option>Ferrule Fittings</option>
                        <option>Dairy / Pharma Fittings</option>
                        <option>Industrial Valves</option>
                        <option>Pipes & Tubes</option>
                        <option>Bars, Rods & Wires</option>
                        <option>Sheets, Plates & Coils</option>
                        <option>Fasteners</option>
                        <option>Hose Pipe</option>
                        <option>SAE Flanges</option>
                        <option>Syphon Tubes</option>
                        <option>Snubbers</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Requirements / Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                      placeholder="Please describe the product, grade, size, quantity and delivery timeline..."
                      className="w-full bg-gray-50 border-2 border-gray-200 focus:border-sky-600 text-gray-900 text-sm px-4 py-3 outline-none transition-colors resize-none placeholder:text-gray-400" />
                  </div>

                  <button type="submit"
                    className="w-full bg-sky-600 hover:bg-sky-700 text-white font-black uppercase tracking-widest text-sm py-4 flex items-center justify-center gap-3 transition-colors shadow-lg shadow-sky-100">
                    <Send size={16} />
                    Send Your Request
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
