import { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import IndustriesSection from '../components/IndustriesSection';
import CertificationsSection from '../components/CertificationsSection';

// ── Named product images (visually verified) ─────────────────────────────────
import IMG_PIPES      from '../assets/Product/Pipes and tubes.avif';
import IMG_BARS       from '../assets/Product/ss-bars1.webp';
import IMG_ANGLES     from '../assets/Product/Angle.png';
import IMG_SHEETS     from '../assets/Product/sheet file and coil.webp';
import IMG_PERFORATED from '../assets/Product/perforted sheet.jpg';
import IMG_FASTENERS  from '../assets/Product/stainless-steel-fastener.jpeg';
import IMG_FLANGES    from '../assets/Product/Flanges.png';
import IMG_SAE        from '../assets/Product/sae-threaded-flange.jpg';
import IMG_BUTT       from '../assets/Product/Buttwels feeting.jpg';
import IMG_FORGED     from '../assets/Product/Forged-Fittings.jpg';
import IMG_FERRULE    from '../assets/Product/ferrule-fittings-.webp';
import IMG_DAIRY      from '../assets/Product/stainless-steel-dairy-fittings.jpg';
import IMG_VALVES     from '../assets/Product/Valves.jpg';
import IMG_HOSE       from '../assets/Product/Flanges.webp';
import IMG_SYPHON     from '../assets/Product/Sypon tube.jpg';
import IMG_SNUBBER    from '../assets/Product/sae-threaded-flange.jpg';

// ─── Types ────────────────────────────────────────────────────────────────────
type Subcategory = { title: string; types: string[] };
type Product = {
  id: string;
  category: string;
  title: string;
  image: string;
  specs: { label: string; value: string }[];
  subcategories: Subcategory[];
};

// ─── Filter Categories ────────────────────────────────────────────────────────
const FILTER_CATEGORIES = [
  'All',
  'Pipes & Raw Materials',
  'Flanges',
  'Buttweld Fittings',
  'Forged Fittings',
  'Ferrule & Instrumentation',
  'Dairy & Pharma',
  'Industrial Valves',
  'Flexible Hoses',
];

const CATEGORY_DESC: Record<string, string> = {
  'Pipes & Raw Materials':
    'Complete range of stainless steel pipes, tubes, bars, rods, wires, angles, channels, sheets, plates, perforated sheets and fasteners.',
  'Flanges':
    'Industrial flanges and SAE hydraulic flanges in all sizes from ½" NB to 24" NB, Class 150# to 2500#.',
  'Buttweld Fittings':
    'High quality butt weld pipe fittings — elbows, tees, reducers, end caps and stub ends in ¼" NB to 48" NB.',
  'Forged Fittings':
    'Precision forged fittings in threaded (FNPT) and socket weld (SW) configurations, ¼" NB to 4" NB.',
  'Ferrule & Instrumentation':
    'Ferrule tube fittings, instrumentation fittings and hydraulic / pneumatic quick release couplings.',
  'Dairy & Pharma':
    'Sanitary dairy and pharma grade fittings including TC clamps, dairy unions and tri-clamp accessories.',
  'Industrial Valves':
    'Full range of industrial valves for flow control and instrumentation — ball, gate, globe, needle, butterfly and more.',
  'Flexible Hoses':
    'Corrugated hose pipes, braided hose pipes, syphon tubes and snubbers for flexible and pressure sensing applications.',
};

// ─── Catalogue ────────────────────────────────────────────────────────────────
const catalogue: Product[] = [

  // ── 1. PIPES & TUBES ──────────────────────────────────────────────────────
  {
    id: 'pipes-tubes',
    category: 'Pipes & Raw Materials',
    title: 'Pipes & Tubes',
    image: IMG_PIPES,
    specs: [
      { label: 'Size Range', value: 'SMLS: 1/8"–28" · ERW: 1"–78" up to 24 NB' },
      { label: 'Thickness', value: '0.5 mm to 75 mm & SCH 5S to XXS' },
      { label: 'Standards', value: 'ASTM A312, A358, A249, A709, A928, DIN 1.4461, A335, A213, A691' },
    ],
    subcategories: [
      {
        title: 'Seamless & Welded Pipes',
        types: ['Seamless Pipes (SMLS)', 'ERW Pipes', 'Fabricated Pipes', 'LSAW Pipes'],
      },
      {
        title: 'Pipe Shapes',
        types: ['Round Pipes', 'Square Pipes', 'Rectangular Pipes', 'Hydraulic Tubes', 'Threaded Pipes'],
      },
      {
        title: 'Surface Finish',
        types: ['Polished Finish', 'Matt Finish', 'BA Finish', 'Rough Turned Finish', 'Aluminium Finish'],
      },
    ],
  },

  // ── 2. BARS, RODS & WIRES ─────────────────────────────────────────────────
  {
    id: 'bars-rods-wires',
    category: 'Pipes & Raw Materials',
    title: 'Bars, Rods & Wires',
    image: IMG_BARS,
    specs: [
      { label: 'Size Range', value: '1 mm to 500 mm' },
      { label: 'Length', value: '100 m to 6100 mm · Custom Cut Lengths' },
      { label: 'Standards', value: 'ASTM, ASME, SA276, SA479, EN, DIN, JIS, AISI, BS' },
    ],
    subcategories: [
      {
        title: 'Bar Shapes',
        types: ['Round Bars', 'Square Bars', 'Hex Bars (A/F)', 'Flat Bars'],
      },
      {
        title: 'Wires & Special Forms',
        types: ['Wire Rods', 'Wiremesh / Ingot', 'Wire (Coil Form)', 'Forged Bars', 'Billets'],
      },
      {
        title: 'Surface Finish',
        types: ['Polish Bright Finish', 'Black Finish', 'Matt Finish', 'Rough Turned Finish', 'No.4 Finish'],
      },
    ],
  },

  // ── 3. ANGLES, CHANNELS & FLATS ───────────────────────────────────────────
  {
    id: 'angles-channels',
    category: 'Pipes & Raw Materials',
    title: 'Angles, Channels & Flats',
    image: IMG_ANGLES,
    specs: [
      { label: 'Size Range', value: '1 mm to 70 mm' },
      { label: 'Length', value: '100 mm to 6100 mm · Custom Cut Lengths' },
      { label: 'Standards', value: 'EN, DIN, ASTM, AISI, ASME, JIS, NACE' },
    ],
    subcategories: [
      {
        title: 'Structural Sections',
        types: ['L Shape (SS Angles)', 'C Shape (SS Channels)', 'H Shape', 'SS Flats', 'Structural Sections'],
      },
      {
        title: 'Surface Finish',
        types: ['Hot Rolled', 'Annealed & Pickled'],
      },
    ],
  },

  // ── 4. SHEETS, PLATES & COILS ─────────────────────────────────────────────
  {
    id: 'sheets-plates',
    category: 'Pipes & Raw Materials',
    title: 'Sheets, Plates & Coils',
    image: IMG_SHEETS,
    specs: [
      { label: 'Thickness', value: '0.2 mm to 170 mm' },
      { label: 'Width', value: '10 mm to 3500 mm' },
      { label: 'Standards', value: 'ASTM A276, A479 / ASME SA276, SA479, API' },
    ],
    subcategories: [
      {
        title: 'Product Forms',
        types: ['SS Sheets', 'SS Plates', 'SS Coils', 'Shim & Foil', 'Circle & Ring', 'Perforated Sheets'],
      },
      {
        title: 'Surface Finish',
        types: ['CR', 'HR', '2B', '2D', 'No.1', 'No.4', '8K', 'Mirror Finish', 'PVC Coated', 'Designer Sheets'],
      },
    ],
  },

  // ── 5. PERFORATED SHEETS ──────────────────────────────────────────────────
  {
    id: 'perforated',
    category: 'Pipes & Raw Materials',
    title: 'Perforated Sheets',
    image: IMG_PERFORATED,
    specs: [
      { label: 'Thickness', value: '0.3 mm to 15 mm' },
      { label: 'Width', value: '1000 mm – 2000 mm (or customized)' },
      { label: 'Length', value: '1000 mm – 6000 mm (or customized)' },
    ],
    subcategories: [
      {
        title: 'Standards',
        types: ['JIS', 'AISI', 'ASTM', 'GB', 'DIN', 'EN'],
      },
      {
        title: 'Surface Options',
        types: ['2B', 'BA', 'HL', 'Brush', 'NO.1', 'NO.4', '8K', 'SB'],
      },
    ],
  },

  // ── 6. FASTENERS ──────────────────────────────────────────────────────────
  {
    id: 'fasteners',
    category: 'Pipes & Raw Materials',
    title: 'Fasteners',
    image: IMG_FASTENERS,
    specs: [
      { label: 'Size Range', value: '1/16" to 2" Fractional · 2 to 50 mm Metric' },
      { label: 'Standards', value: 'ASTM, ASME, DIN, JIS, BS, IS' },
      { label: 'Material', value: 'SS 304, SS 316, Carbon Steel, Alloy Steel' },
    ],
    subcategories: [
      {
        title: 'Fastener Types',
        types: ['Bolts', 'Nuts', 'Washers', 'Anchor Fasteners', 'Stud Bolts', 'Eye Bolt'],
      },
      {
        title: 'Stud & Specialty',
        types: ['Stud', 'Threaded Rod', 'Cotter Pin Socket Screw', 'Fine Fasteners & Spares', 'Foundation Fasteners'],
      },
    ],
  },

  // ── 7. INDUSTRIAL FLANGES ─────────────────────────────────────────────────
  {
    id: 'industrial-flanges',
    category: 'Flanges',
    title: 'Industrial Flanges',
    image: IMG_FLANGES,
    specs: [
      { label: 'Size Range', value: '1/2" NB to 24" NB' },
      { label: 'Class', value: '150# to 2500#' },
      { label: 'Standards', value: 'ASTM, ASME, EN, DIN, JIS, BS' },
    ],
    subcategories: [
      {
        title: 'Weld Neck Flanges',
        types: ['Weld Neck Flange', 'Weldneck Series A', 'Weldneck Series B', 'Long Weld Neck Flange'],
      },
      {
        title: 'Slip-On & Blind Flanges',
        types: ['Slip-On Flange', 'Blind Flange', 'Blind Series A', 'Blind Series B'],
      },
      {
        title: 'Special Flanges',
        types: [
          'Threaded Flange', 'Socket Weld Flange', 'Lap Joint Flange', 'Plate Flange',
          'Spectacles', 'Paddle Blank & Spacer', 'Orifice Flange', 'As Per Drawing',
        ],
      },
    ],
  },

  // ── 8. SAE FLANGES ────────────────────────────────────────────────────────
  {
    id: 'sae-flanges',
    category: 'Flanges',
    title: 'SAE Flanges',
    image: IMG_SAE,
    specs: [
      { label: 'Application', value: 'High Pressure Hydraulic System' },
      { label: 'Max Working Pressure', value: '6000 psi (414 bar) @ 100°F (38°C)' },
      { label: 'Working Temp Range', value: '-13°F to 392°F (-25°C to 200°C) with FKM Sealing' },
    ],
    subcategories: [
      {
        title: 'SAE Flange Standards',
        types: ['SAE J518 Code 61', 'SAE J518 Code 62', 'Hydraulic SAE Flanges', 'High Pressure SAE Flanges'],
      },
      {
        title: 'Configurations',
        types: ['Split Flange', 'Single Piece Flange', 'Straight', '90° Elbow', '45° Elbow'],
      },
    ],
  },

  // ── 9. BUTTWELD FITTINGS ──────────────────────────────────────────────────
  {
    id: 'buttweld',
    category: 'Buttweld Fittings',
    title: 'Buttweld Fittings',
    image: IMG_BUTT,
    specs: [
      { label: 'Size Range', value: '1/4" NB to 48" NB' },
      { label: 'Thickness', value: 'SCH.5S to SCH.XXS' },
      { label: 'Standards', value: 'ASTM, ASME, EN, DIN, JIS' },
    ],
    subcategories: [
      {
        title: 'Elbows',
        types: [
          '45° Elbow', '90° Elbow (1D)', '90° Elbow (1.5D)', '90° Elbow (3D)', '90° Elbow (5D)',
          '180° LR Return Bend', '180° SR Return Bend',
        ],
      },
      {
        title: 'Tees & Reducers',
        types: ['Equal Tee', 'Reducing Tee', 'Concentric Reducer', 'Eccentric Reducer'],
      },
      {
        title: 'Other Fittings',
        types: ['End Cap', 'Short Stub End', 'Long Stub End', 'Long Radius Piggable Bend', 'As Per Drawing'],
      },
    ],
  },

  // ── 10. FORGED FITTINGS ───────────────────────────────────────────────────
  {
    id: 'forged',
    category: 'Forged Fittings',
    title: 'Forged Fittings',
    image: IMG_FORGED,
    specs: [
      { label: 'Size Range', value: '1/4" NB to 4" NB' },
      { label: 'Standards', value: 'ASTM, ASME, EN, DIN, JIS' },
      { label: 'Types', value: 'Threaded (FNPT) & Socket Weld (SW)' },
    ],
    subcategories: [
      {
        title: 'Threaded Fittings',
        types: ['Threaded Elbow (90°/45°)', 'Threaded Tee', 'Threaded Coupling', 'Threaded Union', 'Threaded Plug', 'Threaded Cap'],
      },
      {
        title: 'Socket Weld Fittings',
        types: ['Socket Weld Elbow (90°/45°)', 'Socket Weld Tee', 'Socket Weld Union', 'Socket Weld Coupling'],
      },
      {
        title: 'Accessories',
        types: ['Hex Nipple', 'Pipe Nipple', 'Swage Nipple', 'Bull Plug', 'Welding Boss', 'Reducing Insert', 'Bushing', 'Cross', 'Sockolet'],
      },
    ],
  },

  // ── 11. FERRULE FITTING & QUICK RELEASE COUPLING ──────────────────────────
  {
    id: 'ferrule',
    category: 'Ferrule & Instrumentation',
    title: 'Ferrule Fitting & Quick Release Coupling',
    image: IMG_FERRULE,
    specs: [
      { label: 'Size Range', value: '1/16" and 2" Fractional' },
      { label: 'Metric Size', value: '2 and 50 mm Metric Size' },
      { label: 'Material', value: 'SS 304, SS 316, Carbon Steel, Brass' },
    ],
    subcategories: [
      {
        title: 'Tube Fittings',
        types: [
          'Male Connector', 'Female Connector', 'Male Adapter', 'Female Adapter',
          'Bulkhead Male Connector', 'Bulkhead Female Connector',
        ],
      },
      {
        title: 'Tee Fittings',
        types: ['Male Run Tee', 'Female Run Tee', 'Male Branch Tee', 'Female Branch Tee'],
      },
      {
        title: 'Ferrule Components',
        types: ['Front Ferrule', 'Back Ferrule', 'Ferrule Nut', 'Ferrule Union', 'Ferrule Bulkhead Union'],
      },
      {
        title: 'Other & Quick Release Couplings',
        types: [
          'Union Tee', 'Union Cross', 'Reducer Union', 'Elbow Union',
          'Hydraulic Quick Release Couplings', 'Pneumatic Quick Release Couplings',
        ],
      },
    ],
  },

  // ── 12. DAIRY FITTING / PHARMA FITTINGS ───────────────────────────────────
  {
    id: 'dairy',
    category: 'Dairy & Pharma',
    title: 'Dairy Fitting / Pharma Fittings',
    image: IMG_DAIRY,
    specs: [
      { label: 'Size Range', value: '1/4" NB to 48" NB' },
      { label: 'Standards', value: 'DIN, SMS, 3A Sanitary' },
      { label: 'Surface Finish', value: 'Mirror / Electro-Polished' },
    ],
    subcategories: [
      {
        title: 'Sanitary Fittings',
        types: [
          'Dairy Bend', 'Dairy Tee', 'Dairy Union', 'TC Clamp', 'TC Ferrule',
          'TC Ferrule Clamp Tee', 'DIN Union', 'Trickover Union', 'SMS Union',
        ],
      },
      {
        title: 'Valves & Accessories',
        types: [
          'Sanitary Butterfly Valve', 'Sanitary Ball Valve', 'SS Spray Balls',
          'Tri Clamp Elbow', 'Pipe Holder Clamp', 'Hose Clamps', 'Tri Clamp Reducer', 'Dairy Reducer',
        ],
      },
    ],
  },

  // ── 13. INDUSTRIAL VALVES ─────────────────────────────────────────────────
  {
    id: 'valves',
    category: 'Industrial Valves',
    title: 'Industrial Valves',
    image: IMG_VALVES,
    specs: [
      { label: 'Size Range', value: '1/4" NB to 48" NB' },
      { label: 'Standards', value: 'API, ASTM, ASME, DIN, BS' },
      { label: 'Pressure Class', value: '150# to 2500#' },
    ],
    subcategories: [
      {
        title: 'Flow Control Valves',
        types: ['Ball Valve', 'Butterfly Valve', 'Gate Valve', 'Globe Valve', 'Check Valve'],
      },
      {
        title: 'Instrumentation & Specialty Valves',
        types: [
          'Needle Valve', 'Manifold Valve', 'High Pressure Valves',
          'Plug Valve', 'Safety / Relief Valve', 'Control Valve',
          'Diaphragm Valve', 'Y-Strainer', 'Foot Valve',
        ],
      },
    ],
  },

  // ── 14. HOSE PIPES ────────────────────────────────────────────────────────
  {
    id: 'hose-pipe',
    category: 'Flexible Hoses',
    title: 'Hose Pipes',
    image: IMG_HOSE,
    specs: [
      { label: 'Size Range', value: '6 mm ID to 350 mm ID' },
      { label: 'Material', value: 'SS 304, SS 316' },
      { label: 'End Connections', value: 'Flanged, Threaded, Plain Ends' },
    ],
    subcategories: [
      {
        title: 'Hose Pipe Types',
        types: ['Corrugated Hose Pipe', 'Corrugated Bellow Hose', 'Braided Hose Pipe', 'Interlock Hose Pipe'],
      },
    ],
  },

  // ── 15. SYPHON TUBES ──────────────────────────────────────────────────────
  {
    id: 'syphon-tube',
    category: 'Flexible Hoses',
    title: 'Syphon Tubes',
    image: IMG_SYPHON,
    specs: [
      { label: 'Pipe Sizes', value: '3/8" NB & 1/2" NB Pipe (Sch 40, 80, or 160)' },
      { label: 'Thread Connection', value: 'M20, 3/8", ½", BSP, NPT, and other threads on request' },
      { label: 'Pressure Range', value: '0 to 100 kg/cm² & other ranges on request' },
    ],
    subcategories: [
      {
        title: 'Syphon Tube Types',
        types: ['Q Type Syphon', 'O Type Syphon', 'Plate U Type Syphon', 'Straight U Type Syphon'],
      },
      {
        title: 'Connection Types',
        types: ['MxM (Male to Male)', 'MxF (Male to Female)', 'FxF (Female to Female)'],
      },
    ],
  },

  // ── 16. SNUBBERS ──────────────────────────────────────────────────────────
  {
    id: 'snubber',
    category: 'Flexible Hoses',
    title: 'Snubbers',
    image: IMG_SNUBBER,
    specs: [
      { label: 'Size', value: '1/4", 1/2", 3/4", and custom options' },
      { label: 'Temperature Range', value: '-20°C to 200°C' },
      { label: 'Connection Type', value: 'Aluminium, Bronze, Carbon Steel, S.S.304, S.S.316 PP' },
    ],
    subcategories: [
      {
        title: 'Snubber Types',
        types: ['Stainless Steel Snubbers', 'Brass Snubbers', 'Aluminium Snubbers', 'Carbon Steel Snubbers'],
      },
      {
        title: 'End Connections',
        types: ['Male End Connection', 'Female End Connection', 'Custom Pressure Ranges', 'Piston Type Snubber'],
      },
    ],
  },
];

// ─── Product Card ─────────────────────────────────────────────────────────────
function ProductCard({ product }: { product: Product }) {
  const [expanded, setExpanded] = useState(false);
  const visibleSubs = expanded ? product.subcategories : product.subcategories.slice(0, 2);

  return (
    <div className="bg-white border border-gray-200 hover:border-blue-600 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
      {/* Image with product name heading */}
      <div className="relative overflow-hidden h-52 flex-shrink-0">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        {/* Orange bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600" />
        {/* Product name as image heading */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-black text-base uppercase leading-tight group-hover:text-blue-300 transition-colors">
            {product.title}
          </h3>
        </div>
      </div>

      {/* Specs Table */}
      <div className="border-b border-gray-100">
        {product.specs.map((spec) => (
          <div key={spec.label} className="flex border-b border-gray-50 last:border-0">
            <div className="bg-blue-600 text-white text-[10px] font-bold uppercase px-3 py-2 w-32 flex-shrink-0 flex items-center leading-tight">
              {spec.label}
            </div>
            <div className="text-gray-700 text-xs px-3 py-2 flex items-center font-medium leading-tight">
              {spec.value}
            </div>
          </div>
        ))}
      </div>

      {/* Subcategories */}
      <div className="p-4 flex-1">
        {visibleSubs.map((sub) => (
          <div key={sub.title} className="mb-3 last:mb-0">
            <p className="text-[10px] font-bold uppercase tracking-widest text-orange-500 mb-1.5">
              {sub.title}
            </p>
            <div className="flex flex-wrap gap-1">
              {sub.types.map((t) => (
                <span
                  key={t}
                  className="bg-gray-100 text-gray-600 text-[10px] px-2 py-0.5 font-medium border border-gray-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}

        {product.subcategories.length > 2 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 flex items-center gap-1 text-orange-500 text-xs font-bold hover:text-orange-600 transition-colors"
          >
            {expanded ? (
              <><ChevronUp size={14} /> Show Less</>
            ) : (
              <><ChevronDown size={14} /> +{product.subcategories.length - 2} more sections</>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ProductsPage() {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All' ? catalogue : catalogue.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        title="Our"
        highlight="Products"
        subtitle="Proudly presenting a product range par excellence — precision led performance, every time."
        image={IMG_PIPES}
      />

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Intro banner */}
          <div className="bg-orange-500 text-white p-6 mb-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className="font-black text-xl uppercase">Our Products Speak The Global Language of Quality</p>
              <p className="text-orange-100 text-sm mt-1">Precision Led Performance Can Be Expected Every Time, All The Time.</p>
            </div>
            <Link
              to="/contact"
              className="flex-shrink-0 bg-white text-orange-500 hover:bg-orange-50 font-bold text-xs uppercase tracking-widest px-6 py-3 transition-colors flex items-center gap-2"
            >
              Request a Quote <ArrowRight size={14} />
            </Link>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-4">
            {FILTER_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-200 ${
                  active === cat
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-200'
                    : 'bg-white border-2 border-gray-200 text-gray-600 hover:border-orange-500 hover:text-orange-500'
                }`}
              >
                {cat}
                <span className="ml-1.5 text-[10px] opacity-60">
                  ({cat === 'All' ? catalogue.length : catalogue.filter((p) => p.category === cat).length})
                </span>
              </button>
            ))}
          </div>

          {/* Active category description */}
          {active !== 'All' && CATEGORY_DESC[active] && (
            <div className="mb-8 bg-white border-l-4 border-orange-500 px-5 py-3">
              <p className="text-gray-600 text-sm leading-relaxed">{CATEGORY_DESC[active]}</p>
            </div>
          )}

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 py-12 border-t border-gray-200">
            <p className="text-gray-500 text-sm mb-2 uppercase tracking-widest font-bold">Have a Project in Mind?</p>
            <h3 className="text-3xl font-black uppercase text-gray-900 mb-6">
              Let's Discuss Your <span className="text-blue-600">Requirements</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest text-sm px-8 py-4 transition-colors shadow-lg shadow-blue-200"
              >
                Contact Us <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+919723269427"
                className="inline-flex items-center gap-2 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold uppercase tracking-widest text-sm px-8 py-4 transition-all duration-200"
              >
                Call: +91 97232 69427
              </a>
            </div>
          </div>

        </div>
      </section>

      <IndustriesSection />
      <CertificationsSection />
    </>
  );
}
