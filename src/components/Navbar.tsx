import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Tech", href: "#tech" },
  { label: "Impact", href: "#impact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-dark border-b border-white/5 py-3"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleNav("#hero")} className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #06b6d4, #a855f7)" }}>
            <span className="text-white font-black text-sm">OS</span>
          </div>
          <span className="font-bold text-white tracking-tight">
            Omni<span className="gradient-text-cyan-purple">Sign</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.href)}
              className="px-3 py-1.5 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/5 transition-all duration-200 font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Badge */}
        <div className="hidden lg:flex items-center gap-2">
          <div className="glass rounded-full px-4 py-1.5 text-xs font-semibold gradient-text-cyan-purple border border-cyan-500/20">
            KalpAIthon 2.0
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden w-8 h-8 flex flex-col justify-center gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-dark border-t border-white/5 mt-2"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNav(item.href)}
                  className="text-left px-4 py-3 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200 font-medium text-sm"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
