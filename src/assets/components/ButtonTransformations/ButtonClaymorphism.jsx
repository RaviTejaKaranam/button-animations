import { motion } from "framer-motion";

const ButtonClaymorphism = () => {
  return (
    <motion.button
      className="btn-primary w-40 h-12 text-white relative flex items-center justify-center rounded-xl"
      style={{
        background: "#6e7b8d", // Clay-like color (soft greyish blue)
        boxShadow:
          "10px 10px 20px rgba(0, 0, 0, 0.1), -10px -10px 20px rgba(255, 255, 255, 0.3)", // Soft shadow effect
        border: "none",
        fontSize: "16px",
        padding: "10px 20px",
        cursor: "pointer",
      }}
      whileHover={{
        scale: 1.05, // Slightly grow on hover
        boxShadow:
          "12px 12px 24px rgba(0, 0, 0, 0.2), -12px -12px 24px rgba(255, 255, 255, 0.4)", // Slightly stronger shadow on hover
        transition: { duration: 0.3 },
      }}
      whileTap={{
        scale: 0.95, // Shrink on click
        transition: { duration: 0.1 },
      }}
    >
      <span className="relative z-10">Press Me</span>
    </motion.button>
  );
};

export default ButtonClaymorphism;
