
import { ArrowUp, Phone, Mail, Instagram, MessageSquare } from 'lucide-react';

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
              <img src="/lovable-uploads/f511c8b3-da1f-460b-89f1-4209b6725f62.png" alt="MSK Digital Solution Logo" className="h-8 w-auto" />
              <span className="text-xl font-tech font-bold text-white">MSK<span className="text-msk-yellow">.</span></span>
              <span className="text-sm font-tech text-msk-yellow">DIGITAL SOLUTION</span>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Transforming businesses through digital excellence
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-msk-yellow" />
                <a href="tel:0554039909" className="text-gray-300 hover:text-white">0554039909</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-msk-yellow" />
                <a href="mailto:mskdigitalsolution@gmail.com" className="text-gray-300 hover:text-white">mskdigitalsolution@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-5 h-5 text-msk-yellow" />
                <a href="https://www.instagram.com/mskdigitalsolution/#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">@mskdigitalsolution</a>
              </div>
            </div>
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
