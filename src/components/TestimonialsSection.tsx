
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "John Smith",
      role: "Business Owner",
      text: "Working with MSK Digital Solutions was a game-changer for our business. Their expertise in web design and social media management helped us reach new heights.",
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      text: "Their attention to detail and creative approach to social media management has significantly improved our online presence.",
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-msk-darker">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Client Testimonials</h2>
        <p className="section-subtitle">What Our Clients Say</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="gradient-border">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <User className="w-12 h-12 text-msk-yellow mr-4" />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
