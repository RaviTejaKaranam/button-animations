import { useState } from "react";
import { motion } from "framer-motion";

const typingDotVariants = {
  animate: (i) => ({
    y: [0, -4, 0],
    transition: {
      repeat: Infinity,
      duration: 0.6,
      delay: i * 0.2,
      ease: "easeInOut",
    },
  }),
};

const ButtonTypingLoader = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (loading) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <button
      onClick={handleClick}
      className="btn-primary btn-bg w-40 h-12 relative flex items-center justify-center"
    >
      {loading ? (
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-2 h-2 rounded-full bg-white"
              custom={i}
              animate="animate"
              variants={typingDotVariants}
            />
          ))}
        </div>
      ) : (
        <>
          <span>Typing...</span>
        </>
      )}
    </button>
  );
};

export default ButtonTypingLoader;
