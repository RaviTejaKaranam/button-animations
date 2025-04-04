import { useState } from "react";
import { motion } from "framer-motion";

const ButtonProgressBar = () => {
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
          }, 1000);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
  };

  return (
    <button
      onClick={handleClick}
      className="btn-primary relative overflow-hidden btn-bg"
    >
      <span className="relative z-10">
        {loading ? "Loading..." : "Start Progress"}
      </span>

      {/* Animated progress bar */}
      {loading && (
        <motion.div
          className="absolute left-0 top-0 h-full bg-[#219ebc] z-0"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear", duration: 0.1 }}
        />
      )}
    </button>
  );
};

export default ButtonProgressBar;
