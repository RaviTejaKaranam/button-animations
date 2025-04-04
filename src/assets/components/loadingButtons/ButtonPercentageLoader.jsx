import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ButtonPercentageLoader = () => {
  const [loading, setLoading] = useState(false);
  const [percent, setPercent] = useState(0);

  const handleClick = () => {
    if (loading) return;

    setPercent(0);
    setLoading(true);
  };

  useEffect(() => {
    if (!loading) return;

    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
          }, 1000);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [loading]);

  return (
    <motion.button
      onClick={handleClick}
      className="btn-primary btn-bg w-40 h-12"
      whileTap={{ scale: 0.95 }}
    >
      {loading ? `Loading... ${percent}%` : "Start Load"}
    </motion.button>
  );
};

export default ButtonPercentageLoader;
