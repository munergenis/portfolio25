const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
        menuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      <button
        className="absolute top-4 right-5 text-5xl text-white focus:outline-none cursor-pointer"
        aria-label="Close menu"
        onClick={() => setMenuOpen(false)}
      >
        &times;
      </button>

      <a
        href="#home"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        Home
      </a>
      <a
        href="#web-projects"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        Web Projects
      </a>
      <a
        href="#productions"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        Productions
      </a>
      <a
        href="#about-me"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        About Me
      </a>
      <a
        href="#contact"
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        Contact
      </a>
    </div>
  );
};
export default MobileMenu;
