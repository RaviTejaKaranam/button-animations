import { useState } from "react";
import { motion } from "framer-motion";

const ButtonRotatingOnClick = () => {
  const [rotated, setRotated] = useState(false);

  const handleClick = () => {
    setRotated(!rotated); // Toggle rotation state
  };

  return (
    <motion.button
      className="btn-primary w-40 h-12 text-white relative btn-bg rounded-full cursor-pointer"
      onClick={handleClick}
      whileHover={{
        scale: 1.05, // Slightly grow the button on hover
        transition: { duration: 0.3 },
      }}
      animate={{
        rotate: rotated ? 360 : 0, // Rotate 360 degrees on click
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
    >
      <span className="relative z-10 rounded-full">Click Me</span>
    </motion.button>
  );
};

export default ButtonRotatingOnClick;
