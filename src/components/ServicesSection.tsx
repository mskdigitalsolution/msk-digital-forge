
import ServiceCard from './ServiceCard';
import { Code, Share2, Search, FileEdit } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: 'Website Development',
      description: 'Custom, responsive websites built with cutting-edge technologies that deliver exceptional user experiences.',
      icon: Code,
      imageSrc: '/lovable-uploads/b03aa72b-6052-4af8-bdaa-d1db6168f6ed.png',
      delay: 'fade-in-delay-1'
    },
    {
      title: 'Social Media Management',
      description: 'Strategic social media campaigns that build brand awareness and engage your target audience effectively.',
      icon: Share2,
      imageSrc: '/lovable-uploads/d32d98fe-01b5-48e0-8d23-9ff52796c7cb.png',
      delay: 'fade-in-delay-2'
    },
    {
      title: 'SEO Optimization',
      description: 'Data-driven SEO strategies to improve your search engine rankings and drive organic traffic to your business.',
      icon: Search,
      imageSrc: '/lovable-uploads/f5b4b59f-3e1e-48d6-9e2c-450b14c9a979.png',
      delay: 'fade-in-delay-2'
    },
    {
      title: 'Content Creation',
      description: 'Engaging, high-quality content that tells your brand story and connects with your audience across platforms.',
      icon: FileEdit,
      imageSrc: '/lovable-uploads/1408c018-c65f-44af-a160-715c7929a293.png',
      delay: 'fade-in-delay-3'
    }
  ];

  return (
    <section id="services" className="py-20 bg-msk-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title opacity-0 animate-fade-in">OUR SERVICES</h2>
          <p className="section-subtitle opacity-0 animate-fade-in-delay-1">WHAT WE DO</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              imageSrc={service.imageSrc}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
