import { motion, useAnimation } from "framer-motion";

const ButtonClickBounce = () => {
  const controls = useAnimation();

  const handleClick = async () => {
    await controls.start({
      scale: [1, 0.9, 1.05, 1],
      transition: { duration: 0.4, ease: "easeInOut" },
    });
  };

  return (
    <motion.button
      className="btn-primary w-40 h-12 bg-[#023047] text-white"
      onClick={handleClick}
      animate={controls}
    >
      <i className="fa-solid fa-arrow-pointer mr-2" />
      <span>Bounce Press</span>
    </motion.button>
  );
};

export default ButtonClickBounce;
