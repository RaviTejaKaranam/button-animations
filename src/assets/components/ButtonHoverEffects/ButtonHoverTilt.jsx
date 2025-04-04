import { motion } from "framer-motion";

const ButtonHoverTilt = () => {
  return (
    <motion.button
      className="btn-primary w-40 h-12 bg-[#023047] text-white"
      initial={{ rotateX: 0, rotateY: 0 }}
      whileHover={{
        rotateX: -6,
        rotateY: 6,
        transition: { type: "spring", stiffness: 100, damping: 10 },
      }}
      whileTap={{ scale: 0.95 }}
      style={{ perspective: 1000 }} // Gives depth
    >
      <i className="fa-solid fa-cube mr-2" />
      <span>Tilt Me</span>
    </motion.button>
  );
};

export default ButtonHoverTilt;
