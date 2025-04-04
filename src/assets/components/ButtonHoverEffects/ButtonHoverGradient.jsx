import { motion } from "framer-motion";

const ButtonHoverGradient = () => {
  return (
    <motion.button
      className="btn-primary w-40 h-12 text-white bg-gradient-to-r from-[#023047] to-[#023047] transition-all duration-300 ease-in-out"
      whileHover={{
        background: "linear-gradient(90deg, #219EBC, #8ECAE6, #219EBC)",
        transition: {
          duration: 0.8,
          ease: "easeInOut",
        },
      }}
      whileTap={{
        scale: 0.95,
        background: "linear-gradient(90deg, #219EBC, #8ECAE6, #219EBC)",
        transition: {
          duration: 0.8,
          ease: "easeInOut",
        },
      }}
    >
      <i className="fa-solid fa-palette mr-2" />
      <span>Color Flow</span>
    </motion.button>
  );
};

export default ButtonHoverGradient;
