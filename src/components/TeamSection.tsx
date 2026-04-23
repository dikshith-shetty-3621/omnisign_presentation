import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeUp, staggerContainer } from "../hooks/useAnimations";

const team = [
  {
    name: "Diganth N",
    role: "Team Lead",
    avatar: "DN",
    color: "#06b6d4",
    gradient: "from-cyan-500 to-blue-600",
    desc: "Vision & Architecture Lead",
    badge: "👑",
  },
  {
    name: "Yashas A",
    role: "AI / ML Developer",
    avatar: "YA",
    color: "#a855f7",
    gradient: "from-purple-500 to-violet-600",
    desc: "Sign Language AI Model",
    badge: "🧠",
  },
  {
    name: "Diganth A R",
    role: "Frontend Developer",
    avatar: "DR",
    color: "#ec4899",
    gradient: "from-pink-500 to-rose-600",
    desc: "UI/UX & Web Interface",
    badge: "🎨",
  },
  {
    name: "Vijeth HJ",
    role: "Integration Engineer",
    avatar: "VH",
    color: "#14b8a6",
    gradient: "from-teal-500 to-green-600",
    desc: "MediaPipe & Speech API",
    badge: "⚙️",
  },
];

const TeamSection = () => {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section
      id="team"
      ref={ref}
      className="relative py-24 overflow-hidden"
    >
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(168,85,247,0.06) 0%, transparent 60%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} className="text-purple-400 text-sm font-semibold tracking-widest uppercase">
            09 / The Team
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black mt-4 mb-4">
            Built by <span className="gradient-text-purple-pink">Passionate</span> Minds
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/50 text-base max-w-xl mx-auto">
            Team OmniSign · KalpAIthon 2.0 · Kalpataru Institute of Technology, Tiptur
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="relative group glass rounded-3xl p-6 text-center overflow-hidden hover:scale-105 transition-all duration-300 border border-white/5 hover:border-white/15"
            >
              {/* Background glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${member.color}12, transparent)` }}
              />

              {/* Avatar */}
              <div className="relative mx-auto mb-5 w-fit">
                <div
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center font-black text-xl text-white bg-gradient-to-br ${member.gradient} relative z-10 shadow-lg`}
                >
                  {member.avatar}
                </div>
                {/* Glow ring */}
                <div
                  className="absolute inset-0 rounded-2xl blur-md opacity-40"
                  style={{ background: `linear-gradient(135deg, ${member.color}, transparent)` }}
                />
                {/* Badge */}
                <div
                  className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm z-20 border-2 border-black"
                  style={{ background: member.color }}
                >
                  {member.badge}
                </div>
              </div>

              {/* Name */}
              <h3 className="text-white font-bold text-lg mb-1">{member.name}</h3>

              {/* Role */}
              <p
                className="text-sm font-semibold mb-2"
                style={{ color: member.color }}
              >
                {member.role}
              </p>

              {/* Desc */}
              <p className="text-white/40 text-xs">{member.desc}</p>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${member.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Hackathon badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div
            className="inline-flex items-center gap-4 glass rounded-2xl px-8 py-5 border border-white/10"
          >
            <span className="text-3xl">🏆</span>
            <div className="text-left">
              <p className="text-white font-bold text-lg">KalpAIthon 2.0</p>
              <p className="text-white/50 text-sm">Kalpataru Institute of Technology, Tiptur</p>
            </div>
            <div className="w-px h-10 bg-white/10 mx-2" />
            <div className="text-right">
              <p className="gradient-text-cyan-purple font-bold text-sm">AI Hackathon</p>
              <p className="text-white/50 text-xs">2025 Edition</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
