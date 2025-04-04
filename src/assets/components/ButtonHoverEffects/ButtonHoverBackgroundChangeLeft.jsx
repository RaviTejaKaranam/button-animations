import { useState } from "react";
import { motion } from "framer-motion";

const ButtonHoverBackgroundChangeLeft = () => {
  const [hovered, setHovered] = useState(false); // State to track hover
  return (
    <motion.button
      className={`btn-primary w-40 h-12 bg-[#023047] text-white relative overflow-hidden cursor-pointer flex items-center justify-center rounded-full ${
        hovered ? "text-[#023047]" : "text-white"
      }`}
      onMouseEnter={() => setHovered(true)} // Set hovered state on mouse enter
      whileTap={{ scale: 0.95 }} // Optional click effect
    >
      <span
        className={`relative z-10 ${
          hovered ? "text-[#023047]" : "text-white"
        } transition-colors duration-500`}
      >
        Hover Me
      </span>

      {/* Sliding background effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-[#ffb703] transition-all text-[#023047] flex items-center justify-center"
        initial={{ width: "0%", left: "-100%" }}
        animate={{
          width: hovered ? "100%" : "0%", // Change width on hover
          left: hovered ? "0%" : "-100%", // Slide in from the left
          transition: { duration: 0.5 },
        }}
        onMouseLeave={() => setHovered(false)} // Reset hovered state on mouse leave
        style={{ zIndex: 1 }}
      />
    </motion.button>
  );
};

export default ButtonHoverBackgroundChangeLeft;
