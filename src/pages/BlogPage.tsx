import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import PageHero from '../components/PageHero';

const posts = [
  {
    title: 'The Future of High-Strength Steel in Sustainable Construction',
    excerpt: 'New low-carbon steel alloys are redefining what is possible in green building design while maintaining full structural integrity for demanding applications.',
    category: 'Industry Insights',
    author: 'Maria Kovacs',
    date: 'April 15, 2024',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
  },
  {
    title: 'How CNC Technology Is Transforming Precision Manufacturing',
    excerpt: 'Five-axis machining centers are enabling geometries that were impossible a decade ago, opening new frontiers in aerospace and energy sectors.',
    category: 'Technology',
    author: 'James Whitfield',
    date: 'March 28, 2024',
    readTime: '4 min read',
    image: 'https://images.pexels.com/photos/3862619/pexels-photo-3862619.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  },
  {
    title: 'Understanding ISO 9001: What Certification Means For You',
    excerpt: 'A breakdown of what ISO 9001:2015 certification requires and why it matters for procurement decisions in industrial projects.',
    category: 'Quality',
    author: 'Sandra Reyes',
    date: 'March 10, 2024',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  },
  {
    title: 'Corrosion Protection: Choosing the Right Surface Treatment',
    excerpt: 'Hot-dip galvanizing, thermal spray, and epoxy paint — we compare the leading surface protection systems for structural steel in aggressive environments.',
    category: 'Technical',
    author: 'Robert Franco',
    date: 'February 22, 2024',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/2381463/pexels-photo-2381463.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  },
  {
    title: 'Steel Fabrication for Offshore: Key Design Considerations',
    excerpt: 'Designing and fabricating steel for offshore environments requires a different approach to material selection, welding, and testing than onshore work.',
    category: 'Industry Insights',
    author: 'Maria Kovacs',
    date: 'February 5, 2024',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/190537/pexels-photo-190537.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  },
  {
    title: 'The Role of NDT in Modern Steel Fabrication Quality Control',
    excerpt: 'Non-destructive testing is the backbone of quality assurance in structural steel. Here is how we use UT, MT, and RT at every stage of production.',
    category: 'Quality',
    author: 'Sandra Reyes',
    date: 'January 18, 2024',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/1267338/Hero section.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  },
];

const categories = ['All', 'Industry Insights', 'Technology', 'Quality', 'Technical'];

export default function BlogPage() {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      <PageHero
        title="News &"
        highlight="Insights"
        subtitle="Industry news, technical articles, and manufacturing insights from the Franco Steel Factory team."
        image="https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="bg-neutral-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Featured post */}
          <div className="group grid lg:grid-cols-2 gap-0 bg-neutral-900 mb-12 overflow-hidden">
            <div className="relative h-72 lg:h-auto overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-neutral-900/20" />
              <div className="absolute top-4 left-4 bg-orange-500 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                Featured
              </div>
            </div>
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <Tag size={10} className="text-orange-500" />
                <span className="text-orange-500 text-[10px] font-bold uppercase tracking-widest">{featured.category}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wide leading-tight mb-4 group-hover:text-orange-500 transition-colors">
                {featured.title}
              </h2>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-neutral-500 mb-6">
                <span className="flex items-center gap-1"><User size={10} className="text-orange-500" />{featured.author}</span>
                <span className="flex items-center gap-1"><Calendar size={10} className="text-orange-500" />{featured.date}</span>
                <span>{featured.readTime}</span>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-orange-500 text-xs font-bold uppercase tracking-widest hover:gap-3 transition-all">
                Read Full Article <ArrowRight size={12} />
              </a>
            </div>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                className="px-4 py-2 text-xs font-bold uppercase tracking-widest bg-neutral-900 border border-neutral-700 text-neutral-400 hover:border-orange-500 hover:text-orange-500 transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Post grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map(post => (
              <div key={post.title} className="group bg-neutral-900 overflow-hidden">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
                  <div className="absolute top-3 left-3 bg-orange-500 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-white font-bold text-base uppercase tracking-wide leading-tight mb-3 group-hover:text-orange-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-[10px] text-neutral-500 pt-3 border-t border-neutral-800">
                    <span className="flex items-center gap-1"><Calendar size={9} className="text-orange-500" />{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
