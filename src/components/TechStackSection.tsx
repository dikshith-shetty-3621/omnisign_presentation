import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp, staggerContainer } from "../hooks/useAnimations";

const techs = [
  {
    name: "MediaPipe Hands",
    role: "Hand Tracking & Landmark Detection",
    logo: "🤚",
    color: "#06b6d4",
    desc: "Google's production-ready ML framework for high-fidelity hand tracking with 21 3D landmarks",
  },
  {
    name: "JavaScript",
    role: "Core Application Logic",
    logo: "JS",
    color: "#f7df1e",
    desc: "Vanilla JS powers the gesture classification logic and real-time processing pipeline",
  },
  {
    name: "Web Speech API",
    role: "Text-to-Speech Engine",
    logo: "🎙️",
    color: "#a855f7",
    desc: "Browser-native speech synthesis API converts recognized signs to natural-sounding voice output",
  },
  {
    name: "ML Classification",
    role: "AI Gesture Recognition",
    logo: "🧠",
    color: "#ec4899",
    desc: "Custom ML logic trained on hand landmark vectors to classify ASL gestures with high accuracy",
  },
  {
    name: "WebRTC / WebCam",
    role: "Camera Interface",
    logo: "📹",
    color: "#14b8a6",
    desc: "Browser camera API provides 30fps live video feed directly — no third-party plugins needed",
  },
  {
    name: "HTML / CSS",
    role: "Responsive UI",
    logo: "🎨",
    color: "#f97316",
    desc: "Clean, accessible UI built with pure HTML and CSS — runs on any modern browser",
  },
];

const architecture = [
  { layer: "Presentation Layer", tech: "HTML + CSS + JS", color: "#06b6d4" },
  { layer: "Vision Layer", tech: "MediaPipe Hands SDK", color: "#7c3aed" },
  { layer: "Intelligence Layer", tech: "Custom ML Logic", color: "#a855f7" },
  { layer: "Output Layer", tech: "Web Speech API", color: "#ec4899" },
];

const TechStackSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="tech"
      ref={ref}
      className="relative py-28 overflow-hidden"
    >
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(124,58,237,0.08) 0%, transparent 60%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} className="text-purple-400 text-sm font-semibold tracking-widest uppercase">
            05 / Tech Stack
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-5xl sm:text-6xl font-black mt-4 mb-6">
            Powered by the{" "}
            <span className="gradient-text-purple-pink">Right Tools</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/50 text-lg max-w-xl mx-auto">
            Carefully chosen technologies that enable real-time performance with zero backend overhead.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Tech cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {techs.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass rounded-2xl p-5 group hover:scale-105 transition-all duration-300 border border-transparent hover:border-white/10"
              >
                {/* Logo */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 font-black text-sm transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${tech.color}22`,
                    border: `1px solid ${tech.color}44`,
                    color: tech.color,
                    fontSize: tech.logo.length > 2 ? "14px" : "24px"
                  }}
                >
                  {tech.logo}
                </div>

                <h3 className="font-bold text-white text-sm mb-1">{tech.name}</h3>
                <p className="text-xs font-medium mb-2" style={{ color: tech.color }}>{tech.role}</p>
                <p className="text-white/40 text-xs leading-relaxed">{tech.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Architecture diagram */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="glass-dark rounded-3xl p-8 border border-white/5">
              <h3 className="text-white font-bold text-xl mb-8 text-center">System Architecture</h3>

              <div className="space-y-4">
                {architecture.map((layer, i) => (
                  <motion.div
                    key={layer.layer}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ background: layer.color, boxShadow: `0 0 8px ${layer.color}` }}
                    />
                    <div className="flex-1 flex items-center justify-between rounded-xl px-4 py-3"
                      style={{ background: `${layer.color}11`, border: `1px solid ${layer.color}22` }}>
                      <span className="text-white/60 text-sm">{layer.layer}</span>
                      <span className="font-semibold text-sm" style={{ color: layer.color }}>
                        {layer.tech}
                      </span>
                    </div>
                  </motion.div>
                ))}

                {/* Connecting lines */}
                <div className="ml-[5px] mt-1 flex flex-col items-start gap-0">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={inView ? { height: "24px" } : { height: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                      className="w-px"
                      style={{ background: "linear-gradient(to bottom, rgba(168,85,247,0.4), rgba(6,182,212,0.4))" }}
                    />
                  ))}
                </div>
              </div>

              {/* Zero backend badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="mt-8 text-center"
              >
                <div
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-sm"
                  style={{
                    background: "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(168,85,247,0.15))",
                    border: "1px solid rgba(6,182,212,0.3)"
                  }}
                >
                  
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
