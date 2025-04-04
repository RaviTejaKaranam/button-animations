import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

const ButtonFireworks = () => {
  const [fired, setFired] = useState(false);

  const launchFireworks = () => {
    if (fired) return;

    setFired(true);

    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        confetti({
          particleCount: 60,
          spread: 100,
          startVelocity: 45,
          angle: 55 + i * 25,
          origin: { y: 0.6 },
          colors: ["#f00", "#ff0", "#0f0", "#0ff", "#00f", "#f0f"],
        });
      }, i * 200);
    }

    setTimeout(() => {
      setFired(false);
    }, 3000);
  };

  return (
    <motion.button
      onClick={launchFireworks}
      className="btn-primary w-40 h-12 bg-[#023047]"
      whileTap={{ scale: 0.95 }}
    >
      <i className="fa-solid fa-fire text-white text-base mr-2" />
      <span>{fired ? "Boom!" : "Fireworks"}</span>
    </motion.button>
  );
};

export default ButtonFireworks;
