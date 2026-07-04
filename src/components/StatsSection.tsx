import { useEffect, useRef, useState } from 'react';
import { Trophy, Globe, Star, Package } from 'lucide-react';
import IMG_BG from '../assets/Images/pexels-photo-3862619.jpeg';

const stats = [
  { icon: Trophy, value: 35, suffix: '+', label: 'Years Experience', desc: 'Since 1987' },
  { icon: Package, value: 500, suffix: '+', label: 'Products Range', desc: 'Pipes, Fittings, Valves & More' },
  { icon: Globe, value: 50, suffix: '+', label: 'Countries Served', desc: 'Global export reach' },
  { icon: Star, value: 98, suffix: '%', label: 'Client Satisfaction', desc: 'On-time, every time' },
];

function useCountUp(target: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1800;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, active]);
  return count;
}

function StatItem({ icon: Icon, value, suffix, label, desc, active }: typeof stats[0] & { active: boolean }) {
  const count = useCountUp(value, active);
  return (
    <div className="group text-center px-8 py-10 border-r border-white/20 last:border-0">
      <div className="w-16 h-16 bg-white/10 border-2 border-sky-400 flex items-center justify-center mx-auto mb-5 group-hover:bg-sky-600 transition-colors duration-300">
        <Icon size={28} className="text-sky-400 group-hover:text-white transition-colors" />
      </div>
      <div className="text-5xl font-black text-white mb-2 leading-none">{count}{suffix}</div>
      <div className="text-sm font-bold uppercase tracking-widest text-white mb-1">{label}</div>
      <div className="text-xs text-white/60">{desc}</div>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-0 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url('${IMG_BG}')` }} />
      <div className="absolute inset-0 bg-sky-600/85" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-white" />
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x-0 lg:divide-x divide-white/20">
          {stats.map(s => <StatItem key={s.label} {...s} active={active} />)}
        </div>
      </div>
    </section>
  );
}
