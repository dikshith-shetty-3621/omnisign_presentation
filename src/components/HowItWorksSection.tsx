import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp, staggerContainer } from "../hooks/useAnimations";

const steps = [
  {
    icon: "📷",
    label: "Camera Input",
    desc: "Webcam captures live hand video feed at 30fps",
    color: "#06b6d4",
    glow: "rgba(6,182,212,0.4)",
  },
  {
    icon: "✋",
    label: "Hand Tracking",
    desc: "MediaPipe Hands detects and isolates the hand region",
    color: "#7c3aed",
    glow: "rgba(124,58,237,0.4)",
  },
  {
    icon: "📍",
    label: "Landmark Detection",
    desc: "21 key points mapped across fingers, palm, and wrist",
    color: "#a855f7",
    glow: "rgba(168,85,247,0.4)",
  },
  {
    icon: "🧠",
    label: "AI Model",
    desc: "Custom ML logic classifies gestures from landmark data",
    color: "#ec4899",
    glow: "rgba(236,72,153,0.4)",
  },
  {
    icon: "🗣️",
    label: "Speech Output",
    desc: "Web Speech API vocalizes the recognized ASL signs",
    color: "#f97316",
    glow: "rgba(249,115,22,0.4)",
  },
];

const StepCard = ({ step, index, inView }: { step: typeof steps[0]; index: number; inView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
    transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
    className="flex flex-col items-center text-center group"
  >
    {/* Icon circle */}
    <div className="relative mb-4">
      <div
        className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl relative z-10 transition-transform duration-300 group-hover:scale-110"
        style={{
          background: `linear-gradient(135deg, ${step.color}22, ${step.color}44)`,
          border: `1px solid ${step.color}44`,
          boxShadow: `0 0 20px ${step.glow}`,
        }}
      >
        {step.icon}
      </div>
      {/* Step number */}
      <div
        className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-black text-white z-20"
        style={{ background: step.color }}
      >
        {index + 1}
      </div>
    </div>

    {/* Label */}
    <h3 className="font-bold text-white text-sm mb-2" style={{ color: step.color }}>
      {step.label}
    </h3>

    {/* Desc */}
    <p className="text-white/40 text-xs leading-relaxed max-w-[130px]">{step.desc}</p>
  </motion.div>
);

const Arrow = ({ inView, delay }: { inView: boolean; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scaleX: 0 }}
    animate={inView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className="hidden lg:flex items-center justify-center flex-1"
    style={{ transformOrigin: "left" }}
  >
    <div className="relative flex items-center w-full">
      <div className="flex-1 h-px" style={{
        background: "linear-gradient(90deg, rgba(6,182,212,0.6), rgba(168,85,247,0.6))"
      }} />
      {/* Animated pulse */}
      <motion.div
        className="absolute w-3 h-3 rounded-full"
        style={{ background: "linear-gradient(135deg, #06b6d4, #a855f7)", left: "50%", marginLeft: "-6px" }}
        animate={{ x: ["-50%", "50%", "-50%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="text-purple-400 text-xl ml-1">›</div>
    </div>
  </motion.div>
);

const HowItWorksSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="relative py-28 overflow-hidden"
    >
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(168,85,247,0.08) 0%, transparent 60%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.span variants={fadeUp} className="text-purple-400 text-sm font-semibold tracking-widest uppercase">
            03 / How It Works
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-5xl sm:text-6xl font-black mt-4 mb-6">
            The <span className="gradient-text-purple-pink">Pipeline</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/50 text-lg max-w-xl mx-auto">
            From camera to conversation — OmniSign processes your signs in milliseconds
            through a seamless AI pipeline.
          </motion.p>
        </motion.div>

        {/* Pipeline — desktop */}
        <div className="flex items-start gap-2 lg:gap-4 mb-20">
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-center flex-1">
              <StepCard step={step} index={i} inView={inView} />
              {i < steps.length - 1 && <Arrow inView={inView} delay={i * 0.15 + 0.4} />}
            </div>
          ))}
        </div>

        {/* Pipeline — mobile vertical */}
        <div className="lg:hidden space-y-6 mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex items-center gap-5 glass rounded-2xl p-5"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${step.color}22, ${step.color}44)`,
                  border: `1px solid ${step.color}44`,
                }}
              >
                {step.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-black px-2 py-0.5 rounded-full text-white"
                    style={{ background: step.color }}>Step {i + 1}</span>
                  <h3 className="font-bold text-sm" style={{ color: step.color }}>{step.label}</h3>
                </div>
                <p className="text-white/50 text-xs leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom detail cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-3 gap-6"
        >
          {[
            { title: "30+ FPS", sub: "Real-time processing speed", icon: "⚡" },
            { title: "21 Points", sub: "Hand landmarks tracked per frame", icon: "📍" },
            { title: "< 50ms", sub: "End-to-end inference latency", icon: "🚀" },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="glass rounded-2xl p-6 text-center hover:border-purple-500/30 border border-transparent transition-all duration-300 hover:scale-105"
            >
              <span className="text-4xl block mb-3">{item.icon}</span>
              <p className="text-3xl font-black gradient-text-cyan-purple mb-1">{item.title}</p>
              <p className="text-white/40 text-sm">{item.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
