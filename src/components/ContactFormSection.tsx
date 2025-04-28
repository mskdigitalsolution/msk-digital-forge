
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { MessageSquare, Mail, Phone } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save the form submission to Supabase
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: formData.name,
          email: formData.email,
          business_type: formData.businessType,
          message: formData.message
        });

      if (error) {
        throw error;
      }

      toast({
        title: "Thanks for reaching out!",
        description: "We've received your message and will get back to you soon.",
      });
      
      // Reset the form after successful submission
      setFormData({ name: "", email: "", businessType: "", message: "" });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast({
        title: "Something went wrong",
        description: "Failed to submit your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-msk-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's Discuss Your Project</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-msk-yellow" />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-msk-yellow" />
                <p>contact@mskdigital.com</p>
              </div>
              <div className="flex items-center gap-4">
                <MessageSquare className="w-6 h-6 text-msk-yellow" />
                <p>WhatsApp: +1 (555) 123-4567</p>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2">Name</label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="Your name"
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                placeholder="your@email.com"
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label htmlFor="businessType" className="block mb-2">Business Type</label>
              <Input
                id="businessType"
                value={formData.businessType}
                onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                placeholder="What's your business type?"
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2">Project Details</label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                placeholder="Tell us about your project"
                rows={4}
                disabled={isSubmitting}
              />
            </div>
            
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
