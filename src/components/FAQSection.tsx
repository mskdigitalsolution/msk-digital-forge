
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How long does a website take to build?",
      answer: "Typically, we complete a website within 2-4 weeks, depending on the complexity and your feedback timeline.",
    },
    {
      question: "What social media platforms do you manage?",
      answer: "We specialize in managing Facebook, Instagram, LinkedIn, and Twitter. We can customize our services based on your target audience.",
    },
    {
      question: "How do we get started?",
      answer: "Simply fill out our contact form or click the 'Get a Free Consultation' button. We'll schedule a call to discuss your needs and create a tailored plan.",
    },
  ];

  return (
    <section id="faq" className="py-16 bg-msk-darker">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">Got Questions? We've Got Answers</p>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
