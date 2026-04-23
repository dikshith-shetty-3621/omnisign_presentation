import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp, staggerContainer } from "../hooks/useAnimations";

const FinalSection = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      id="final"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center py-28 overflow-hidden"
    >
      {/* Dramatic radial glow */}
      <div className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 50% 50%, rgba(168,85,247,0.2) 0%, rgba(6,182,212,0.08) 30%, transparent 70%)
          `
        }} />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
        }}
      />

      {/* Orbiting circles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[300, 450, 600].map((size, i) => (
          <motion.div
            key={size}
            className="absolute rounded-full border"
            style={{
              width: size,
              height: size,
              borderColor: `rgba(168,85,247,${0.08 - i * 0.02})`,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20 + i * 10, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Label */}
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-flex items-center gap-2 text-cyan-400 text-sm font-semibold tracking-widest uppercase glass rounded-full px-5 py-2 border border-cyan-500/20">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              10 / The Future of Communication
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            variants={fadeUp}
            className="text-5xl sm:text-7xl lg:text-8xl font-black leading-none mb-8"
          >
            <span className="block text-white">Every Hand.</span>
            <span
              className="block gradient-text-cyan-purple"
              style={{ textShadow: "0 0 80px rgba(6,182,212,0.4)" }}
            >
              Every Voice.
            </span>
            <span className="block text-white">Every Word.</span>
          </motion.h2>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="text-xl sm:text-2xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-12 font-light"
          >
            OmniSign is more than a hackathon project.
            It's a commitment — to a world where communication has{" "}
            <span className="text-white font-medium">no barriers</span>,
            no fees, and no limits.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => document.querySelector("#hero")?.scrollIntoView({ behavior: "smooth" })}
              className="px-10 py-4 rounded-xl font-bold text-white text-base transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #06b6d4, #a855f7, #ec4899)",
                backgroundSize: "200% 200%",
                boxShadow: "0 0 40px rgba(168,85,247,0.4), 0 0 80px rgba(6,182,212,0.2)",
              }}
            >
              ↑ Back to Top
            </button>
            <button
              onClick={() => document.querySelector("#how-it-works")?.scrollIntoView({ behavior: "smooth" })}
              className="px-10 py-4 rounded-xl font-bold text-white/70 text-base glass border border-white/10 hover:border-white/30 hover:text-white transition-all duration-300 hover:scale-105"
            >
              See How It Works
            </button>
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={fadeUp}
            className="w-px h-12 mx-auto mb-8"
            style={{ background: "linear-gradient(to bottom, rgba(168,85,247,0.6), transparent)" }}
          />

          {/* Footer info */}
          <motion.div variants={fadeUp} className="space-y-3">
            <p className="text-white/30 text-sm">
              Presented at{" "}
              <span className="text-white/60 font-medium">KalpAIthon 2.0</span>
              {" "}·{" "}
              <span className="text-white/60 font-medium">Kalpataru Institute of Technology, Tiptur</span>
            </p>
            <p className="gradient-text-cyan-purple font-black text-2xl tracking-tight">
              OmniSign — Sign Every Word.
            </p>
            <p className="text-white/25 text-xs tracking-widest uppercase">
              Team Lead: Diganth N · Members: Yashas A · Diganth A R · Vijeth HJ
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom edge glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.5), rgba(168,85,247,0.5), transparent)" }}
      />
    </section>
  );
};

export default FinalSection;
