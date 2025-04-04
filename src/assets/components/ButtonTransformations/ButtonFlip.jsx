import { useState } from "react";
import { motion } from "framer-motion";

const ButtonFlip = () => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped); // Toggle flip state
  };

  return (
    <motion.button
      className="w-40 h-12 text-white relative overflow-hidden btn-primary rounded-full cursor-pointer"
      onClick={handleClick}
      whileTap={{ scale: 0.95 }}
      style={{
        perspective: "1000px", // 3D effect
      }}
    >
      <motion.div
        className="relative w-full h-full"
        initial={{ rotateY: 0 }}
        animate={{ rotateY: flipped ? 180 : 0 }} // Flip the button on click
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front side */}
        {flipped ? (
          <div className="absolute w-full h-full flex items-center justify-center btn-bg text-white rotateY-180">
            <span>Sent</span>
          </div>
        ) : (
          <div className="absolute w-full h-full flex items-center justify-center btn-primary btn-bg text-white">
            <span>Send</span>
          </div>
        )}
      </motion.div>
    </motion.button>
  );
};

export default ButtonFlip;
