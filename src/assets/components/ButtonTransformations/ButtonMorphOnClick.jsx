import { useState } from "react";
import { motion } from "framer-motion";

const ButtonMorphOnClick = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 1000); // Reset after 1 second
  };

  return (
    <motion.button
      className="btn-primary w-40 h-12 bg-[#023047] text-white relative rounded-md"
      onClick={handleClick}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.1 },
      }}
      animate={{
        borderRadius: clicked ? "50%" : "10px", // Morph to a circle on click
        transition: { duration: 0.5 },
      }}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <span className="relative z-10">Click Me</span>
    </motion.button>
  );
};

export default ButtonMorphOnClick;
