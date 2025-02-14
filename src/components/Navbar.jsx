import { useEffect } from "react";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="." className="font-mono text-xl font-bold text-white">
            gmuner<span className="text-blue-500">.com</span>
          </a>

          {/**
           * Phone menu
           */}
          <div
            className="w-7 h-5 text-xl relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/**
           * Desktop menu
           */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#web"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              Web Projects
            </a>
            <a
              href="#productions"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              Productions
            </a>
            <a
              href="#about-me"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              About Me
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
