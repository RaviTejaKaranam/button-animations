import { useState } from "react";
import { motion } from "framer-motion";

const ButtonLinearLoader = () => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleClick = () => {
    if (loading) return;

    setLoading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            setProgress(0);
          }, 500);
          return 100;
        }
        return prev + 5;
      });
    }, 80);
  };

  return (
    <button
      onClick={handleClick}
      className="btn-primary relative overflow-hidden btn-bg"
    >
      <span className="relative z-10">
        {loading ? "Loading..." : "Linear Load"}
      </span>

      {/* Thin line at the bottom */}
      {loading && (
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-[#219ebc] z-0"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear", duration: 0.08 }}
        />
      )}
    </button>
  );
};

export default ButtonLinearLoader;
