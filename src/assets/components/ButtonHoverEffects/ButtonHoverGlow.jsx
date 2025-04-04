import { motion } from "framer-motion";

const ButtonHoverGlow = () => {
  return (
    <motion.button
      className="btn-primary w-40 h-12 bg-[#023047] text-white shadow-none"
      whileHover={{
        backgroundColor: "#219EBC",
        boxShadow: "0px 0px 12px #219EBC",
        color: "#ffffff",
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      whileTap={{
        scale: 0.95,
        backgroundColor: "#219EBC",
        boxShadow: "0px 0px 12px #219EBC",
        color: "#ffffff",
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
    >
      <i className="fa-solid fa-wand-magic-sparkles mr-2" />
      <span>Glow Up</span>
    </motion.button>
  );
};

export default ButtonHoverGlow;
