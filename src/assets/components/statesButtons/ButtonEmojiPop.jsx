import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const emojis = ["🎉", "🥳", "💯", "🎊"];

const ButtonEmojiPop = () => {
  const [showEmojis, setShowEmojis] = useState(false);

  const handleClick = () => {
    if (showEmojis) return;

    setShowEmojis(true);

    setTimeout(() => {
      setShowEmojis(false);
    }, 2000);
  };

  return (
    <motion.button
      onClick={handleClick}
      className="btn-primary w-40 h-12 bg-[#023047] relative overflow-hidden flex items-center justify-center"
      whileTap={{ scale: 0.95 }}
    >
      {/* Button Text */}
      <span className="relative z-10 flex items-center gap-2">
        {!showEmojis && "Celebrate"}
      </span>

      {/* Emojis */}
      <AnimatePresence>
        {showEmojis && (
          <div className="absolute inset-0 flex items-center justify-center gap-2 z-0">
            {emojis.map((emoji, index) => (
              <motion.span
                key={index}
                className="text-xl"
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: -50, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 + index * 0.1 }}
              >
                {emoji}
              </motion.span>
            ))}
          </div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ButtonEmojiPop;
