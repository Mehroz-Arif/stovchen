import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const menuItems = {
  Coffee: [
    { name: "Single Origin Batch", price: "$4.5", desc: "Ethiopian heirloom, natural process" },
    { name: "Flat White", price: "$5.0", desc: "Silky steamed milk over house blend" },
    { name: "V60 Hand Pour", price: "$7.0", desc: "Rotating seasonal micro-lots" },
    { name: "Espresso Tonic", price: "$6.5", desc: "Double shot, premium tonic, rosemary flare" },
  ],
  Bakery: [
    { name: "Classic Croissant", price: "$4.0", desc: "72-hour cultured butter dough" },
    { name: "Plum Stövchen", price: "$6.0", desc: "Traditional spiced tart with hazelnut krantz" },
    { name: "Sourdough Batard", price: "$9.0", desc: "Heirloom grain, overnight ferment" },
    { name: "Cinnamon Twist", price: "$5.5", desc: "Brioche base, Ceylon cinnamon sugar" },
  ],
  Breakfast: [
    { name: "Stövchen Bowl", price: "$14.0", desc: "Ancient grains, soft egg, miso butter kale" },
    { name: "Smoked Trout Bagel", price: "$16.5", desc: "Juniper cured, caper cream, pickled red onion" },
    { name: "Avocado & Heritage Seeds", price: "$15.0", desc: "Toasted miche, radish silk, dukka" },
    { name: "Baked Eggs Shaksuka", price: "$18.0", desc: "Heirloom tomato, spiced peppers, goat feta" },
  ],
};

const categoryImages = {
  Coffee: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2574&auto=format&fit=crop",
  Bakery: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2672&auto=format&fit=crop",
  Breakfast: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=2670&auto=format&fit=crop",
}

export const MenuSection = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof menuItems>("Coffee");

  return (
    <section id="menu" className="pt-12 pb-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-espresso text-5xl md:text-7xl font-serif mb-6"
          >
            The Daily Edition
          </motion.h2>
          <div className="w-24 h-px bg-burnt mx-auto mb-10" />
          
          <div className="flex justify-center space-x-4 md:space-x-8">
            {(Object.keys(menuItems) as Array<keyof typeof menuItems>).map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`text-sm md:text-lg font-serif uppercase tracking-widest transition-all ${
                  activeTab === category ? "text-burnt border-b border-burnt pb-1" : "text-espresso/40 hover:text-espresso"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            key={activeTab + "img"}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src={categoryImages[activeTab]} 
              alt={activeTab}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-espresso/10 mix-blend-multiply" />
          </motion.div>

          <div className="space-y-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid gap-10"
              >
                {menuItems[activeTab].map((item) => (
                  <div key={item.name} className="group cursor-default">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="text-2xl font-serif font-bold text-espresso group-hover:text-burnt transition-colors">
                        {item.name}
                      </h4>
                      <div className="flex-grow mx-4 border-b border-dashed border-espresso/20 group-hover:border-burnt/20" />
                      <span className="text-xl font-serif text-espresso/60">{item.price}</span>
                    </div>
                    <p className="text-espresso/60 font-light italic">{item.desc}</p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            <motion.div 
              whileHover={{ x: 10 }}
              className="pt-8 border-t border-espresso/10"
            >
              <a href="#full-menu" className="group flex items-center space-x-4 text-burnt font-bold uppercase tracking-widest text-sm">
                <span>View Full Seasonal Menu</span>
                <div className="w-8 h-px bg-burnt group-hover:w-12 transition-all" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
