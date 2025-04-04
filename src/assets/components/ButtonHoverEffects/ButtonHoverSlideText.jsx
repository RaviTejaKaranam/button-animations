import { useState } from "react";
import { motion } from "framer-motion";

const ButtonHoverSlideText = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="btn-primary w-40 h-12 bg-[#023047] text-white relative overflow-hidden flex items-center justify-center"
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute left-0 flex items-center justify-center w-full h-full gap-2 z-10"
        initial={false}
        animate={{
          x: hovered ? "-100%" : "0%",
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <i className="fa-solid fa-envelope text-white" />
      </motion.div>

      <motion.div
        className="absolute left-0 flex items-center justify-center w-full h-full gap-2 z-10"
        initial={false}
        animate={{
          x: hovered ? "0%" : "100%",
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <span>Message</span>
      </motion.div>
    </motion.button>
  );
};

export default ButtonHoverSlideText;
