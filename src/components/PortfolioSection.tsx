
import { Card, CardContent } from "@/components/ui/card";
import { Image } from "lucide-react";

const PortfolioSection = () => {
  const portfolioItems = [
    {
      title: "E-commerce Website",
      description: "A modern online store built with React",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
    },
    {
      title: "Business Landing Page",
      description: "Clean and professional business website",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
    },
    {
      title: "Social Media Campaign",
      description: "Engaging social media content design",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
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
