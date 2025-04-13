
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-msk-dark py-10 border-t border-msk-yellow/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2">
              <span className="text-xl font-tech font-bold text-white">MSK<span className="text-msk-yellow">.</span></span>
              <span className="text-sm font-tech text-msk-yellow">DIGITAL SOLUTION</span>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Transforming businesses through digital excellence
            </p>
          </div>

          <div className="flex flex-col items-center">
            <button 
              onClick={scrollToTop}
              className="p-3 bg-msk-blue rounded-full hover:bg-msk-yellow transition-all duration-300 mb-4 group"
            >
              <ArrowUp size={20} className="text-msk-yellow group-hover:text-msk-dark transition-colors" />
            </button>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} MSK Digital Solution. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
