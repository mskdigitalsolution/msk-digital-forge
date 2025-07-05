
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const FeedbackForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectName: "",
    rating: 0,
    feedback: "",
    allowSharing: false,
  });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim() || formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    
    if (formData.rating < 1) {
      newErrors.rating = "Please select a rating.";
    }
    
    if (!formData.feedback.trim() || formData.feedback.length < 5) {
      newErrors.feedback = "Feedback must be at least 5 characters.";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('testimonials')
        .insert({
          name: formData.name,
          email: formData.email || null,
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
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectName: "",
        rating: 0,
        feedback: "",
        allowSharing: false,
      });
      setErrors({});
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
  
  return (
    <div className="bg-gradient-to-br from-[#222233] to-[#1A1F2C] rounded-lg shadow-xl p-8 border border-[#7E69AB]/20 backdrop-blur-sm relative z-10 animate-fade-in">
      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label className="block text-[#D6BCFA] font-medium mb-2">Name*</label>
          <Input 
            placeholder="Your name" 
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            disabled={isSubmitting} 
            className="border-[#7E69AB]/30 bg-[#1A1F2C]/50 focus:border-[#9b87f5] transition-all text-white"
          />
          {errors.name && <p className="text-sm text-red-400 mt-1">{errors.name}</p>}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#D6BCFA] font-medium mb-2">Email (Optional)</label>
            <Input 
              type="email" 
              placeholder="your@email.com" 
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              disabled={isSubmitting} 
              className="border-[#7E69AB]/30 bg-[#1A1F2C]/50 focus:border-[#9b87f5] transition-all text-white"
            />
            {errors.email && <p className="text-sm text-red-400 mt-1">{errors.email}</p>}
          </div>
          
          <div>
            <label className="block text-[#D6BCFA] font-medium mb-2">Phone (Optional)</label>
            <Input 
              placeholder="Your phone number" 
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              disabled={isSubmitting} 
              className="border-[#7E69AB]/30 bg-[#1A1F2C]/50 focus:border-[#9b87f5] transition-all text-white"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-[#D6BCFA] font-medium mb-2">Project Name / Service Taken (Optional)</label>
          <Input 
            placeholder="Website Development, Social Media Management, etc." 
            value={formData.projectName}
            onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
            disabled={isSubmitting} 
            className="border-[#7E69AB]/30 bg-[#1A1F2C]/50 focus:border-[#9b87f5] transition-all text-white"
          />
        </div>
        
        <div>
          <label className="block text-[#D6BCFA] font-medium mb-2">Overall Satisfaction*</label>
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className="focus:outline-none transition-transform hover:scale-110"
                onClick={() => setFormData({ ...formData, rating: star })}
              >
                <Star
                  className={`h-8 w-8 transition-all ${
                    formData.rating >= star
                      ? "text-[#9b87f5] fill-[#9b87f5]"
                      : "text-gray-400"
                  }`}
                />
              </button>
            ))}
          </div>
          {errors.rating && <p className="text-sm text-red-400 mt-1">{errors.rating}</p>}
        </div>
        
        <div>
          <label className="block text-[#D6BCFA] font-medium mb-2">Feedback / Testimonial*</label>
          <Textarea 
            placeholder="How was your experience with us?" 
            rows={4} 
            value={formData.feedback}
            onChange={(e) => setFormData({ ...formData, feedback: e.target.value })}
            disabled={isSubmitting} 
            className="border-[#7E69AB]/30 bg-[#1A1F2C]/50 focus:border-[#9b87f5] transition-all resize-none text-white"
          />
          {errors.feedback && <p className="text-sm text-red-400 mt-1">{errors.feedback}</p>}
        </div>
        
        <div className="flex items-start space-x-3">
          <Checkbox 
            checked={formData.allowSharing} 
            onCheckedChange={(checked) => setFormData({ ...formData, allowSharing: checked as boolean })}
            className="border-[#7E69AB] data-[state=checked]:bg-[#9b87f5] data-[state=checked]:border-[#9b87f5]"
          />
          <label className="text-sm text-[#8E9196]">
            I allow MSK Digital Solution to share my feedback on their website or social media.
          </label>
        </div>
        
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] hover:opacity-90 transition-opacity text-white font-medium"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Feedback"}
        </Button>
      </form>
    </div>
  );
};

export default FeedbackForm;
