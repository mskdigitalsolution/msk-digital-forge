
import { Card, CardContent } from "@/components/ui/card";

const PortfolioSection = () => {
  const portfolioItems = [
    {
      title: "E-commerce Website",
      description: "A modern online store built with React",
      image: "/lovable-uploads/b03aa72b-6052-4af8-bdaa-d1db6168f6ed.png",
    },
    {
      title: "Business Landing Page",
      description: "Clean and professional business website",
      image: "/lovable-uploads/d32d98fe-01b5-48e0-8d23-9ff52796c7cb.png",
    },
    {
      title: "Social Media Campaign",
      description: "Engaging social media content design",
      image: "/lovable-uploads/f5b4b59f-3e1e-48d6-9e2c-450b14c9a979.png",
    },
  ];

  return (
    <section id="portfolio" className="py-16 bg-msk-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Portfolio</h2>
        <p className="section-subtitle">Recent Projects & Work</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 bg-msk-blue/10 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
