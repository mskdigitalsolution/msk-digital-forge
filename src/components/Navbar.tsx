import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useAuth } from '@/providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Feedback', href: '#feedback' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-msk-dark/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center gap-2">
              <img src="/lovable-uploads/f511c8b3-da1f-460b-89f1-4209b6725f62.png" alt="MSK Digital Solution Logo" className="h-10 w-auto" />
              <span className="text-xl md:text-2xl font-tech font-bold text-white">MSK<span className="text-msk-yellow">.</span></span>
              <span className="hidden sm:inline-block text-sm font-tech text-msk-yellow">DIGITAL SOLUTION</span>
            </a>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-tech text-sm tracking-wider text-gray-300 hover:text-msk-yellow transition-colors duration-300"
              >
                {link.name.toUpperCase()}
              </a>
            ))}
            {user ? (
              <Button
                onClick={() => signOut()}
                variant="outline"
                className="ml-4 border-msk-yellow text-msk-yellow hover:bg-msk-yellow hover:text-black"
              >
                Sign Out
              </Button>
            ) : (
              <Button
                onClick={() => navigate('/auth')}
                variant="outline"
                className="ml-4 border-msk-yellow text-msk-yellow hover:bg-msk-yellow hover:text-black"
              >
                Sign In
              </Button>
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden bg-msk-blue p-2 rounded-md text-gray-400 hover:text-white hover:bg-msk-darker transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-msk-dark/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-tech block px-3 py-2 text-base font-medium text-gray-300 hover:text-msk-yellow hover:bg-msk-darker rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name.toUpperCase()}
              </a>
            ))}
            {user ? (
              <Button
                onClick={() => {
                  signOut();
                  setIsMenuOpen(false);
                }}
                variant="outline"
                className="w-full mt-2 border-msk-yellow text-msk-yellow hover:bg-msk-yellow hover:text-black"
              >
                Sign Out
              </Button>
            ) : (
              <Button
                onClick={() => {
                  navigate('/auth');
                  setIsMenuOpen(false);
                }}
                variant="outline"
                className="w-full mt-2 border-msk-yellow text-msk-yellow hover:bg-msk-yellow hover:text-black"
              >
                Sign In
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
