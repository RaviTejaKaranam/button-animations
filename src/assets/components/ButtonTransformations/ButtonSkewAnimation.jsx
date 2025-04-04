import { useState } from "react";
import { motion } from "framer-motion";

const ButtonSkewAnimation = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked); // Toggle clicked state
  };

  return (
    <motion.button
      className="btn-primary w-40 h-12 bg-[#023047] text-white relative"
      onClick={handleClick}
      whileHover={{
        skewX: 10, // Skew button on X-axis (horizontal)
        skewY: 5, // Skew button on Y-axis (vertical)
        transition: { duration: 0.3, ease: "easeOut" }, // Smooth transition
      }}
      whileTap={{
        scale: 0.95, // Slight shrink on click
        transition: { type: "spring", stiffness: 300, damping: 10 },
      }}
    >
      <span>{clicked ? "Sent" : "Send"}</span>
    </motion.button>
  );
};

export default ButtonSkewAnimation;
