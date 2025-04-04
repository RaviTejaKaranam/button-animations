import { useState } from "react";
import { motion } from "framer-motion";

const ButtonHoverShine = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative inline-block overflow-hidden">
      <motion.button
        className="btn-primary w-40 h-12 btn-bg text-white relative overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        whileTap={{ scale: 0.95 }}
      >
        {/* SHINE OVERLAY */}
        {hovered && (
          <motion.div
            className="absolute top-[-20%] left-[-40%] h-[140%] w-[20%] bg-white/20 rotate-[15deg] pointer-events-none z-10"
            initial={{ left: "-40%" }}
            animate={{ left: "110%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            onAnimationComplete={() => setHovered(false)}
          />
        )}

        <span className="relative z-10">Shine Hover</span>
      </motion.button>
    </div>
  );
};

export default ButtonHoverShine;
