
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const FeedbackFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectName: "",
    rating: 0,
    feedback: "",
    allowSharing: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save the form submission to Supabase
      const { error } = await supabase
        .from('testimonials')
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          project_name: formData.projectName || null,
          rating: formData.rating,
          feedback: formData.feedback,
          allow_sharing: formData.allowSharing
        });

      if (error) {
        throw error;
      }

      toast({
        title: "Thanks for your feedback!",
        description: "We appreciate your time and thoughts.",
      });
      
      // Reset the form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectName: "",
        rating: 0,
        feedback: "",
        allowSharing: false,
      });
    } catch (error) {
      console.error("Error submitting feedback:", error);
      toast({
        title: "Something went wrong",
        description: "Failed to submit your feedback. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleRatingClick = (selectedRating: number) => {
    setFormData({ ...formData, rating: selectedRating });
  };
  
  return (
    <section id="feedback" className="py-16 bg-msk-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Leave Your Feedback</h2>
        <p className="section-subtitle">We'd love to hear your thoughts! Help us grow by sharing your experience.</p>
        
        <div className="max-w-3xl mx-auto mt-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2">Name*</label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="Your name"
                disabled={isSubmitting}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block mb-2">Email (Optional)</label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block mb-2">Phone (Optional)</label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Your phone number"
                  disabled={isSubmitting}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="projectName" className="block mb-2">Project Name / Service Taken (Optional)</label>
              <Input
                id="projectName"
                value={formData.projectName}
                onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                placeholder="Website Development, Social Media Management, etc."
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label className="block mb-2">Overall Satisfaction*</label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className="focus:outline-none"
                    onClick={() => handleRatingClick(star)}
                  >
                    <Star
                      className={`h-8 w-8 ${
                        formData.rating >= star
                          ? "text-msk-yellow fill-msk-yellow"
                          : "text-gray-400"
                      }`}
                    />
                  </button>
                ))}
              </div>
              {formData.rating === 0 && (
                <p className="text-sm text-red-400 mt-1">Please select a rating</p>
              )}
            </div>
            
            <div>
              <label htmlFor="feedback" className="block mb-2">Feedback / Testimonial*</label>
              <Textarea
                id="feedback"
                value={formData.feedback}
                onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
                required
                placeholder="How was your experience with us?"
                rows={4}
                disabled={isSubmitting}
              />
            </div>
            
            <div className="flex items-start space-x-3">
              <Checkbox
                id="allowSharing"
                checked={formData.allowSharing}
                onCheckedChange={(checked) => 
                  setFormData({ ...formData, allowSharing: checked as boolean })
                }
              />
              <label htmlFor="allowSharing" className="text-sm cursor-pointer">
                I allow MSK Digital Solution to share my feedback on their website or social media.
              </label>
            </div>
            
            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting || formData.rating === 0}
            >
              {isSubmitting ? "Submitting..." : "Submit Feedback"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FeedbackFormSection;
