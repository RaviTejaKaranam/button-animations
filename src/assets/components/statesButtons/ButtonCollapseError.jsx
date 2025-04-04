import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ButtonCollapseError = () => {
  const [error, setError] = useState(false);

  const handleClick = () => {
    if (error) return;
    setError(true);
    setTimeout(() => setError(false), 2000);
  };

  return (
    <div className="relative w-40 h-12 flex items-center justify-center">
      <AnimatePresence>
        {!error ? (
          <motion.button
            key="button"
            onClick={handleClick}
            className="btn-primary w-40 h-12 bg-red-600"
            initial={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.4 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fa-solid fa-skull-crossbones text-white text-base mr-2" />
            <span>Collapse Me</span>
          </motion.button>
        ) : (
          <motion.div
            key="error-icon"
            className="absolute text-2xl text-red-500"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.3, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ButtonCollapseError;
