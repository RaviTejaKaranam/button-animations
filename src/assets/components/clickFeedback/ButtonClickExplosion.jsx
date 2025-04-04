import { motion } from "framer-motion";

const ButtonClickBounceBack = () => {
  return (
    <motion.button
      className="btn-primary w-40 h-12 bg-[#023047] text-white"
      whileTap={{
        scale: 0.9, // Compressing the button down
        transition: { type: "spring", stiffness: 300, damping: 10 },
      }}
      whileHover={{ scale: 1.05 }} // Optional hover scale for subtle feedback
    >
      <span>Bounce Back</span>
    </motion.button>
  );
};

export default ButtonClickBounceBack;
