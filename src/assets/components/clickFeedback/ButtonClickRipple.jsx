import { useRef } from "react";
import { motion } from "framer-motion";

const ButtonClickRipple = () => {
  const buttonRef = useRef(null);

  const createRipple = (event) => {
    const button = buttonRef.current;
    const ripple = document.createElement("span");

    const rect = button.getBoundingClientRect();
    const size = Math.max(button.clientWidth, button.clientHeight);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.className = "ripple";
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <button
      ref={buttonRef}
      onClick={createRipple}
      className="btn-primary w-40 h-12 bg-[#023047] text-white relative overflow-hidden"
    >
      <span className="relative z-10">Click Ripple</span>
    </button>
  );
};

export default ButtonClickRipple;
