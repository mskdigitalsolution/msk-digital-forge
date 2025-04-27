
import { Card, CardContent } from "@/components/ui/card";
import { Image } from "lucide-react";

const PortfolioSection = () => {
  const portfolioItems = [
    {
      title: "E-commerce Website",
      description: "A modern online store built with React",
      image: "/placeholder.svg",
    },
    {
      title: "Business Landing Page",
      description: "Clean and professional business website",
      image: "/placeholder.svg",
    },
    {
      title: "Social Media Campaign",
      description: "Engaging social media content design",
      image: "/placeholder.svg",
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
              <div className="relative h-48 bg-msk-blue/10">
                <Image className="w-12 h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-msk-yellow/50" />
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
