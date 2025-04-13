
import { Mail, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-msk-darker relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title opacity-0 animate-fade-in">CONTACT US</h2>
          <p className="section-subtitle opacity-0 animate-fade-in-delay-1">GET IN TOUCH</p>
        </div>

        <div className="max-w-3xl mx-auto bg-msk-blue/50 p-8 rounded-lg backdrop-blur-sm shadow-lg opacity-0 animate-fade-in-delay-2">
          <div className="text-center mb-8">
            <p className="text-gray-300 mb-6">
              Ready to start your digital journey? Contact us today and let's transform your ideas into reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a 
              href="mailto:contact@mskdigital.com" 
              className="flex flex-col items-center p-6 bg-msk-dark rounded-lg hover:bg-msk-darker transition-colors duration-300 group"
            >
              <div className="p-3 bg-msk-yellow rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail size={24} className="text-msk-dark" />
              </div>
              <h3 className="font-tech font-medium text-white mb-2">EMAIL US</h3>
              <p className="text-msk-yellow text-center">contact@mskdigital.com</p>
            </a>

            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center p-6 bg-msk-dark rounded-lg hover:bg-msk-darker transition-colors duration-300 group"
            >
              <div className="p-3 bg-msk-yellow rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageSquare size={24} className="text-msk-dark" />
              </div>
              <h3 className="font-tech font-medium text-white mb-2">WHATSAPP</h3>
              <p className="text-msk-yellow text-center">Send a message</p>
            </a>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-msk-dark"></div>
    </section>
  );
};

export default ContactSection;
