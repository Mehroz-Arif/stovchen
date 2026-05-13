import { motion } from "motion/react";

export const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] bg-cream flex items-center overflow-hidden pt-20">
      {/* Decorative Background Text - Refined for mobile visibility */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none w-full text-center">
        <h1 className="text-[20vw] md:text-[25vw] font-serif font-black text-espresso/[0.02] leading-none">
          STÖVCHEN
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:grid md:grid-cols-12 gap-12 md:gap-16 items-center relative z-10 py-12 md:py-0">
        {/* Left: Text Content */}
        <div className="md:col-span-7 lg:col-span-6 text-center md:text-left order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center md:justify-start space-x-4 mb-6 md:mb-8">
              <div className="w-8 md:w-12 h-px bg-burnt" />
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-burnt">
                Berlin's Heritage Roastery
              </span>
            </div>

            <h1 className="text-espresso text-5xl sm:text-6xl lg:text-8xl font-serif leading-[1.1] md:leading-[0.95] mb-6 md:mb-8 tracking-tighter">
              A Living <br className="hidden sm:block" />
              Legacy of <br className="hidden sm:block" />
              <span className="italic font-normal text-burnt pr-4">Patience.</span>
            </h1>

            <p className="text-espresso/60 text-base md:text-xl font-light leading-relaxed mb-8 md:mb-12 max-w-lg mx-auto md:mx-0">
              We bridge the gap between 1980s craftsmanship and modern minimalism. Our café isn't just about coffee; it's a dedicated space for the art of the pause.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-espresso text-cream px-10 py-4 md:py-5 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase transition-all shadow-xl shadow-espresso/10"
              >
                Inquire for Table
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-transparent text-espresso border border-espresso/10 px-10 py-4 md:py-5 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase hover:bg-espresso/5 transition-all"
              >
                Our Philosophy
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Right: Architectural Imagery Grid - Fluid spacing for mobile */}
        <div className="md:col-span-5 lg:col-span-6 relative w-full h-[400px] sm:h-[500px] md:h-[700px] lg:h-[800px] order-1 md:order-2">
          {/* Main Vertical Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="absolute right-0 top-0 w-[85%] h-[90%] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl z-10"
          >
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2694&auto=format&fit=crop"
              alt="Café Architecture"
              className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>

          {/* Overlapping Secondary Image - Adjusted for mobile */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 bottom-[10%] w-[55%] aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-4 md:border-8 border-cream z-20"
          >
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2670&auto=format&fit=crop"
              alt="Brewing Detail"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Floating Est Badge - Scaled for mobile */}
          <motion.div
            initial={{ opacity: 0, rotate: -15 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -right-2 bottom-[15%] md:bottom-20 bg-burnt text-cream w-16 h-16 md:w-24 md:h-24 rounded-full flex flex-col items-center justify-center shadow-xl z-30"
          >
            <span className="text-[8px] md:text-[10px] font-bold tracking-widest uppercase">Est.</span>
            <span className="text-base md:text-xl font-serif italic">1984</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
