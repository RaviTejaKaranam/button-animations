import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

const ButtonConfettiSuccess = () => {
  const [success, setSuccess] = useState(false);

  const handleClick = () => {
    if (success) return;

    setSuccess(true);

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      angle: 90,
    });

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  const buttonColor = success ? "bg-green-500" : "bg-[#023047]";

  return (
    <motion.button
      onClick={handleClick}
      className={`btn-primary w-40 h-12 ${buttonColor}`}
      whileTap={{ scale: 0.95 }}
    >
      <i
        className={`fa-solid fa-${
          success ? "circle-check" : ""
        } text-white text-base mr-2`}
      />
      <span>{success ? "Success!" : "Launch Confetti"}</span>
    </motion.button>
  );
};

export default ButtonConfettiSuccess;
