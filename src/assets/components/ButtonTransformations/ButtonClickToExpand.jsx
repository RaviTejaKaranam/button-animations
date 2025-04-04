import { useState } from "react";
import { motion } from "framer-motion";

const ButtonClickToExpand = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false); // Reset after 1 second
    }, 1000); // Duration of expansion effect
  };

  return (
    <motion.button
      className="btn-primary w-40 h-12 bg-[#023047] text-white relative"
      onClick={handleClick}
      whileHover={{
        scale: 1.05, // Slightly grow the button on hover
        transition: { duration: 0.3 },
      }}
      animate={{
        scale: clicked ? 1.2 : 1, // Expand when clicked
        transition: { duration: 0.3 },
      }}
    >
      <span className="relative z-10">
        {clicked ? "Submitting..." : "Click Me"}
      </span>
    </motion.button>
  );
};

export default ButtonClickToExpand;
