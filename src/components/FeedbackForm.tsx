
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }).optional().or(z.literal("")),
  phone: z.string().optional().or(z.literal("")),
  projectName: z.string().optional().or(z.literal("")),
  rating: z.number().min(1, { message: "Please select a rating." }),
  feedback: z.string().min(5, { message: "Feedback must be at least 5 characters." }),
  allowSharing: z.boolean().default(false),
});

const FeedbackForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      projectName: "",
      rating: 0,
      feedback: "",
      allowSharing: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    try {
      // Save the form submission to Supabase
      const { error } = await supabase
        .from('testimonials')
        .insert({
          name: values.name,
          email: values.email || null,
          phone: values.phone || null,
          project_name: values.projectName || null,
          rating: values.rating,
          feedback: values.feedback,
          allow_sharing: values.allowSharing
        });

      if (error) {
        throw error;
      }

      toast({
        title: "Thanks for your feedback!",
        description: "We appreciate your time and thoughts.",
      });
      
      // Reset the form after successful submission
      form.reset({
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
  
  return (
    <div className="bg-gradient-to-br from-[#222233] to-[#1A1F2C] rounded-lg shadow-xl p-8 border border-[#7E69AB]/20 backdrop-blur-sm relative z-10 animate-fade-in">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#D6BCFA] font-medium">Name*</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Your name" 
                    {...field} 
                    disabled={isSubmitting} 
                    className="border-[#7E69AB]/30 bg-[#1A1F2C]/50 focus:border-[#9b87f5] transition-all"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#D6BCFA] font-medium">Email (Optional)</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="your@email.com" 
                      {...field} 
                      disabled={isSubmitting} 
                      className="border-[#7E69AB]/30 bg-[#1A1F2C]/50 focus:border-[#9b87f5] transition-all"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#D6BCFA] font-medium">Phone (Optional)</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your phone number" 
                      {...field} 
                      disabled={isSubmitting} 
                      className="border-[#7E69AB]/30 bg-[#1A1F2C]/50 focus:border-[#9b87f5] transition-all"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="projectName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#D6BCFA] font-medium">Project Name / Service Taken (Optional)</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Website Development, Social Media Management, etc." 
                    {...field} 
                    disabled={isSubmitting} 
                    className="border-[#7E69AB]/30 bg-[#1A1F2C]/50 focus:border-[#9b87f5] transition-all"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#D6BCFA] font-medium">Overall Satisfaction*</FormLabel>
                <FormControl>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className="focus:outline-none transition-transform hover:scale-110"
                        onClick={() => form.setValue("rating", star)}
                      >
                        <Star
                          className={`h-8 w-8 transition-all ${
                            field.value >= star
                              ? "text-[#9b87f5] fill-[#9b87f5]"
                              : "text-gray-400"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="feedback"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#D6BCFA] font-medium">Feedback / Testimonial*</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="How was your experience with us?" 
                    rows={4} 
                    {...field} 
                    disabled={isSubmitting} 
                    className="border-[#7E69AB]/30 bg-[#1A1F2C]/50 focus:border-[#9b87f5] transition-all resize-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="allowSharing"
            render={({ field }) => (
              <FormItem className="flex items-start space-x-3">
                <FormControl>
                  <Checkbox 
                    checked={field.value} 
                    onCheckedChange={field.onChange} 
                    className="border-[#7E69AB] data-[state=checked]:bg-[#9b87f5] data-[state=checked]:border-[#9b87f5]"
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm text-[#8E9196]">
                    I allow MSK Digital Solution to share my feedback on their website or social media.
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
          
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] hover:opacity-90 transition-opacity text-white font-medium"
            disabled={isSubmitting || form.getValues("rating") === 0}
          >
            {isSubmitting ? "Submitting..." : "Submit Feedback"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default FeedbackForm;
