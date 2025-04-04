import { useState } from "react";
import { motion } from "framer-motion";

const bounceVariants = {
  animate: (i) => ({
    y: [0, -10, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      delay: i * 0.15,
    },
  }),
};

const ButtonBounceLoader = () => {
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
              className="w-2.5 h-2.5 bg-white rounded-full"
              custom={i}
              animate="animate"
              variants={bounceVariants}
            />
          ))}
        </div>
      ) : (
        <>
          <span>Bounce Loader</span>
        </>
      )}
    </button>
  );
};

export default ButtonBounceLoader;
