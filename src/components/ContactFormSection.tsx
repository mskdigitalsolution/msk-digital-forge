
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { MessageSquare, Mail, Phone, Instagram } from "lucide-react";
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
    <section id="contact" className="py-16 bg-msk-dark relative overflow-hidden">
      {/* Background tech image */}
      <div className="absolute inset-0 opacity-20 z-0">
        <img 
          src="/lovable-uploads/f3618f79-a676-48f9-9c2f-5fbffe7694c9.png" 
          alt="Tech Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-msk-dark/80 to-msk-dark"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's Discuss Your Project</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-msk-darker/70 backdrop-blur-sm p-8 rounded-lg border border-msk-yellow/10 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-msk-yellow/20 rounded-full">
                  <Phone className="w-6 h-6 text-msk-yellow" />
                </div>
                <p className="text-white/80">0554039909</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-msk-yellow/20 rounded-full">
                  <Mail className="w-6 h-6 text-msk-yellow" />
                </div>
                <p className="text-white/80">mskdigitalsolution@gmail.com</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-msk-yellow/20 rounded-full">
                  <Instagram className="w-6 h-6 text-msk-yellow" />
                </div>
                <p className="text-white/80">@mskdigitalsolution</p>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-msk-darker/70 backdrop-blur-sm p-8 rounded-lg border border-msk-yellow/10 shadow-lg space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-white/80">Name</label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="Your name"
                disabled={isSubmitting}
                className="bg-msk-dark/60 border-msk-blue/30"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 text-white/80">Email</label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                placeholder="your@email.com"
                disabled={isSubmitting}
                className="bg-msk-dark/60 border-msk-blue/30"
              />
            </div>
            
            <div>
              <label htmlFor="businessType" className="block mb-2 text-white/80">Business Type</label>
              <Input
                id="businessType"
                value={formData.businessType}
                onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                placeholder="What's your business type?"
                disabled={isSubmitting}
                className="bg-msk-dark/60 border-msk-blue/30"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 text-white/80">Project Details</label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                placeholder="Tell us about your project"
                rows={4}
                disabled={isSubmitting}
                className="bg-msk-dark/60 border-msk-blue/30"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] hover:opacity-90 text-white" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-10 w-12 h-12 border border-msk-yellow/20 opacity-30 z-0"></div>
      <div className="absolute top-20 right-20 w-8 h-8 border border-msk-yellow/20 opacity-30 z-0"></div>
      <div className="absolute top-1/2 left-20 w-4 h-4 bg-msk-yellow/20 rounded-full opacity-30 z-0"></div>
    </section>
  );
};

export default ContactFormSection;
