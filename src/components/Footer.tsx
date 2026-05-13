import { motion } from "motion/react";
import { Instagram, Facebook, Twitter, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-espresso text-cream/80 pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <h3 className="text-4xl font-serif text-cream mb-8 tracking-tighter">STÖVCHEN</h3>
            <p className="max-w-xs text-cream/60 leading-relaxed mb-10">
              Modern Heritage Café crafting soulful experiences through heirloom brewing and artisanal baking.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-burnt transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-burnt transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-burnt transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h5 className="text-cream font-bold uppercase tracking-widest text-xs mb-8">Navigation</h5>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-cream transition-colors">Our Philosophy</a></li>
              <li><a href="#menu" className="hover:text-cream transition-colors">Seasonal Menu</a></li>
              <li><a href="#gallery" className="hover:text-cream transition-colors">Visual Gallery</a></li>
              <li><a href="#reservations" className="hover:text-cream transition-colors">Private Events</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-cream font-bold uppercase tracking-widest text-xs mb-8">Journal</h5>
            <p className="text-sm italic mb-6 pr-4">Join our monthly newsletter for seasonal releases and brewing workshops.</p>
            <form className="flex flex-col space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full bg-cream/5 border border-cream/10 rounded-full px-6 py-4 outline-none focus:border-burnt/50 transition-all text-sm placeholder:text-cream/30 text-cream"
              />
              <button className="w-full bg-burnt hover:bg-burnt/80 text-cream py-4 rounded-full text-[10px] font-bold uppercase tracking-widest transition-colors shadow-lg shadow-burnt/10">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-cream/10">
          <p className="text-[10px] uppercase tracking-widest font-bold text-cream/40 mb-8 md:mb-0">
            © 2026 Café Stövchen Berlin. All rights reserved. Design by Modern Heritage.
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center space-x-3 text-xs uppercase tracking-widest font-bold text-cream/60 hover:text-cream transition-all"
          >
            <span>Back to top</span>
            <div className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center group-hover:bg-burnt group-hover:border-burnt transition-all">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
