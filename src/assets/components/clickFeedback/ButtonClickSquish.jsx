import { motion, useAnimation } from "framer-motion";

const ButtonClickSquish = () => {
  const controls = useAnimation();

  const handleClick = async () => {
    await controls.start({
      scaleY: [1, 0.85, 1.05, 1],
      transition: { duration: 0.35, ease: "easeOut" },
    });
  };

  return (
    <motion.button
      className="btn-primary w-40 h-12 bg-[#023047] text-white"
      animate={controls}
      onClick={handleClick}
    >
      <i className="fa-solid fa-hand-pointer mr-2" />
      <span>Squish Me</span>
    </motion.button>
  );
};

export default ButtonClickSquish;
