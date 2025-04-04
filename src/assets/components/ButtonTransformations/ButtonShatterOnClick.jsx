import { useState } from "react";
import { motion } from "framer-motion";

const ButtonShatterOnClick = () => {
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
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.1 },
      }}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <span className="relative z-10">Click Me</span>

      {clicked && (
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            scale: 3,
            rotate: 180,
            transition: { duration: 1 },
          }}
          style={{
            background: "rgba(255, 255, 255, 0.8)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
      )}
    </motion.button>
  );
};

export default ButtonShatterOnClick;
