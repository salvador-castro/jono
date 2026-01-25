import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    setIsOpen(false); // Close menu on click
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <img src="/logo/logo.jpg" alt="jonoBuceo" className="logo" />

        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </div>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li className="nav-link" onClick={() => scrollToSection('home')}>Inicio</li>
          <li className="nav-link" onClick={() => scrollToSection('about')}>Nosotros</li>
          <li className="nav-link" onClick={() => scrollToSection('courses')}>Cursos</li>
          <li className="nav-link" onClick={() => scrollToSection('contact')}>Contacto</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
