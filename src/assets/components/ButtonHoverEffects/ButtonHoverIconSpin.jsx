import { motion } from "framer-motion";

const ButtonHoverIconSpin = () => {
  return (
    <motion.button
      className="btn-primary w-40 h-12 bg-[#023047] text-white flex items-center justify-center gap-2"
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
    >
      <motion.i
        className="fa-solid fa-gear"
        variants={{
          hover: {
            rotate: 360,
            transition: {
              duration: 1,
              ease: "linear",
              repeat: Infinity,
            },
          },
        }}
        initial={{ rotate: 0 }}
      />
      <span>Settings</span>
    </motion.button>
  );
};

export default ButtonHoverIconSpin;
