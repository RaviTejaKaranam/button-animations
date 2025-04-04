const Navbar = () => {
  return (
    <nav className="w-full bg-[#023047] text-white shadow-md sticky top-0 z-50 md:px-24 md:py-4 px-2 py-2">
      <div className="flex items-center justify-between">
        <h1 className="text-md font-bold">Button Animations</h1>
        <a
          href="https://github.com/RaviTejaKaranam/button-animations"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#8ecae6] text-[#023047] px-4 py-2 border border-2 rounded-md hover:bg-[#023047] hover:text-white transition duration-300 cursor-pointer hover:border-2 hover:border-[#8ecae6]">
            <i className="fa-brands fa-github"></i> GitHub
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
