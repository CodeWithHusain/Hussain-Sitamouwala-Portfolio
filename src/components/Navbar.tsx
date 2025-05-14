
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-portfolio-primary bg-opacity-90 backdrop-blur-sm py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold">
          <span className="gradient-text">HS.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10">
          <Link to="/" className="text-portfolio-white hover:text-portfolio-accent transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-portfolio-white hover:text-portfolio-accent transition-colors">
            About
          </Link>
          <Link to="/portfolio" className="text-portfolio-white hover:text-portfolio-accent transition-colors">
            Portfolio
          </Link>
          <Link to="/contact" className="text-portfolio-white hover:text-portfolio-accent transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMobileMenu} className="md:hidden text-portfolio-white">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-portfolio-secondary absolute top-full left-0 w-full p-4 flex flex-col space-y-4 shadow-lg animate-fade-in">
          <Link 
            to="/" 
            className="text-portfolio-white hover:text-portfolio-accent transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-portfolio-white hover:text-portfolio-accent transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/portfolio" 
            className="text-portfolio-white hover:text-portfolio-accent transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link 
            to="/contact" 
            className="text-portfolio-white hover:text-portfolio-accent transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
