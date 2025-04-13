
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  imageSrc: string;
  delay: string;
}

const ServiceCard = ({ title, description, icon: Icon, imageSrc, delay }: ServiceCardProps) => {
  return (
    <div className={`bg-msk-blue rounded-lg overflow-hidden shadow-lg hover:transform hover:scale-105 transition-all duration-300 opacity-0 animate-${delay}`}>
      <div className="relative h-48">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover" 
          onError={(e) => {
            console.error(`Error loading image: ${imageSrc}`);
            e.currentTarget.src = '/placeholder.svg';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-msk-dark/90"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <div className="bg-msk-yellow rounded-full p-2 mb-3">
            <Icon size={24} className="text-msk-dark" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-tech font-semibold text-xl text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
