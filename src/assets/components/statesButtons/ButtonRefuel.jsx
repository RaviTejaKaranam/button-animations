import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ButtonRefuel = () => {
  const [refueling, setRefueling] = useState(false);
  const [charged, setCharged] = useState(false);
  const [fuel, setFuel] = useState(0);

  const handleClick = () => {
    if (refueling || charged) return;

    setRefueling(true);
    setFuel(0);
  };

  useEffect(() => {
    if (!refueling) return;

    const interval = setInterval(() => {
      setFuel((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setRefueling(false);
          setCharged(true);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [refueling]);

  const label = refueling ? "Refueling..." : charged ? "Charged" : "Charge";

  const icon = refueling
    ? "fa-battery-quarter"
    : charged
    ? "fa-bolt"
    : "fa-gas-pump";

  return (
    <motion.button
      onClick={handleClick}
      disabled={refueling || charged}
      className="btn-primary w-40 h-12 bg-[#023047] relative overflow-hidden flex items-center justify-center"
      whileTap={!refueling && !charged ? { scale: 0.95 } : {}}
    >
      {refueling && (
        <motion.div
          className="absolute bottom-0 left-0 w-full bg-green-400 opacity-30 z-0"
          initial={{ height: 0 }}
          animate={{ height: `${fuel}%` }}
          transition={{ ease: "linear", duration: 0.1 }}
        />
      )}

      <span className="relative z-10 flex items-center gap-2 text-white">
        <i className={`fa-solid ${icon} text-base`} />
        <span>{label}</span>
      </span>
    </motion.button>
  );
};

export default ButtonRefuel;
