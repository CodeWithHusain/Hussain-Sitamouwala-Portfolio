
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-portfolio-secondary py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <Link to="/" className="text-2xl font-serif font-bold mb-4 inline-block">
              <span className="gradient-text">HS.</span>
            </Link>
            <p className="text-portfolio-gray mb-6">
              First-year Electronics and Computer Science Engineering student passionate about programming, 
              web development, and cybersecurity.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:hussain.sitamouwala@example.com" className="w-10 h-10 rounded-full bg-portfolio-primary flex items-center justify-center hover:bg-portfolio-accent transition-colors">
                <Mail size={18} className="text-portfolio-white" />
              </a>
              <a href="https://linkedin.com/in/hussain-sitamouwala-a20515333" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-portfolio-primary flex items-center justify-center hover:bg-portfolio-accent transition-colors">
                <Linkedin size={18} className="text-portfolio-white" />
              </a>
              <a href="https://github.com/CodeWithHusain" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-portfolio-primary flex items-center justify-center hover:bg-portfolio-accent transition-colors">
                <Github size={18} className="text-portfolio-white" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-portfolio-gray hover:text-portfolio-accent transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-portfolio-gray hover:text-portfolio-accent transition-colors">
                About
              </Link>
              <Link to="/portfolio" className="text-portfolio-gray hover:text-portfolio-accent transition-colors">
                Portfolio
              </Link>
              <Link to="/services" className="text-portfolio-gray hover:text-portfolio-accent transition-colors">
                Services
              </Link>
              <Link to="/contact" className="text-portfolio-gray hover:text-portfolio-accent transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <div className="space-y-4">
              <p className="text-portfolio-gray">
                <span className="block font-medium text-portfolio-white">Based in:</span>
                Mumbai, India
              </p>
              <div className="flex space-x-4 pt-2">
                <a href="https://linkedin.com/in/hussain-sitamouwala-a20515333" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-portfolio-gray hover:text-portfolio-accent transition-colors">
                  <Linkedin size={18} />
                  <span>hussain-sitamouwala-a20515333</span>
                </a>
              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/CodeWithHusain" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-portfolio-gray hover:text-portfolio-accent transition-colors">
                  <Github size={18} />
                  <span>CodeWithHusain</span>
                </a>
              </div>
              <a 
                href="#" 
                className="inline-block px-4 py-2 border border-portfolio-accent text-portfolio-accent font-medium rounded-md hover:bg-portfolio-accent hover:text-white transition-all mt-2"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-portfolio-gray/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-portfolio-gray text-sm">
            &copy; {new Date().getFullYear()} Hussain Sitamouwala. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
