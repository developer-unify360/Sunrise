import { Linkedin, Twitter, Mail } from 'lucide-react';
import IMG_TEAM_ROBERT from '../assets/Images/pexels-photo-3760263.jpeg';
import IMG_TEAM_MARIA from '../assets/Images/pexels-photo-3778603.jpeg';
import IMG_TEAM_JAMES from '../assets/Images/pexels-photo-3756679.jpeg';
import IMG_TEAM_SANDRA from '../assets/Images/pexels-photo-3785079.jpeg';

const team = [
  {
    name: 'Sunrise Management',
    role: 'Director',
    image: IMG_TEAM_ROBERT,
    bio: '35+ years of experience in stainless steel pipe & fitting industry across India and global markets.',
  },
  {
    name: 'Technical Team',
    role: 'Chief Engineer',
    image: IMG_TEAM_MARIA,
    bio: 'Expert metallurgical engineers ensuring every product meets international grade specifications.',
  },
  {
    name: 'Quality Control',
    role: 'QA Head',
    image: IMG_TEAM_JAMES,
    bio: 'ISO-trained QA professionals — rigorous testing on every batch before dispatch.',
  },
  {
    name: 'Sales & Export',
    role: 'Export Manager',
    image: IMG_TEAM_SANDRA,
    bio: 'Handling global exports to 50+ countries with seamless documentation and logistics.',
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <div className="w-8 h-0.5 bg-blue-600" />
            <span className="text-blue-600 text-xs font-bold uppercase tracking-[0.3em]">Our People</span>
            <div className="w-8 h-0.5 bg-blue-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight text-gray-900">
            Meet The <span className="text-orange-500">Team</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Industry veterans and skilled professionals united by a passion for quality and on-time delivery.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map(member => (
            <div key={member.name} className="group relative overflow-hidden bg-white border border-gray-200 hover:border-orange-500 hover:shadow-xl transition-all duration-300">
              <div className="relative h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  {[Linkedin, Twitter, Mail].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-9 h-9 bg-orange-500 hover:bg-orange-600 flex items-center justify-center transition-colors"
                    >
                      <Icon size={14} className="text-white" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-5">
                <div className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-1">{member.role}</div>
                <h3 className="text-gray-900 font-bold text-lg uppercase tracking-wide mb-2">{member.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </div>

              <div className="h-0.5 bg-gray-100 group-hover:bg-orange-500 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
