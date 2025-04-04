import { useState } from "react";
import { motion } from "framer-motion";
import { tr } from "framer-motion/client";

const ButtonRotatingLoader = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <motion.button
      onClick={handleClick}
      className="btn-primary btn-bg relative flex items-center justify-center"
      whileTap={{ scale: 0.95 }}
    >
      {loading ? (
        <motion.i
          className="fa-solid fa-arrows-rotate text-white"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 1,
          }}
        />
      ) : (
        <>
          <span>Rotate Loader</span>
        </>
      )}
    </motion.button>
  );
};

export default ButtonRotatingLoader;
