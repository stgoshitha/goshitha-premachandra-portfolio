const Navbar = ({ containerStyle, toggleMenu, menuOpened, scrolled }) => {
  const navItems = [
    { to: '#about', label: 'About' },
    { to: '#education', label: 'Education' },
    { to: '#skills', label: 'Skills' },
    { to: '#projects', label: 'Projects' },
    { to: '#contact', label: 'Contact' },
  ];

  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      const targetPosition = section.offsetTop - 95;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });

      if (menuOpened) {
        toggleMenu();
      }
    }
  };

  return (
    <div>
      <nav className={`flex ${menuOpened ? 'flex-col' : 'flex-row'} items-center gap-6 xl:flex-row ${containerStyle}`}>
  {navItems.map(({ to, label }) => (
    <a
      key={label}
      href={to}
      className={`text-lg font-bold ${
        scrolled ? 'text-white hover:text-gray-400' : 'text-white hover:text-orange-500'
      }`}
      onClick={(e) => handleScroll(e, to.slice(1))}
    >
      {label}
    </a>
  ))}
</nav>

    </div>
  );
};

export default Navbar;
