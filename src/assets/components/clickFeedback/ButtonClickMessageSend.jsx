import { useState } from "react";
import { motion } from "framer-motion";

const ButtonClickMessageSend = () => {
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleClick = () => {
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false); // Reset the sending state after animation
      setSent(true); // Simulate successful send
    }, 2000); // Simulate the time it takes to send the message
  };

  return (
    <motion.button
      className={`btn-primary w-40 h-12 text-white flex items-center justify-center relative overflow-hidden ${
        sent ? "bg-green-500" : "bg-[#023047]"
      }`}
      onClick={handleClick}
      whileTap={{
        scale: 0.95, // Shrink on click
        transition: { type: "spring", stiffness: 300, damping: 10 },
      }}
    >
      {isSending ? (
        <motion.i
          className="fa-solid fa-paper-plane mr-2"
          initial={{ x: 0 }}
          animate={{ x: -50, opacity: 0 }} // Fly the send icon out
          transition={{ duration: 0.5 }}
        />
      ) : sent ? (
        <motion.i
          className="fa-solid fa-check mr-2"
          initial={{ x: -50, opacity: 0 }} // Start off-screen (from the left)
          animate={{ x: 0, opacity: 1 }} // Slide in to center
          transition={{ duration: 0.5 }}
        />
      ) : (
        <>
          <i className="fa-solid fa-paper-plane mr-2" />
          <span>Send</span>
        </>
      )}
    </motion.button>
  );
};

export default ButtonClickMessageSend;
