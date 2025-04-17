
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";

const AboutContact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll be in touch soon.");
  };

  return (
    <section id="about" className="container mx-auto py-16 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* About Us */}
        <div>
          <h2 className="text-3xl font-bold mb-6">About MachGari</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Founded in 2010, MachGari has grown to become a leading name in the fishing industry, 
            specializing in both traditional and innovative aquaculture techniques that prioritize 
            sustainability and quality.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            Our fleet of modern vessels equipped with cutting-edge technology enables us to provide 
            the freshest seafood while minimizing environmental impact. We believe in responsible 
            fishing and take pride in our certification for sustainable practices.
          </p>
          <Button 
            className="bg-machgari-600 hover:bg-machgari-700 text-white"
            size="lg"
          >
            Find Out More
          </Button>

          <div className="mt-12">
            <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Where do you source your fish from?</AccordionTrigger>
                <AccordionContent>
                  Our fish comes from both sustainably managed wild fisheries and our own 
                  aquaculture farms, which are regularly inspected for environmental compliance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Do you deliver to residential addresses?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer both wholesale delivery to restaurants and markets, as well as 
                  residential delivery through our online store with same-day options available.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What sustainability certifications do you have?</AccordionTrigger>
                <AccordionContent>
                  We're proud to hold certifications from the Marine Stewardship Council (MSC), 
                  Aquaculture Stewardship Council (ASC), and Global G.A.P. for our commitment to 
                  sustainable practices.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Get in Touch</CardTitle>
              <CardDescription>
                Have questions or interested in our services? Send us a message and we'll get back to you shortly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Input id="subject" placeholder="How can we help you?" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your inquiry..." 
                    rows={5}
                    required
                  />
                </div>
              
                <div className="pt-2">
                  <Button type="submit" className="w-full bg-machgari-600 hover:bg-machgari-700">
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
            <CardFooter className="bg-muted/50 flex justify-between border-t">
              <div className="text-sm text-muted-foreground">
                <p>Or reach us directly:</p>
                <p className="font-medium">contact@machgari.com</p>
              </div>
              <div className="text-sm text-muted-foreground text-right">
                <p>Phone:</p>
                <p className="font-medium">+1 (555) 123-4567</p>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutContact;
