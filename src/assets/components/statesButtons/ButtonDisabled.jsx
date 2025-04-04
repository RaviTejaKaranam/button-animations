import { useState } from "react";
import { motion } from "framer-motion";

const ButtonDisabled = () => {
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    setDisabled(true);
    setTimeout(() => setDisabled(false), 3000); // re-enable after 3s
  };

  return (
    <motion.button
      onClick={handleClick}
      disabled={disabled}
      className={`btn-primary w-40 h-12 ${
        disabled ? "bg-gray-400 cursor-not-allowed" : "bg-[#023047]"
      }`}
      whileTap={!disabled ? { scale: 0.95 } : {}}
    >
      {disabled ? (
        <i className="fa-solid fa-ban text-white text-base mr-2" />
      ) : null}
      <span>{disabled ? "Disabled..." : "Click to Disable"}</span>
    </motion.button>
  );
};

export default ButtonDisabled;
