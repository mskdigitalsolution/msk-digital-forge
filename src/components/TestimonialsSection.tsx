
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { User, Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Testimonial {
  id: string;
  name: string;
  project_name: string | null;
  rating: number;
  feedback: string;
}

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const { data, error } = await supabase
          .from('testimonials')
          .select('id, name, project_name, rating, feedback')
          .eq('approved', true)
          .order('created_at', { ascending: false });
        
        if (error) {
          throw error;
        }

        setTestimonials(data || []);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Fallback testimonials in case no approved ones are available
  const fallbackTestimonials = [
    {
      id: "1",
      name: "John Smith",
      project_name: "Business Owner",
      rating: 5,
      feedback: "Working with MSK Digital Solutions was a game-changer for our business. Their expertise in web design and social media management helped us reach new heights."
    },
    {
      id: "2",
      name: "Sarah Johnson",
      project_name: "Marketing Director",
      rating: 5,
      feedback: "Their attention to detail and creative approach to social media management has significantly improved our online presence."
    }
  ];

  const displayedTestimonials = testimonials.length > 0 ? testimonials : fallbackTestimonials;

  const renderStars = (rating: number) => {
    return (
      <div className="flex mb-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 mr-1 ${
              rating >= star ? "text-msk-yellow fill-msk-yellow" : "text-gray-400"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-16 bg-msk-darker">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Client Testimonials</h2>
        <p className="section-subtitle">What Our Clients Say</p>
        
        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            <p>Loading testimonials...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayedTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="gradient-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <User className="w-12 h-12 text-msk-yellow mr-4" />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.project_name || ""}</p>
                    </div>
                  </div>
                  {renderStars(testimonial.rating)}
                  <p className="text-muted-foreground">{testimonial.feedback}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
