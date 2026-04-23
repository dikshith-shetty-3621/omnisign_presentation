import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      setProgress(totalHeight > 0 ? (scrolled / totalHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-0.5 bg-transparent">
      <motion.div
        className="h-full"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, #06b6d4, #a855f7, #ec4899)",
          boxShadow: "0 0 8px rgba(6,182,212,0.8)",
        }}
      />
    </div>
  );
};

export default ScrollProgress;
