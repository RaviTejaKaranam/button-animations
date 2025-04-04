import { useState } from "react";
import { motion } from "framer-motion";

const ButtonSpinner = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000); // simulate loading for 3s
  };

  return (
    <motion.button
      className="btn-primary btn-bg"
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
    >
      {loading ? (
        <motion.i
          className="fa-solid fa-spinner animate-spin mr-2"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
      ) : (
        <>
          <i className="fa-solid fa-arrow-rotate-right text-white mr-2" />
          <span>Load</span>
        </>
      )}
    </motion.button>
  );
};

export default ButtonSpinner;
