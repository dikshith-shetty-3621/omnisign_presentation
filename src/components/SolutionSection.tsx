import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp, staggerContainer, slideLeft, slideRight } from "../hooks/useAnimations";

const features = [
  {
    icon: "👁️",
    title: "Real-Time Detection",
    desc: "Captures hand gestures via webcam using MediaPipe at 30+ FPS",
  },
  {
    icon: "🧠",
    title: "AI Recognition",
    desc: "Identifies ASL signs using custom ML logic trained on hand landmarks",
  },
  {
    icon: "💬",
    title: "Phrase Builder",
    desc: "Combines individual signs into full words and sentences intelligently",
  },
  {
    icon: "🗣️",
    title: "Speech Output",
    desc: "Converts recognized text to natural speech using Web Speech API",
  },
];

const MockupUI = () => (
  <div className="relative w-full max-w-md mx-auto">
    {/* Outer glow */}
    <div className="absolute inset-0 rounded-3xl blur-2xl opacity-30"
      style={{ background: "linear-gradient(135deg, #06b6d4, #a855f7)" }} />

    {/* Main mockup */}
    <div className="relative glass-dark rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
      {/* Top bar */}
      <div className="flex items-center gap-2 px-5 py-4 border-b border-white/5"
        style={{ background: "rgba(255,255,255,0.03)" }}>
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-3 text-white/30 text-xs font-mono">omnisign.app</span>
      </div>

      {/* Camera preview */}
      <div className="relative m-4 rounded-2xl overflow-hidden aspect-video"
        style={{ background: "linear-gradient(135deg, #0a0a1a, #0d0320)" }}>
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }} />

        {/* Hand silhouette illustration */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg viewBox="0 0 200 220" className="w-36 h-36 opacity-60" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Palm */}
            <ellipse cx="100" cy="150" rx="55" ry="55" fill="url(#handGrad)" opacity="0.7"/>
            {/* Thumb */}
            <ellipse cx="40" cy="130" rx="14" ry="40" fill="url(#handGrad)" opacity="0.7" transform="rotate(-30 40 130)"/>
            {/* Index */}
            <ellipse cx="65" cy="70" rx="12" ry="50" fill="url(#handGrad)" opacity="0.7"/>
            {/* Middle */}
            <ellipse cx="95" cy="55" rx="13" ry="55" fill="url(#handGrad)" opacity="0.7"/>
            {/* Ring */}
            <ellipse cx="126" cy="65" rx="12" ry="48" fill="url(#handGrad)" opacity="0.7"/>
            {/* Pinky */}
            <ellipse cx="153" cy="85" rx="10" ry="38" fill="url(#handGrad)" opacity="0.7"/>
            <defs>
              <linearGradient id="handGrad" x1="0" y1="0" x2="200" y2="200">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Background image */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('/images/hand-gesture-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Landmark dots */}
        {[
          { x: "32%", y: "30%", size: 4, color: "#06b6d4" },
          { x: "47%", y: "15%", size: 4, color: "#a855f7" },
          { x: "62%", y: "10%", size: 4, color: "#06b6d4" },
          { x: "76%", y: "17%", size: 4, color: "#ec4899" },
          { x: "42%", y: "55%", size: 6, color: "#06b6d4" },
          { x: "57%", y: "55%", size: 6, color: "#a855f7" },
          { x: "70%", y: "58%", size: 6, color: "#06b6d4" },
        ].map((dot, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: dot.x, top: dot.y, width: dot.size, height: dot.size,
              background: dot.color,
              boxShadow: `0 0 8px ${dot.color}`,
            }}
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}

        {/* Detection badge */}
        <motion.div
          className="absolute bottom-3 left-3 flex items-center gap-2 glass rounded-full px-3 py-1.5"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-cyan-400 text-xs font-mono font-bold">DETECTING...</span>
        </motion.div>
      </div>

      {/* Text output */}
      <div className="px-5 pb-5">
        <div className="glass rounded-2xl p-4">
          <p className="text-white/40 text-xs mb-2 uppercase tracking-wider">Recognized Sign</p>
          <motion.p
            className="text-3xl font-black gradient-text-cyan-purple"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            HELLO
          </motion.p>
          <div className="flex items-center gap-3 mt-3">
            <div className="flex-1 h-1.5 rounded-full overflow-hidden"
              style={{ background: "rgba(255,255,255,0.1)" }}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg, #06b6d4, #a855f7)" }}
                animate={{ width: ["0%", "94%"] }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
            <span className="text-cyan-400 text-xs font-mono">94%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SolutionSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="solution"
      ref={ref}
      className="relative min-h-screen flex items-center py-24 overflow-hidden"
    >
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(6,182,212,0.07) 0%, transparent 60%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
            02 / Our Solution
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-5xl sm:text-6xl font-black mt-4 mb-6">
            Introducing{" "}
            <span className="gradient-text-cyan-purple glow-cyan">OmniSign</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
            A fully browser-based AI system that translates American Sign Language gestures
            into spoken words — instantly, privately, and for free.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Feature list */}
          <motion.div variants={slideLeft} className="space-y-5">
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className="flex items-start gap-5 glass rounded-2xl p-5 group hover:border-cyan-500/30 hover:scale-[1.02] transition-all duration-300 border border-transparent"
              >
                <span className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {f.icon}
                </span>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{f.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
                </div>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-cyan-400 text-xl">→</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mockup */}
          <motion.div variants={slideRight}>
            <MockupUI />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
