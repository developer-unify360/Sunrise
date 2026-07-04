import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const posts = [
  {
    title: 'The Future of High-Strength Steel in Sustainable Construction',
    excerpt: 'New low-carbon steel alloys are redefining what is possible in green building design while maintaining structural integrity.',
    category: 'Industry Insights',
    author: 'Maria Kovacs',
    date: 'April 15, 2024',
    image: 'https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
  },
  {
    title: 'How CNC Technology Is Transforming Precision Manufacturing',
    excerpt: 'Five-axis machining centers are enabling geometries that were impossible a decade ago, opening new frontiers in aerospace and energy.',
    category: 'Technology',
    author: 'James Whitfield',
    date: 'March 28, 2024',
    image: 'https://images.pexels.com/photos/3862619/pexels-photo-3862619.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  },
  {
    title: 'Understanding ISO 9001: What Certification Means For You',
    excerpt: 'A breakdown of what ISO 9001:2015 certification requires and why it matters for procurement decisions in industrial projects.',
    category: 'Quality',
    author: 'Sandra Reyes',
    date: 'March 10, 2024',
    image: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="bg-neutral-900 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-sky-600" />
              <span className="text-sky-600 text-xs font-bold uppercase tracking-[0.3em]">News & Insights</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight">
              Latest from <span className="text-sky-600">The Blog</span>
            </h2>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-neutral-400 hover:text-sky-600 transition-colors">
            All Articles <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 group relative overflow-hidden bg-neutral-950">
            <div className="relative h-72 overflow-hidden">
              <img
                src={posts[0].image}
                alt={posts[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
              <div className="absolute top-4 left-4 bg-sky-600 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                {posts[0].category}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 text-xs text-neutral-500 mb-3">
                <span className="flex items-center gap-1"><Calendar size={11} className="text-sky-600" />{posts[0].date}</span>
                <span className="flex items-center gap-1"><User size={11} className="text-sky-600" />{posts[0].author}</span>
              </div>
              <h3 className="text-white font-bold text-xl uppercase tracking-wide leading-tight mb-3 group-hover:text-sky-300 transition-colors">
                {posts[0].title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">{posts[0].excerpt}</p>
              <a href="#" className="inline-flex items-center gap-2 text-sky-600 text-xs font-bold uppercase tracking-widest hover:gap-3 transition-all">
                Read Article <ArrowRight size={12} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            {posts.slice(1).map(post => (
              <div key={post.title} className="group bg-neutral-950 overflow-hidden flex flex-col sm:flex-row lg:flex-col xl:flex-row">
                <div className="sm:w-36 lg:w-full xl:w-36 h-40 sm:h-auto lg:h-44 xl:h-auto shrink-0 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Tag size={9} className="text-sky-600" />
                    <span className="text-sky-600 text-[10px] font-bold uppercase tracking-widest">{post.category}</span>
                  </div>
                  <h3 className="text-white font-bold text-sm uppercase tracking-wide leading-tight mb-2 group-hover:text-sky-400 transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-3 text-[10px] text-neutral-500">
                    <span className="flex items-center gap-1"><Calendar size={9} className="text-sky-600" />{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
