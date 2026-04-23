import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp, staggerContainer } from "../hooks/useAnimations";

const features = [
  {
    icon: "⚡",
    title: "Real-Time Detection",
    desc: "Sub-50ms gesture recognition running entirely in the browser. No lag. No delay. Just instant communication.",
    gradient: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-500/20",
    glow: "#06b6d4",
    tag: "Core",
  },
  {
    icon: "🔒",
    title: "100% Privacy",
    desc: "Everything runs in your browser. Zero data sent to any server. Your conversations stay completely private.",
    gradient: "from-purple-500/20 to-purple-500/5",
    border: "border-purple-500/20",
    glow: "#a855f7",
    tag: "Privacy",
  },
  {
    icon: "🧠",
    title: "Phrase Builder",
    desc: "Intelligently combines individual signs into complete phrases and sentences — not just single letters.",
    gradient: "from-pink-500/20 to-pink-500/5",
    border: "border-pink-500/20",
    glow: "#ec4899",
    tag: "Smart",
  },
  {
    icon: "🗣️",
    title: "Text-to-Speech",
    desc: "Natural voice synthesis via Web Speech API. Recognized signs are spoken aloud in real-time.",
    gradient: "from-violet-500/20 to-violet-500/5",
    border: "border-violet-500/20",
    glow: "#7c3aed",
    tag: "Output",
  },
  {
    icon: "📚",
    title: "Learn ASL",
    desc: "Built-in learning mode lets beginners practice signs with instant feedback and accuracy scores.",
    gradient: "from-teal-500/20 to-teal-500/5",
    border: "border-teal-500/20",
    glow: "#14b8a6",
    tag: "Education",
  },
  {
    icon: "🌐",
    title: "Works Offline",
    desc: "No internet required after loading. Use OmniSign anywhere — classrooms, hospitals, or outdoors.",
    gradient: "from-orange-500/20 to-orange-500/5",
    border: "border-orange-500/20",
    glow: "#f97316",
    tag: "Accessible",
  },
];

const FeatureCard = ({ feature, index, inView }: { feature: typeof features[0]; index: number; inView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.95 }}
    animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    className={`relative group rounded-2xl p-6 border ${feature.border} bg-gradient-to-br ${feature.gradient} backdrop-blur-sm overflow-hidden cursor-default`}
    style={{ background: "rgba(255,255,255,0.02)" }}
  >
    {/* Hover glow */}
    <div
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"
      style={{ boxShadow: `inset 0 0 40px ${feature.glow}11` }}
    />

    {/* Gradient corner decoration */}
    <div
      className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-xl"
      style={{ background: feature.glow }}
    />

    {/* Tag */}
    <div className="flex items-center justify-between mb-4">
      <span
        className="text-xs font-semibold px-2.5 py-1 rounded-full border"
        style={{ color: feature.glow, borderColor: `${feature.glow}44`, background: `${feature.glow}11` }}
      >
        {feature.tag}
      </span>
      <motion.span
        className="text-3xl group-hover:scale-110 transition-transform duration-300 block"
      >
        {feature.icon}
      </motion.span>
    </div>

    {/* Content */}
    <h3 className="text-white font-bold text-lg mb-3 group-hover:translate-x-1 transition-transform duration-300">
      {feature.title}
    </h3>
    <p className="text-white/50 text-sm leading-relaxed">{feature.desc}</p>

    {/* Bottom border accent */}
    <div
      className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{ background: `linear-gradient(90deg, transparent, ${feature.glow}, transparent)` }}
    />
  </motion.div>
);

const FeaturesSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="features"
      ref={ref}
      className="relative py-28 overflow-hidden"
    >
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(6,182,212,0.06) 0%, transparent 60%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
            04 / Key Features
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-5xl sm:text-6xl font-black mt-4 mb-6">
            Built for <span className="gradient-text-cyan-purple">Everyone</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/50 text-lg max-w-xl mx-auto">
            Six powerful capabilities that make OmniSign the most accessible,
            privacy-first ASL translation tool available.
          </motion.p>
        </motion.div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
