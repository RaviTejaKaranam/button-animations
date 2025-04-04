import { useState } from "react";
import { motion } from "framer-motion";

const ButtonCardReveal = () => {
  const [revealed, setRevealed] = useState(false);

  const handleClick = () => {
    setRevealed(!revealed); // Toggle the card reveal state
  };

  return (
    <motion.button
      className="w-40 h-12 bg-[#023047] text-white relative flex items-center justify-center overflow-hidden btn-primary rounded-full cursor-pointer"
      style={{
        perspective: "1000px", // 3D effect
      }}
      onClick={handleClick}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="relative w-full h-full flex items-center justify-center text-white"
        initial={{ opacity: 1 }}
        animate={{ opacity: revealed ? 0 : 1 }} // Fade the button out when revealed
        transition={{ duration: 0.4 }}
      >
        <span>Click to Reveal</span>
      </motion.div>

      <motion.div
        className="absolute w-full h-full bg-[#ffb703] flex items-center justify-center text-[#023047] opacity-0"
        animate={{ opacity: revealed ? 1 : 0 }} // Fade in the card when clicked
        transition={{ duration: 0.4 }}
      >
        <span>Here's your secret!</span>
      </motion.div>
    </motion.button>
  );
};

export default ButtonCardReveal;
