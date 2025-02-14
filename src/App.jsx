import LoadingScreen from "./components/LoadingScreen";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Home from "./components/sections/Home";
import AboutMe from "./components/sections/AboutMe";
import WebProjects from "./components/sections/WebProjects";
import Productions from "./components/sections/Productions";
import Contact from "./components/sections/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 bg-black text-gray-100 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <AboutMe />
        <WebProjects />
        <Productions />
        <Contact />
      </div>
    </>
  );
}

export default App;
