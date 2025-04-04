import { useState } from "react";
import { motion } from "framer-motion";

const ButtonSuccess = () => {
  const [success, setSuccess] = useState(false);

  const handleClick = () => {
    setSuccess(true);

    // Auto reset after 2 seconds
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`btn-primary w-40 h-12 ${
        success ? "bg-green-500" : "bg-[#023047]"
      }`}
      whileTap={{ scale: 0.95 }}
    >
      <i
        className={`fa-solid ${
          success ? "fa-circle-check" : "fa-check"
        } text-white text-base mr-2`}
      />
      <span>{success ? "Success!" : "Mark Done"}</span>
    </motion.button>
  );
};

export default ButtonSuccess;
