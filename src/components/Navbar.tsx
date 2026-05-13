import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Story", href: "#story" },
  { name: "Menu", href: "#menu" },
  { name: "Reservations", href: "#reservations" },
  { name: "Gallery", href: "#gallery" },
  { name: "Location", href: "#location" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(245, 245, 220, 0.4)", "rgba(245, 245, 220, 0.95)"]
  );
  
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(4px)", "blur(12px)"]
  );

  const textColor = "#2C1810"; // Constant for better visibility

  const borderBottom = useTransform(
    scrollY,
    [0, 100],
    ["rgba(44, 24, 16, 0.08)", "rgba(44, 24, 16, 0.15)"]
  );

  return (
    <motion.nav
      style={{ backgroundColor, backdropBlur, borderBottom: `1px solid ${borderBottom}` }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.a 
          href="/" 
          className="text-2xl font-serif font-bold tracking-tighter"
          style={{ color: textColor }}
        >
          STÖVCHEN
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              style={{ color: textColor }}
              className="text-sm font-medium tracking-wide uppercase hover:opacity-70 transition-opacity"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="bg-espresso text-cream px-6 py-2 rounded-full text-sm font-semibold tracking-wide uppercase shadow-lg shadow-espresso/20"
          >
            Book Now
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          style={{ color: "currentColor" }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-cream p-6 shadow-xl md:hidden flex flex-col space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-espresso text-lg font-serif"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};
