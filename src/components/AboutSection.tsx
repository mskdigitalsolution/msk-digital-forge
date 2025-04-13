
import { Code, Globe, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-msk-darker">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title opacity-0 animate-fade-in">ABOUT US</h2>
          <p className="section-subtitle opacity-0 animate-fade-in-delay-1">WHO WE ARE</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 opacity-0 animate-fade-in-delay-2">
            <h3 className="text-2xl font-tech font-bold text-white mb-4">
              MSK Digital Solution - <span className="text-msk-yellow">Digital Excellence</span>
            </h3>
            <p className="text-gray-300 mb-6">
              We are a modern digital agency specializing in creating powerful digital experiences. 
              Our team of experts combines creativity with technical prowess to deliver solutions 
              that help businesses thrive in the digital landscape.
            </p>
            <p className="text-gray-300 mb-8">
              With a focus on innovation and cutting-edge technologies, we provide comprehensive 
              services that solve real business challenges and create meaningful connections with 
              your audience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-4 bg-msk-blue/50 rounded-lg hover:bg-msk-blue transition-colors duration-300">
                <Code size={36} className="text-msk-yellow mb-3" />
                <h4 className="font-tech font-medium text-white">INNOVATION</h4>
              </div>
              <div className="flex flex-col items-center p-4 bg-msk-blue/50 rounded-lg hover:bg-msk-blue transition-colors duration-300">
                <Globe size={36} className="text-msk-yellow mb-3" />
                <h4 className="font-tech font-medium text-white">GLOBAL REACH</h4>
              </div>
              <div className="flex flex-col items-center p-4 bg-msk-blue/50 rounded-lg hover:bg-msk-blue transition-colors duration-300">
                <TrendingUp size={36} className="text-msk-yellow mb-3" />
                <h4 className="font-tech font-medium text-white">RESULTS</h4>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 opacity-0 animate-fade-in-right">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/5f225124-b7cc-4f35-9d90-12ee9438367a.png" 
                alt="MSK Digital team workspace" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-msk-dark/80"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
