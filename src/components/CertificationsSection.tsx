import { ShieldCheck, BadgeCheck } from 'lucide-react';

// Third Party Inspection logos
import IMG_DNV      from '../assets/3rd party company/WhatsApp Image 2026-06-23 at 12.40.33 PM.jpeg';
import IMG_BV       from '../assets/3rd party company/WhatsApp Image 2026-06-23 at 12.40.32 PM (2).jpeg';
import IMG_NPCIL    from '../assets/3rd party company/WhatsApp Image 2026-06-23 at 12.40.29 PM.jpeg';
import IMG_TUV_INDIA from '../assets/3rd party company/WhatsApp Image 2026-06-23 at 12.40.30 PM.jpeg';
import IMG_PDIL     from '../assets/3rd party company/WhatsApp Image 2026-06-23 at 12.40.31 PM.jpeg';
import IMG_LLOYDS   from '../assets/3rd party company/WhatsApp Image 2026-06-23 at 12.40.31 PM (1).jpeg';
import IMG_TATA     from '../assets/3rd party company/WhatsApp Image 2026-06-23 at 12.40.31 PM (2).jpeg';
import IMG_SGS      from '../assets/3rd party company/WhatsApp Image 2026-06-23 at 12.40.31 PM (3).jpeg';
import IMG_TUV_SUD  from '../assets/3rd party company/WhatsApp Image 2026-06-23 at 12.40.30 PM (1).jpeg';
import IMG_EIL      from '../assets/3rd party company/WhatsApp Image 2026-06-23 at 12.40.32 PM.jpeg';
import IMG_RINA     from '../assets/3rd party company/WhatsApp Image 2026-06-23 at 12.40.32 PM (1).jpeg';

// Standard Followers logos
import IMG_DIN      from '../assets/3rd party company/WhatsApp Image 2026-06-23 at 12.51.45 PM.jpeg';
import IMG_ASTM     from '../assets/3rd party company/WhatsApp Image 2026-06-23 at 12.51.45 PM (1).jpeg';
import IMG_ASME     from '../assets/3rd party company/WhatsApp Image 2026-06-23 at 12.51.46 PM.jpeg';
import IMG_ANSI     from '../assets/3rd party company/WhatsApp Image 2026-06-23 at 12.51.46 PM (1).jpeg';
import IMG_JIS      from '../assets/3rd party company/WhatsApp Image 2026-06-23 at 12.51.46 PM (2).jpeg';
import IMG_CE       from '../assets/3rd party company/WhatsApp Image 2026-06-23 at 12.51.47 PM.jpeg';
import IMG_BIS      from '../assets/3rd party company/WhatsApp Image 2026-06-23 at 12.51.47 PM (1).jpeg';

const inspectors = [
  { name: 'DNV',                  logo: IMG_DNV       },
  { name: 'Bureau Veritas',       logo: IMG_BV        },
  { name: 'NPCIL',                logo: IMG_NPCIL     },
  { name: 'TUV India',            logo: IMG_TUV_INDIA },
  { name: 'PDIL',                 logo: IMG_PDIL      },
  { name: "Lloyd's Register",     logo: IMG_LLOYDS    },
  { name: 'TATA Projects',        logo: IMG_TATA      },
  { name: 'SGS',                  logo: IMG_SGS       },
  { name: 'TUV SUD',              logo: IMG_TUV_SUD   },
  { name: 'EIL',                  logo: IMG_EIL       },
  { name: 'RINA',                 logo: IMG_RINA      },
];

const standards = [
  { name: 'DIN',  logo: IMG_DIN  },
  { name: 'ASTM', logo: IMG_ASTM },
  { name: 'ASME', logo: IMG_ASME },
  { name: 'ANSI', logo: IMG_ANSI },
  { name: 'JIS',  logo: IMG_JIS  },
  { name: 'CE',   logo: IMG_CE   },
  { name: 'BIS',  logo: IMG_BIS  },
];

export default function CertificationsSection() {
  return (
    <div>

      {/* ── Section 1: Third Party Inspection ── */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1 h-10 bg-orange-500 flex-shrink-0" />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck size={20} className="text-orange-500" />
                <h2 className="text-xl font-black uppercase text-gray-900 tracking-wide">
                  Third Party Inspection
                </h2>
              </div>
              <p className="text-gray-400 text-xs">
                Our products are inspected and certified by globally recognised bodies
              </p>
            </div>
          </div>

          {/* Logo grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-4">
            {inspectors.map(({ name, logo }) => (
              <div
                key={name}
                className="group flex flex-col items-center gap-2 bg-gray-50 border border-gray-200 hover:border-orange-400 hover:bg-orange-50 p-3 transition-all duration-200 cursor-default"
              >
                <div className="w-full h-14 flex items-center justify-center">
                  <img
                    src={logo}
                    alt={name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wide text-gray-500 group-hover:text-orange-600 text-center leading-tight">
                  {name}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Section 2: Standard Followers ── */}
      <section className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1 h-10 bg-orange-500 flex-shrink-0" />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <BadgeCheck size={20} className="text-orange-500" />
                <h2 className="text-xl font-black uppercase text-gray-900 tracking-wide">
                  Standard Followers
                </h2>
              </div>
              <p className="text-gray-400 text-xs">
                All products conform to international quality and safety standards
              </p>
            </div>
          </div>

          {/* Logo grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 max-w-3xl">
            {standards.map(({ name, logo }) => (
              <div
                key={name}
                className="group flex flex-col items-center gap-2 bg-white border border-gray-200 hover:border-orange-400 hover:shadow-md p-4 transition-all duration-200 cursor-default"
              >
                <div className="w-full h-14 flex items-center justify-center">
                  <img
                    src={logo}
                    alt={name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-orange-500 text-center">
                  {name}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-gray-400 text-xs leading-relaxed border-l-2 border-orange-500 pl-3 max-w-2xl">
            Includes ASTM, ASME, DIN, JIS, EN, ANSI, BS, API, NACE, IS, 3A Sanitary &amp; SMS compliance
            across all our product lines.
          </p>

        </div>
      </section>

    </div>
  );
}
