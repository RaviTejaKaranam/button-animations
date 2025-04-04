import { useState } from "react";
import { motion } from "framer-motion";

const ButtonToggleSlide = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn); // Toggle the state
  };

  return (
    <motion.button
      className={`w-20 h-10 rounded-full p-1 relative cursor-pointer ${
        isOn ? "bg-green-500" : "bg-gray-400"
      }`}
      onClick={handleToggle}
      whileTap={{ scale: 0.95 }} // Slight compression on click
    >
      {/* Circle that slides */}
      <motion.div
        className="w-8 h-8 bg-white rounded-full absolute top-1 transition-all"
        animate={{
          x: isOn ? "120%" : 0, // Slide based on state
        }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 0.3,
        }}
      />
    </motion.button>
  );
};

export default ButtonToggleSlide;
