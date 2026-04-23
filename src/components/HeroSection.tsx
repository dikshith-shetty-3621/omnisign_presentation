import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const TYPING_WORDS = ["Sign Every Word.", "Break Every Barrier.", "Connect Every Mind.", "Sign Every Word."];

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const currentWord = TYPING_WORDS[wordIndex];
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseTime = isDeleting ? 0 : charIndex === currentWord.length ? 2000 : 0;

    timeoutRef.current = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        setDisplayText(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (!isDeleting && charIndex === currentWord.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentWord.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((wordIndex + 1) % TYPING_WORDS.length);
      }
    }, pauseTime || typingSpeed);

    return () => clearTimeout(timeoutRef.current);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 50% 50%, rgba(6,182,212,0.08) 0%, rgba(168,85,247,0.06) 40%, #000 70%)",
      }}
    >
      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
        }}
      />

      {/* Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #06b6d4, transparent)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, #a855f7, transparent)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #ec4899, transparent)" }} />

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8 border border-cyan-500/20"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">
            KalpAIthon 2.0 · Kalpataru Institute of Technology, Tiptur
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-6"
        >
          <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black tracking-tight leading-none mb-4">
            <span className="block text-white">Omni</span>
            <span className="block gradient-text-cyan-purple glow-cyan" style={{ lineHeight: 1.05 }}>
              Sign
            </span>
          </h1>
        </motion.div>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-6"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white/90 h-14 sm:h-16 flex items-center justify-center">
            <span>{displayText}</span>
            <span className="w-0.5 h-10 bg-cyan-400 ml-1 animate-pulse inline-block" />
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          Breaking communication barriers between the deaf community and the world —
          using the power of AI, real-time hand tracking, and speech synthesis.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={() => document.querySelector("#problem")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 rounded-xl font-semibold text-white text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #06b6d4, #a855f7)",
              boxShadow: "0 0 30px rgba(6,182,212,0.3)",
            }}
          >
            Explore the Vision →
          </button>
          <button
            onClick={() => document.querySelector("#how-it-works")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 rounded-xl font-semibold text-white/80 text-base glass border border-white/10 hover:border-white/30 hover:text-white transition-all duration-300 hover:scale-105"
          >
            See How It Works
          </button>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="grid grid-cols-3 gap-6 max-w-xl mx-auto"
        >
          {[
            { value: "466M+", label: "Deaf worldwide" },
            { value: "< 10ms", label: "Latency" },
            { value: "100%", label: "Browser-based" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-black gradient-text-cyan-purple">{stat.value}</p>
              <p className="text-white/40 text-xs sm:text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-cyan-400/50 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
