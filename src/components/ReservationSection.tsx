import { motion } from "motion/react";
import { Calendar, Clock, Users, ChevronRight } from "lucide-react";

export const ReservationSection = () => {
  return (
    <section id="reservations" className="py-24 bg-espresso text-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-serif mb-8">Secure Your <br /> Cozy Corner.</h2>
          <p className="text-cream/70 text-lg font-light leading-relaxed mb-12 max-w-md">
            Whether for a morning quiet reflect or an afternoon gathering, we keep our most cherished spots reserved for those who seek them.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-burnt" />
              </div>
              <div>
                <h5 className="font-serif text-xl mb-1">Morning Sittings</h5>
                <p className="text-sm text-cream/50 uppercase tracking-widest font-semibold italic">07:00 AM — 11:30 AM</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-burnt" />
              </div>
              <div>
                <h5 className="font-serif text-xl mb-1">Group Rituals</h5>
                <p className="text-sm text-cream/50 uppercase tracking-widest font-semibold italic">Up to 12 Guests</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-cream p-10 rounded-3xl shadow-2xl shadow-black/40"
        >
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-espresso/40 ml-1">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-espresso/30" />
                  <input 
                    type="date" 
                    className="w-full bg-white border border-espresso/10 rounded-xl px-12 py-4 text-espresso focus:ring-2 focus:ring-burnt outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-espresso/40 ml-1">Time</label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-espresso/30" />
                  <input 
                    type="time" 
                    className="w-full bg-white border border-espresso/10 rounded-xl px-12 py-4 text-espresso focus:ring-2 focus:ring-burnt outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-espresso/40 ml-1">Guest Count</label>
              <div className="relative">
                <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-espresso/30" />
                <select className="w-full bg-white border border-espresso/10 rounded-xl px-12 py-4 text-espresso focus:ring-2 focus:ring-burnt outline-none appearance-none transition-all">
                  <option>2 Guests</option>
                  <option>4 Guests</option>
                  <option>6 Guests</option>
                  <option>Private Event</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-espresso/40 ml-1">Special Occasion</label>
              <textarea 
                placeholder="Mention allergies or special requests..."
                rows={3}
                className="w-full bg-white border border-espresso/10 rounded-xl px-6 py-4 text-espresso focus:ring-2 focus:ring-burnt outline-none transition-all resize-none"
              />
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-espresso text-cream py-5 rounded-full font-bold uppercase tracking-widest flex items-center justify-center group"
            >
              <span>Confirm Inquiry</span>
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
