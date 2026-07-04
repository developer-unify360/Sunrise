import IMG_OIL        from '../assets/Images/Oil and Chemical Industries.jpg';
import IMG_VALVE       from '../assets/Images/Valve Industries.jpg';
import IMG_PHARMA      from '../assets/Images/pharmacuetical Ind.jpg';
import IMG_PETRO       from '../assets/Images/petrochemical.jpg';
import IMG_FOOD        from '../assets/Images/food and dairy industry.jpg';
import IMG_AEROSPACE   from '../assets/Images/aircraft and aerospace industries.jpg';
import IMG_AUTO        from '../assets/Images/automotive industries.jpg';
import IMG_MACHINING   from '../assets/Images/machine and engennring industries.jpg';
import IMG_ARCH        from '../assets/Images/architecturial industries.jpg';
import IMG_SHIP        from '../assets/Images/ordiance and ship building industries.jpg';

const industries = [
  { name: 'Oil & Chemical Industries',           image: IMG_OIL      },
  { name: 'Valve Industries',                    image: IMG_VALVE    },
  { name: 'Pharmaceutical Industries',           image: IMG_PHARMA   },
  { name: 'Petrochemical Industries',            image: IMG_PETRO    },
  { name: 'Food & Dairy Industries',             image: IMG_FOOD     },
  { name: 'Aircraft & Aerospace Industries',     image: IMG_AEROSPACE},
  { name: 'Automotive Industries',               image: IMG_AUTO     },
  { name: 'Machining & Engineering Industries',  image: IMG_MACHINING},
  { name: 'Architectural Industries',            image: IMG_ARCH     },
  { name: 'Ordinance & Ship Building Industries',image: IMG_SHIP     },
];

export default function IndustriesSection() {
  return (
    <section className="bg-gray-50 py-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-sky-600" />
            <span className="text-sky-600 text-xs font-bold uppercase tracking-[0.3em]">Industries</span>
            <div className="w-8 h-0.5 bg-sky-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase text-gray-900">
            Industries We <span className="text-sky-600">Serve</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm leading-relaxed">
            Our products are trusted across a wide range of industries worldwide —
            from oil &amp; chemical to aerospace, automotive and beyond.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {industries.map(({ name, image }) => (
            <div
              key={name}
              className="group relative overflow-hidden h-44 cursor-default"
            >
              {/* Background image */}
              <img
                src={image}
                alt={name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent group-hover:from-sky-700/80 group-hover:via-sky-600/40 transition-all duration-400" />

              {/* Blue top accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-sky-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Name */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-white text-[11px] font-bold uppercase leading-tight tracking-wide text-center">
                  {name}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
