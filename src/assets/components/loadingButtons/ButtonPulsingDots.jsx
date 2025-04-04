import { useState } from "react";
import { motion } from "framer-motion";

const dotVariants = {
  initial: { scale: 1, opacity: 0.4 },
  animate: (i) => ({
    scale: [1, 1.5, 1],
    opacity: [0.4, 1, 0.4],
    transition: {
      repeat: Infinity,
      duration: 0.8,
      delay: i * 0.2,
    },
  }),
};

const ButtonPulsingDots = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <button
      onClick={handleClick}
      className="btn-primary btn-bg relative flex items-center justify-center"
    >
      {loading ? (
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-2 h-2 bg-white rounded-full"
              custom={i}
              initial="initial"
              animate="animate"
              variants={dotVariants}
            />
          ))}
        </div>
      ) : (
        <>
          <span>Dots Loading</span>
        </>
      )}
    </button>
  );
};

export default ButtonPulsingDots;
