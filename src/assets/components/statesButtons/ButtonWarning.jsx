import { useState } from "react";
import { motion } from "framer-motion";

const ButtonWarning = () => {
  const [warning, setWarning] = useState(false);

  const handleClick = () => {
    setWarning(true);
    setTimeout(() => setWarning(false), 2000);
  };

  const bgColor = warning ? "bg-yellow-500" : "bg-[#023047]";
  const icon = warning ? "fa-triangle-exclamation" : "fa-exclamation";
  const label = warning ? "Warning!" : "Trigger Warning";

  return (
    <motion.button
      onClick={handleClick}
      className={`btn-primary w-40 h-12 ${bgColor}`}
      whileTap={{ scale: 0.95 }}
    >
      <i className={`fa-solid ${icon} text-white text-base mr-2`} />
      <span>{label}</span>
    </motion.button>
  );
};

export default ButtonWarning;
