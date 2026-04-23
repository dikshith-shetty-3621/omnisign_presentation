import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp, staggerContainer } from "../hooks/useAnimations";

const roadmap = [
  {
    phase: "Phase 1",
    status: "Done",
    statusColor: "#22c55e",
    title: "ASL Core — Letters & Numbers",
    items: ["Hand landmark detection", "Basic ASL alphabet", "Real-time inference", "Text-to-speech output"],
    icon: "✅",
  },
  {
    phase: "Phase 2",
    status: "In Progress",
    statusColor: "#06b6d4",
    title: "Extended Vocabulary",
    items: ["Common ASL words & phrases", "Phrase builder logic", "Confidence scoring", "UI/UX polish"],
    icon: "🔄",
  },
  {
    phase: "Phase 3",
    status: "Planned",
    statusColor: "#a855f7",
    title: "Multi-Language Support",
    items: ["BSL (British Sign Language)", "ISL (Indian Sign Language)", "Dynamic language switching", "Community contributions"],
    icon: "🌍",
  },
  {
    phase: "Phase 4",
    status: "Vision",
    statusColor: "#ec4899",
    title: "Reverse System + Mobile",
    items: ["Speech-to-Sign translation", "Native mobile app (iOS/Android)", "AR overlay mode", "Wearable integration"],
    icon: "🚀",
  },
];

const futureHighlights = [
  { icon: "🌐", title: "50+ Sign Languages", desc: "Global coverage for deaf communities worldwide" },
  { icon: "📱", title: "Mobile App", desc: "Native iOS & Android with offline support" },
  { icon: "🔁", title: "Speech-to-Sign", desc: "Reverse system — voice becomes animated signs" },
  { icon: "🥽", title: "AR Integration", desc: "Real-time sign overlays via AR glasses" },
  { icon: "🎓", title: "Learning Platform", desc: "Full ASL curriculum with gamified progress" },
  { icon: "🤝", title: "Open Source", desc: "Community-driven sign language datasets" },
];

const FutureScopeSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="future"
      ref={ref}
      className="relative py-28 overflow-hidden"
    >
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(6,182,212,0.06) 0%, transparent 60%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">
            08 / Future Scope
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-5xl sm:text-6xl font-black mt-4 mb-6">
            The Road{" "}
            <span className="gradient-text-cyan-purple">Ahead</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/50 text-lg max-w-xl mx-auto">
            OmniSign is just getting started. Here's our vision for the next generation of accessible communication.
          </motion.p>
        </motion.div>

        {/* Roadmap timeline */}
        <div className="mb-20 relative">
          {/* Vertical line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: "linear-gradient(to bottom, #06b6d4, #a855f7, #ec4899, transparent)" }} />

          <div className="space-y-8">
            {roadmap.map((phase, i) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
                className={`relative flex gap-8 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex absolute left-6 lg:left-1/2 top-6 -translate-x-1/2 z-10 items-center justify-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                    style={{
                      background: `${phase.statusColor}22`,
                      border: `2px solid ${phase.statusColor}`,
                      boxShadow: `0 0 12px ${phase.statusColor}50`
                    }}
                  >
                    {phase.icon}
                  </div>
                </div>

                {/* Content */}
                <div className={`glass rounded-2xl p-6 sm:p-8 flex-1 ${i % 2 === 0 ? "sm:ml-16 lg:ml-0 lg:mr-12" : "sm:ml-16 lg:ml-12 lg:mr-0"}`}>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{
                        color: phase.statusColor,
                        background: `${phase.statusColor}15`,
                        border: `1px solid ${phase.statusColor}30`
                      }}
                    >
                      {phase.phase}
                    </span>
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        color: phase.statusColor,
                        background: `${phase.statusColor}10`
                      }}
                    >
                      {phase.status}
                    </span>
                  </div>

                  <h3 className="text-white font-bold text-xl mb-4">{phase.title}</h3>

                  <ul className="space-y-2">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-white/60 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: phase.statusColor }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future features grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h3 variants={fadeUp} className="text-white font-bold text-2xl text-center mb-10">
            What We're Building Next
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {futureHighlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                className="glass rounded-xl p-5 flex items-start gap-4 group hover:scale-105 transition-all duration-300 border border-transparent hover:border-white/10"
              >
                <span className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FutureScopeSection;
