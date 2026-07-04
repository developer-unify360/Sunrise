import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', product: '', message: '' });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="bg-gray-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <div className="w-8 h-0.5 bg-blue-600" />
            <span className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em]">Get In Touch</span>
            <div className="w-8 h-0.5 bg-blue-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight text-gray-900">
            Request a <span className="text-blue-600">Quote</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Tell us your product requirements and our team will respond within 24 hours with pricing and availability.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-0 shadow-2xl shadow-gray-200">
          {/* Contact Info Panel */}
          <div className="lg:col-span-2 bg-blue-600 p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-white font-black text-2xl uppercase tracking-wide mb-2">Contact Info</h3>
              <div className="w-12 h-0.5 bg-white/40 mb-8" />

              <div className="space-y-6">
                {[
                  { icon: Phone, label: 'Phone', value: '+91 0265 - 2632006', sub: 'Mon–Sat 9AM–6PM', href: 'tel:+91-0265-2632006' },
                  { icon: Mail, label: 'Email', value: 'sunrent20@gmail.com', sub: 'Reply within 24 hours', href: 'mailto:sunrent20@gmail.com' },
                  { icon: MapPin, label: 'Address', value: 'C-1/289, Shop No. 1-2, Shree Pramukh Swami', sub: 'Makarpura, Vadodara - 390 010', href: 'https://maps.google.com' },
                  { icon: Clock, label: 'Hours', value: 'Mon–Sat: 9:00 AM – 6:00 PM', sub: 'Sunday: Closed' },
                ].map(item => {
                  const content = (
                    <>
                      <div className="w-10 h-10 bg-white/20 flex items-center justify-center shrink-0">
                        <item.icon size={18} className="text-white" />
                      </div>
                      <div>
                        <div className="text-white/60 text-[10px] uppercase tracking-widest font-bold mb-0.5">{item.label}</div>
                        <div className="text-white font-bold text-sm">{item.value}</div>
                        <div className="text-white/70 text-xs">{item.sub}</div>
                      </div>
                    </>
                  );
                  if (item.href) {
                    return (
                      <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group hover:opacity-80 transition-opacity">
                        {content}
                      </a>
                    );
                  }
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/20">
              <p className="text-white/80 text-sm font-bold uppercase tracking-wider mb-3">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { label: 'FB', href: 'https://www.facebook.com/share/1HxGxwpV4S/' },
                  { label: 'IG', href: 'https://www.instagram.com/sunriseenterprise' },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 hover:bg-white hover:text-blue-600 flex items-center justify-center text-white text-xs font-black transition-all duration-200">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form Panel */}
          <div className="lg:col-span-3 bg-white p-8 lg:p-10 border border-gray-200 border-l-0">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-12">
                <div className="w-16 h-16 bg-blue-50 border-2 border-blue-600 flex items-center justify-center">
                  <CheckCircle size={32} className="text-blue-600" />
                </div>
                <h3 className="text-gray-900 font-black text-2xl uppercase">Message Sent!</h3>
                <p className="text-gray-500 text-sm max-w-xs">
                  Thank you for reaching out. Our team will review your request and respond within 24 hours.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-widest px-6 py-3 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Full Name *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                      className="w-full bg-gray-50 border-2 border-gray-200 focus:border-blue-600 text-gray-900 text-sm px-4 py-3 outline-none transition-colors placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address *</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@company.com"
                      className="w-full bg-gray-50 border-2 border-gray-200 focus:border-blue-600 text-gray-900 text-sm px-4 py-3 outline-none transition-colors placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Phone Number</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full bg-gray-50 border-2 border-gray-200 focus:border-blue-600 text-gray-900 text-sm px-4 py-3 outline-none transition-colors placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Product Required</label>
                    <select
                      name="product"
                      value={form.product}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border-2 border-gray-200 focus:border-blue-600 text-gray-900 text-sm px-4 py-3 outline-none transition-colors appearance-none"
                    >
                      <option value="">Select product...</option>
                      <option>Flanges</option>
                      <option>Buttweld Fittings</option>
                      <option>Forged Fittings</option>
                      <option>Ferrule Fittings</option>
                      <option>Dairy / Pharma Fittings</option>
                      <option>Valves</option>
                      <option>Pipes & Tubes</option>
                      <option>Bar / Rod / Wire</option>
                      <option>Sheet, Plate & Coil</option>
                      <option>Fasteners</option>
                      <option>Hose Pipe</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Requirements / Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Please describe the product, grade, size, quantity and delivery timeline..."
                    className="w-full bg-gray-50 border-2 border-gray-200 focus:border-blue-600 text-gray-900 text-sm px-4 py-3 outline-none transition-colors resize-none placeholder:text-gray-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest text-sm py-4 flex items-center justify-center gap-3 transition-colors shadow-lg shadow-blue-200"
                >
                  <Send size={16} />
                  Send Your Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
