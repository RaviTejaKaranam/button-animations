import { useState } from "react";
import { motion } from "framer-motion";

const ButtonCircularLoader = () => {
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
        <motion.div
          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
      ) : (
        <>
          <span>Circle Loader</span>
        </>
      )}
    </button>
  );
};

export default ButtonCircularLoader;
