import { motion } from "framer-motion";
const ButtonHoverLift = () => {
  return (
    <motion.button
      className="btn-primary w-40 h-12 bg-[#023047] text-white"
      whileHover={{
        y: -4,
        boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
        backgroundColor: "#219EBC",
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 0.95,
        y: -4,
        boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
        backgroundColor: "#219EBC",
        transition: { duration: 0.2 },
      }}
    >
      <i className="fa-solid fa-arrow-up-right-from-square mr-2" />
      <span>Hover Me</span>
    </motion.button>
  );
};

export default ButtonHoverLift;
