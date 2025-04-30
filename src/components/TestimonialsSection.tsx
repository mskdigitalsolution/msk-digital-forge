
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { User, Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

    // Set up real-time listener for new approved testimonials
    const channel = supabase
      .channel('public:testimonials')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'testimonials',
          filter: 'approved=eq.true'
        },
        (payload) => {
          // Add new testimonial to the list
          const newTestimonial = payload.new as Testimonial;
          setTestimonials(prev => [newTestimonial, ...prev]);
        }
      )
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'testimonials',
          filter: 'approved=eq.true'
        },
        (payload) => {
          // Update testimonial in the list if it exists
          const updatedTestimonial = payload.new as Testimonial;
          setTestimonials(prev => 
            prev.map(t => t.id === updatedTestimonial.id ? updatedTestimonial : t)
          );
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
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
              rating >= star ? "text-[#9b87f5] fill-[#9b87f5]" : "text-gray-400"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-b from-[#1A1F2C]/80 to-[#0F172A]/90">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-tech font-bold tracking-wide text-transparent bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA] bg-clip-text mb-3 text-center">
          Client Testimonials
        </h2>
        <p className="text-xl text-[#8E9196] max-w-2xl mx-auto text-center mb-12">
          What Our Clients Say
        </p>
        
        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#9b87f5]"></div>
          </div>
        ) : (
          <>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-gradient-to-br from-[#9b87f5]/30 to-[#D6BCFA]/10 blur-xl -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-br from-[#7E69AB]/20 to-[#D6BCFA]/5 blur-xl -z-10"></div>
              
              <Carousel className="w-full">
                <CarouselContent>
                  {displayedTestimonials.map((testimonial) => (
                    <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 px-2">
                      <Card className="bg-gradient-to-br from-[#222233] to-[#1A1F2C] rounded-lg shadow-xl border border-[#7E69AB]/20 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                            <div className="bg-[#1A1F2C] rounded-full p-2 mr-4 border border-[#7E69AB]/30">
                              <User className="w-8 h-8 text-[#9b87f5]" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-[#D6BCFA]">{testimonial.name}</h3>
                              <p className="text-sm text-[#8E9196]">{testimonial.project_name || ""}</p>
                            </div>
                          </div>
                          {renderStars(testimonial.rating)}
                          <p className="text-[#8E9196]">{testimonial.feedback}</p>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0 bg-[#1A1F2C] border-[#7E69AB]/30 text-[#9b87f5]" />
                <CarouselNext className="right-0 bg-[#1A1F2C] border-[#7E69AB]/30 text-[#9b87f5]" />
              </Carousel>
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/feedback">
                <Button className="bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] hover:opacity-90 transition-opacity text-white font-medium">
                  Share Your Feedback
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
