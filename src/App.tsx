/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { MenuSection } from "./components/MenuSection";
import { ReservationSection } from "./components/ReservationSection";
import { GallerySection } from "./components/GallerySection";
import { Footer } from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative overflow-x-hidden selection:bg-burnt selection:text-cream">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-burnt z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        {/* Story Snippet */}
        <section id="story" className="py-16 md:py-24 bg-cream text-center px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-burnt mb-8 block font-sans">Our Shared Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-serif text-espresso leading-tight mb-12">
              The Art of Slow Brewing <br /> 
              is a <span className="italic">Return to Form.</span>
            </h2>
            <p className="text-espresso/70 text-lg md:text-xl font-light leading-relaxed mb-12 italic">
              "We believe a café should be more than a place for caffeine—it's a sanctuary where time recalibrates. In 1984, we started with a single brass stövchen and a commitment to patience. Today, that same stövchen sits on our bar, reminding us that quality requires quiet."
            </p>
            <div className="flex items-center justify-center space-x-4">
              <span className="w-12 h-px bg-espresso/20" />
              <p className="text-xs font-bold uppercase tracking-widest text-espresso/40">Klaus & Greta, Founders</p>
              <span className="w-12 h-px bg-espresso/20" />
            </div>
          </motion.div>
        </section>

        <MenuSection />
        
        <ReservationSection />
        
        <GallerySection />

        {/* Location / Contact */}
        <section id="location" className="py-24 bg-vintage/30">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 border-y border-espresso/5 py-16">
            <div className="space-y-12">
              <div>
                <h3 className="text-4xl font-serif mb-6">Find the Sanctuary.</h3>
                <p className="text-espresso/60 max-w-sm">Nestled in the heart of Charlottenburg, just steps away from the historic Savignyplatz.</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h6 className="text-[10px] uppercase font-bold tracking-widest text-burnt mb-2">Address</h6>
                  <p className="text-xl font-serif">Knesebeckstraße 42, <br />10623 Berlin, Germany</p>
                </div>
                <div>
                  <h6 className="text-[10px] uppercase font-bold tracking-widest text-burnt mb-2">Inquiries</h6>
                  <p className="text-xl font-serif">hello@stovchen-berlin.de <br />+49 30 123 456 78</p>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-3xl overflow-hidden aspect-video md:aspect-auto h-full grayscale hover:grayscale-0 transition-all duration-700">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.188373307223!2d13.319082577439167!3d52.505494137272895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a850e047468169%3A0xc6dca35316335804!2sSavignyplatz!5e0!3m2!1sen!2sde!4v1700000000000!5m2!1sen!2sde" 
                className="w-full h-full border-0"
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
               />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

