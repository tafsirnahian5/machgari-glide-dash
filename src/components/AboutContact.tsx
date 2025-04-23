
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AboutContact = () => {
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

        {/* Contact Information */}
        <div className="bg-muted/50 p-6 rounded-lg border">
          <h3 className="text-xl font-bold mb-4">Contact Information</h3>
          <div className="space-y-4">
            <div>
              <p className="font-medium">Email:</p>
              <p className="text-muted-foreground">contact@machgari.com</p>
            </div>
            <div>
              <p className="font-medium">Phone:</p>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>
            <div>
              <p className="font-medium">Address:</p>
              <p className="text-muted-foreground">
                123 Fisherman's Wharf, 
                Coastal City, Marine State 54321
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContact;

