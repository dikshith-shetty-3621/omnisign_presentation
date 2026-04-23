import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp, staggerContainer } from "../hooks/useAnimations";

const useCounter = (target: number, duration: number, start: boolean) => {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [target, duration, start]);

  return count;
};

const StatCounter = ({
  value, suffix, label, color, start
}: { value: number; suffix: string; label: string; color: string; start: boolean }) => {
  const count = useCounter(value, 2, start);
  return (
    <div className="text-center">
      <p className="font-black text-5xl sm:text-6xl leading-none mb-2" style={{ color }}>
        {count.toLocaleString()}{suffix}
      </p>
      <p className="text-white/50 text-sm sm:text-base">{label}</p>
    </div>
  );
};

const scenarios = [
  {
    icon: "🏥",
    title: "Healthcare",
    desc: "Doctors communicate directly with deaf patients without waiting for interpreters. Life-saving moments shouldn't wait.",
    color: "#06b6d4",
  },
  {
    icon: "🎓",
    title: "Education",
    desc: "Deaf students participate fully in classrooms. Teachers understand their questions in real-time.",
    color: "#a855f7",
  },
  {
    icon: "💼",
    title: "Workplace",
    desc: "Inclusive meetings where deaf colleagues contribute freely. No barriers. No special equipment.",
    color: "#ec4899",
  },
  {
    icon: "🛒",
    title: "Daily Life",
    desc: "Shopping, banking, asking for directions — everyday interactions become effortless for everyone.",
    color: "#14b8a6",
  },
];

const ImpactSection = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      id="impact"
      ref={ref}
      className="relative py-28 overflow-hidden"
    >
      {/* Dramatic background */}
      <div className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 50% 0%, rgba(168,85,247,0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 100%, rgba(6,182,212,0.1) 0%, transparent 50%)
          `
        }} />

      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span
          className="text-[20vw] font-black opacity-[0.02] select-none whitespace-nowrap"
          style={{ color: "#ffffff" }}
        >
          IMPACT
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.span variants={fadeUp} className="text-purple-400 text-sm font-semibold tracking-widest uppercase">
            07 / Impact
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-5xl sm:text-7xl lg:text-8xl font-black mt-6 mb-8 leading-tight"
          >
            Empowering{" "}
            <span
              className="gradient-text-purple-pink"
              style={{ textShadow: "0 0 60px rgba(168,85,247,0.3)" }}
            >
              Millions
            </span>
            <br />with a Voice.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/50 text-xl max-w-2xl mx-auto leading-relaxed">
            OmniSign doesn't just translate signs. It restores dignity, independence,
            and the fundamental human right to communicate.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          <motion.div variants={fadeUp}>
            <StatCounter value={466} suffix="M+" label="Deaf / Hard of Hearing Globally" color="#06b6d4" start={inView} />
          </motion.div>
          <motion.div variants={fadeUp}>
            <StatCounter value={70} suffix="M+" label="Primary Sign Language Users" color="#a855f7" start={inView} />
          </motion.div>
          <motion.div variants={fadeUp}>
            <StatCounter value={0} suffix="$" label="Cost to Users — Free Forever" color="#ec4899" start={inView} />
          </motion.div>
          <motion.div variants={fadeUp}>
            <StatCounter value={100} suffix="%" label="Browser-Based, Private & Secure" color="#14b8a6" start={inView} />
          </motion.div>
        </motion.div>

        {/* Scenario cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20"
        >
          {scenarios.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              className="glass rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-300"
            >
              <span className="text-5xl block mb-4 group-hover:scale-110 transition-transform duration-300">
                {s.icon}
              </span>
              <h3 className="font-bold text-white text-lg mb-3" style={{ color: s.color }}>
                {s.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Big quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div
            className="rounded-3xl p-10 sm:p-16 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(168,85,247,0.1), rgba(6,182,212,0.1))",
              border: "1px solid rgba(168,85,247,0.2)"
            }}
          >
            <div className="absolute top-6 left-8 text-6xl text-purple-500/20 font-serif leading-none">"</div>
            <div className="absolute bottom-4 right-8 text-6xl text-cyan-500/20 font-serif leading-none">"</div>

            <p
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight relative z-10"
              style={{ textShadow: "0 0 40px rgba(168,85,247,0.3)" }}
            >
              Communication is a{" "}
              <span className="gradient-text-purple-pink">human right</span>.
              <br />OmniSign makes sure everyone can exercise it.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
