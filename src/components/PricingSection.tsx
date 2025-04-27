
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const packages = [
    {
      name: "Starter Website",
      price: "$999",
      features: [
        "Custom Design",
        "Mobile Responsive",
        "5 Pages",
        "Contact Form",
        "Basic SEO",
      ],
    },
    {
      name: "Social Media Management",
      price: "$599/month",
      features: [
        "3 Platforms",
        "12 Posts/Month",
        "Content Creation",
        "Community Management",
        "Monthly Reports",
      ],
    },
    {
      name: "Complete Package",
      price: "$1399/month",
      features: [
        "Custom Website",
        "Social Media Management",
        "Content Strategy",
        "SEO Optimization",
        "Monthly Analytics",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-16 bg-msk-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Pricing Packages</h2>
        <p className="section-subtitle">Choose Your Plan</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl font-bold">{pkg.name}</CardTitle>
                <p className="text-3xl font-bold text-msk-yellow">{pkg.price}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-msk-yellow" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6">Get Started</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
