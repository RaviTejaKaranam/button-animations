const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" text-[#023047] p-4 text-center">
      <p>&copy; {currentYear} RaviTejaKaranam. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <p>Check out for updates!!!</p>
      </div>
    </footer>
  );
};

export default Footer;
