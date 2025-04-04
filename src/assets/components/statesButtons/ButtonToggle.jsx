import { useState } from "react";
import { motion } from "framer-motion";

const ButtonToggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn((prev) => !prev);
  };

  const bgColor = isOn ? "bg-green-500" : "bg-gray-500";
  const icon = isOn ? "fa-toggle-on" : "fa-toggle-off";
  const label = isOn ? "Toggle: ON" : "Toggle: OFF";

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

export default ButtonToggle;
