import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp, staggerContainer, slideLeft, slideRight } from "../hooks/useAnimations";

const stats = [
  { number: "466M+", desc: "People worldwide live with disabling hearing loss" },
  { number: "70M+", desc: "Deaf people use sign language as their primary language" },
  { number: "< 1%", desc: "Of hearing people can understand sign language" },
];

const points = [
  "No real-time translation for everyday conversations",
  "Interpreters are expensive and not always available",
  "Existing apps require internet or backend servers",
  "Millions are left behind in education & employment",
];

const ProblemSection = () => {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section
      id="problem"
      ref={ref}
      className="relative min-h-screen flex items-center py-24 overflow-hidden"
    >
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(168,85,247,0.08) 0%, transparent 60%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left */}
          <motion.div variants={slideLeft}>
            <div className="mb-4">
              <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase">
                01 / The Problem
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-black leading-tight mb-8">
              A World That{" "}
              <span className="gradient-text-purple-pink">Cannot</span>{" "}
              <br />Hear Them.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              Every day, <strong className="text-white">466 million people</strong> with hearing
              disabilities face an invisible wall — the inability to communicate naturally with
              the majority of the world.
            </p>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Sign language is rich, expressive, and complete — but most people never learn it.
              This creates a devastating communication gap that isolates, limits, and
              silences millions of voices.
            </p>
            <div className="space-y-4">
              {points.map((point, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-3 text-white/70 text-base"
                >
                  <span className="text-red-400 mt-0.5 flex-shrink-0">✕</span>
                  <span>{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div variants={slideRight} className="space-y-5">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.number}
                variants={fadeUp}
                className="gradient-border p-6 rounded-2xl relative overflow-hidden group hover:scale-105 transition-transform duration-300"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{
                    background: i % 2 === 0
                      ? "radial-gradient(ellipse at 30% 50%, rgba(168,85,247,0.08), transparent)"
                      : "radial-gradient(ellipse at 70% 50%, rgba(6,182,212,0.08), transparent)"
                  }}
                />
                <p className="text-5xl font-black gradient-text-purple-pink mb-2">{stat.number}</p>
                <p className="text-white/60 text-base">{stat.desc}</p>
              </motion.div>
            ))}

            <motion.div
              variants={fadeUp}
              className="glass rounded-2xl p-6 border-l-4"
              style={{ borderLeftColor: "#a855f7" }}
            >
              <p className="text-white/80 text-lg italic leading-relaxed">
                "The limits of my language are the limits of my world."
              </p>
              <p className="text-purple-400 text-sm mt-3 font-medium">— Ludwig Wittgenstein</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
