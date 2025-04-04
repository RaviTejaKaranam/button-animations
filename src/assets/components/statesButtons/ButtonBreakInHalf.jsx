import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ButtonBreakInHalf = () => {
  const [broken, setBroken] = useState(false);

  const handleClick = () => {
    if (broken) return;
    setBroken(true);
    setTimeout(() => setBroken(false), 3000);
  };

  return (
    <div className="relative w-40 h-12">
      <AnimatePresence>
        {!broken ? (
          <motion.button
            key="full"
            onClick={handleClick}
            className="btn-primary w-full h-full bg-red-600"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fa-solid fa-bomb text-white text-base mr-2" />
            <span>Break Me</span>
          </motion.button>
        ) : (
          <>
            <motion.div
              key="top-half"
              className="absolute top-0 left-0 w-full h-1/2 bg-red-600 text-white flex items-center justify-center rounded-t-full"
              initial={{ y: 0 }}
              animate={{ y: -30, rotate: -15, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              💣
            </motion.div>
            <motion.div
              key="bottom-half"
              className="absolute bottom-0 left-0 w-full h-1/2 bg-red-600 text-white flex items-center justify-center rounded-b-full"
              initial={{ y: 0 }}
              animate={{ y: 30, rotate: 15, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              💥
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ButtonBreakInHalf;
