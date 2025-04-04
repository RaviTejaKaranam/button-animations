import { motion } from "framer-motion";

const ButtonGlassmorphism = () => {
  return (
    <motion.button
      className="btn-primary w-40 h-12 text-white relative flex items-center justify-center rounded-lg"
      style={{
        background: "rgba(255, 255, 255, 0.1)", // Semi-transparent white
        backdropFilter: "blur(10px)", // Frosted glass blur effect
        border: "2px solid rgba(255, 255, 255, 0.2)", // Light border
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
        fontSize: "16px",
        padding: "10px 20px",
        cursor: "pointer",
      }}
      whileHover={{
        scale: 1.05, // Slightly grow the button on hover
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)", // Increase shadow on hover
        transition: { duration: 0.3 },
      }}
    >
      <span className="relative z-10 text-[#023047]">Click Me</span>
    </motion.button>
  );
};

export default ButtonGlassmorphism;
