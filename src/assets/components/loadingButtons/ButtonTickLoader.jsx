import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ButtonTickLoader = () => {
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleClick = () => {
    if (loading || completed) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setCompleted(true);

      // Revert back to normal after 2 seconds
      setTimeout(() => {
        setCompleted(false);
      }, 2000);
    }, 2000);
  };

  const buttonColor = completed ? "bg-green-500" : "bg-[#023047]";

  return (
    <motion.button
      onClick={handleClick}
      className={`btn-primary relative flex items-center justify-center ${buttonColor}`}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.i
            key="loading"
            className="fa-solid fa-spinner animate-spin text-white text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        ) : completed ? (
          <motion.i
            key="check"
            className="fa-solid fa-check text-white text-base"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        ) : (
          <>
            <span>Submit</span>
          </>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ButtonTickLoader;
