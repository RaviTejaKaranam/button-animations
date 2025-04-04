import { motion } from "framer-motion";

const ButtonHoverZoomPulse = () => {
  return (
    <motion.button
      className="btn-primary w-40 h-12 bg-[#023047] text-white"
      whileHover={{
        scale: 1.05,
        backgroundColor: "#126782",
        color: "#ffffff",
        transition: {
          duration: 0.2,
          ease: "easeInOut",
        },
      }}
      whileTap={{ scale: 0.95 }}
    >
      <span>Hover Power</span>
    </motion.button>
  );
};

export default ButtonHoverZoomPulse;
