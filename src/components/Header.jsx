import { useState, useEffect } from 'react';
import Navbar from '/src/components/Navbar.jsx';
import { CgMenuLeft } from 'react-icons/cg';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpened((prev) => !prev);
  };

  const scrollToHero = () => {
    const heroSection = document.getElementById('home');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full flex items-center fixed top-0 z-20">
      <header
        className={`w-full transition-all duration-300 ${
          scrolled ? 'bg-primary shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-4 py-3 sm:px-6 md:px-8 lg:px-12 flex justify-between items-center">
          {/* Logo */}
          <div
            onClick={scrollToHero}
            className="cursor-pointer flex items-end"
          >
            <span className="text-2xl md:text-3xl lg:text-4xl text-white font-bold">
              ST
            </span>
            <span className="text-xl md:text-2xl lg:text-3xl text-orange-500 font-bold">
              WKGP..
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex gap-4 lg:gap-6 items-center">
            <Navbar
              toggleMenu={toggleMenu}
              menuOpened={menuOpened}
              scrolled={scrolled}
              containerStyle="flex gap-4 text-white"
            />
          </div>

          {/* Mobile Menu Button */}
          <CgMenuLeft
            onClick={toggleMenu}
            className="text-3xl xl:hidden cursor-pointer text-orange-500"
          />

          {/* Mobile Menu */}
          {menuOpened && (
            <div   className={`absolute top-0 left-0 w-full h-screen ${
              menuOpened ? 'bg-gray-900/70 backdrop-blur-md' : 'bg-transparent'
            } flex flex-col items-center justify-center z-50 shadow-lg transition-all duration-300`}>
              <Navbar
                toggleMenu={toggleMenu}
                menuOpened={menuOpened}
                scrolled={scrolled}
                containerStyle="text-white"
              />
              <button
                onClick={toggleMenu}
                className="mt-6 text-orange-500 text-lg font-bold"
                aria-label="Close menu"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
