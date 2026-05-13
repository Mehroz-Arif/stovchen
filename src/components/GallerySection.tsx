import { motion } from "motion/react";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2670&auto=format&fit=crop",
    title: "The Heritage Bar",
    size: "col-span-2 row-span-2"
  },
  {
    url: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2570&auto=format&fit=crop",
    title: "Daily Pour",
    size: "col-span-1 row-span-1"
  },
  {
    url: "https://images.unsplash.com/photo-1463797221720-6b07e6426c24?q=80&w=2671&auto=format&fit=crop",
    title: "Quiet Corners",
    size: "col-span-1 row-span-2"
  },
  {
    url: "https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?q=80&w=2670&auto=format&fit=crop",
    title: "Morning Light",
    size: "col-span-1 row-span-1"
  },
  {
    url: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2671&auto=format&fit=crop",
    title: "Berlin Rhythms",
    size: "col-span-2 row-span-1"
  }
];

export const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between space-y-6">
          <div>
            <h2 className="text-5xl md:text-7xl font-serif text-espresso mb-4">Captures of Stövchen.</h2>
            <p className="text-espresso/60 italic font-light">A visual journal of our daily rituals and curated spaces.</p>
          </div>
          <button className="text-burnt uppercase tracking-widest font-bold text-sm border-b-2 border-burnt/20 pb-2 hover:border-burnt transition-all">
            Follow our Instagram
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-4 md:gap-6 h-[800px]">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative overflow-hidden rounded-3xl group ${img.size}`}
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-espresso/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <h4 className="text-cream text-2xl font-serif">{img.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
