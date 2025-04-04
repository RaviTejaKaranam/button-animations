import { motion } from "framer-motion";

const ButtonHoverBlob = () => {
  return (
    <motion.button
      className="btn-primary w-40 h-12 bg-[#023047] text-white"
      initial={{ borderRadius: "999px" }}
      whileHover={{
        borderRadius: "20% 80% 70% 30% / 30% 40% 60% 70%",
        transition: { duration: 0.4, ease: "easeInOut" },
      }}
      whileTap={{ scale: 0.95 }}
    >
      <i className="fa-solid fa-droplet mr-2" />
      <span>Blobify</span>
    </motion.button>
  );
};

export default ButtonHoverBlob;
