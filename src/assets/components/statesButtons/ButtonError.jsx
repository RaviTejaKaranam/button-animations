import { useState } from "react";
import { motion, useAnimation } from "framer-motion";

const ButtonError = () => {
  const [error, setError] = useState(false);
  const controls = useAnimation();

  const handleClick = () => {
    setError(true);
    controls.start({
      x: [0, -10, 10, -10, 10, 0],
      transition: { duration: 0.5 },
    });

    setTimeout(() => setError(false), 2000);
  };

  const bgColor = error ? "bg-red-500" : "bg-[#023047]";
  const icon = "fa-triangle-exclamation";
  const label = error ? "Error!" : "Trigger Error";

  return (
    <motion.button
      onClick={handleClick}
      animate={controls}
      className={`btn-primary w-40 h-12 ${bgColor}`}
      whileTap={{ scale: 0.95 }}
    >
      <i className={`fa-solid ${icon} text-white text-base mr-2`} />
      <span>{label}</span>
    </motion.button>
  );
};

export default ButtonError;
