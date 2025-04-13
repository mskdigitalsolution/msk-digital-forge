
import ServiceCard from './ServiceCard';
import { Code, Share2, Search, FileEdit } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: 'Website Development',
      description: 'Custom, responsive websites built with cutting-edge technologies that deliver exceptional user experiences.',
      icon: Code,
      imageSrc: '/lovable-uploads/e62dae42-38b9-4d7d-9f8b-63274c21a733.png',
      delay: 'fade-in-delay-1'
    },
    {
      title: 'Social Media Management',
      description: 'Strategic social media campaigns that build brand awareness and engage your target audience effectively.',
      icon: Share2,
      imageSrc: '/lovable-uploads/cf6e5124-566e-44ee-a508-78b255736cf7.png',
      delay: 'fade-in-delay-2'
    },
    {
      title: 'SEO Optimization',
      description: 'Data-driven SEO strategies to improve your search engine rankings and drive organic traffic to your business.',
      icon: Search,
      imageSrc: '/lovable-uploads/3d9b3e38-3fff-4fc6-8bce-42745bc8abb9.png',
      delay: 'fade-in-delay-2'
    },
    {
      title: 'Content Creation',
      description: 'Engaging, high-quality content that tells your brand story and connects with your audience across platforms.',
      icon: FileEdit,
      imageSrc: '/lovable-uploads/208f8c21-ccc3-4524-aa59-393d6ec99b44.png',
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
