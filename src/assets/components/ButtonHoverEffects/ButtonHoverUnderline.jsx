const ButtonHoverUnderline = () => {
  return (
    <button className="btn-primary w-40 h-12 bg-[#023047] text-white relative group overflow-hidden">
      <span className="relative z-10">Hover Me</span>

      {/* Underline effect */}
      <span className="absolute bottom-2 left-1/5 w-0 h-[2px] bg-[#8ecae6] group-hover:w-[60%] transition-all duration-300 ease-in-out transform -translate-x-1/2" />
    </button>
  );
};

export default ButtonHoverUnderline;
