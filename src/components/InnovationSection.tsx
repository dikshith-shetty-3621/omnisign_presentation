import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp, staggerContainer } from "../hooks/useAnimations";

const innovations = [
  {
    number: "01",
    headline: "Runs Fully in Browser",
    highlight: "No Installation. No Server.",
    desc: "Unlike traditional ASL tools that require heavy backend infrastructure or app installs, OmniSign runs 100% in the browser — making it universally accessible on any device with a camera.",
    color: "#06b6d4",
  },
  {
    number: "02",
    headline: "Real-Time + Private",
    highlight: "Your Data Never Leaves Your Device.",
    desc: "All processing happens locally using WebAssembly-powered MediaPipe. No video is transmitted, stored, or analyzed externally — full privacy by design.",
    color: "#a855f7",
  },
  {
    number: "03",
    headline: "Landmark-Based Intelligence",
    highlight: "Smart Geometry, Not Pixels.",
    desc: "Instead of analyzing raw images, OmniSign extracts 21 3D landmark coordinates per frame — a compact, lightning-fast representation that enables ultra-low-latency inference.",
    color: "#ec4899",
  },
  {
    number: "04",
    headline: "Zero Dependency Stack",
    highlight: "Web-Native. Always Available.",
    desc: "Built on browser-native APIs — WebRTC, Canvas, Web Speech — OmniSign has no heavy framework dependencies and works even in offline environments.",
    color: "#14b8a6",
  },
];

const InnovationSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="innovation"
      ref={ref}
      className="relative py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 30% 50%, rgba(6,182,212,0.06) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(168,85,247,0.06) 0%, transparent 50%)"
        }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.span variants={fadeUp} className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
            06 / Innovation
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-5xl sm:text-6xl font-black mt-4 mb-6">
            What Makes Us{" "}
            <span className="gradient-text-cyan-pink">Different</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/50 text-lg max-w-2xl mx-auto">
            OmniSign doesn't just recognize signs — it reimagines what accessibility technology can be.
          </motion.p>
        </motion.div>

        {/* Innovation cards */}
        <div className="space-y-6">
          {innovations.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              className="group relative glass rounded-2xl p-6 sm:p-8 overflow-hidden hover:scale-[1.01] transition-all duration-300 border border-white/5 hover:border-white/10"
            >
              {/* Hover gradient */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(ellipse at ${i % 2 === 0 ? "20%" : "80%"} 50%, ${item.color}08, transparent)` }}
              />

              <div className="relative flex flex-col sm:flex-row items-start gap-6">
                {/* Number */}
                <div
                  className="text-7xl sm:text-8xl font-black opacity-10 flex-shrink-0 leading-none"
                  style={{ color: item.color }}
                >
                  {item.number}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-white font-black text-2xl sm:text-3xl">{item.headline}</h3>
                  </div>
                  <p
                    className="font-bold text-base mb-4 inline-block px-3 py-1 rounded-full"
                    style={{
                      color: item.color,
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}30`
                    }}
                  >
                    {item.highlight}
                  </p>
                  <p className="text-white/55 text-base leading-relaxed">{item.desc}</p>
                </div>

                {/* Right accent */}
                <div
                  className="hidden sm:block w-1 self-stretch rounded-full flex-shrink-0"
                  style={{ background: `linear-gradient(to bottom, ${item.color}, transparent)` }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 glass-dark rounded-3xl overflow-hidden border border-white/5"
        >
          <div className="p-6 border-b border-white/5">
            <h3 className="text-white font-bold text-xl text-center">OmniSign vs Traditional Solutions</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ background: "rgba(255,255,255,0.03)" }}>
                  <th className="text-left px-6 py-4 text-white/40 text-sm font-medium">Feature</th>
                  <th className="px-6 py-4 text-center">
                    <span className="gradient-text-cyan-purple font-bold text-sm">OmniSign</span>
                  </th>
                  <th className="px-6 py-4 text-center text-white/40 text-sm font-medium">Traditional Apps</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Browser-based", true, false],
                  ["Zero backend", true, false],
                  ["Real-time", true, "Partial"],
                  ["Privacy-first", true, false],
                  ["Free forever", true, false],
                  ["Works offline", true, false],
                ].map(([feature, us, them]) => (
                  <tr key={String(feature)} className="border-t border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4 text-white/60 text-sm">{String(feature)}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-cyan-400 font-bold text-lg">
                        {us === true ? "✓" : String(us)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`font-bold text-lg ${them === false ? "text-red-400/70" : "text-yellow-400/70"}`}>
                        {them === false ? "✗" : String(them)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InnovationSection;
