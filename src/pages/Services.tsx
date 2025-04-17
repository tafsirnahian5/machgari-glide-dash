
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FlaskConical, MessageCircle, X, ChevronRight, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';

interface ServiceCard {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  measurementRanges: string;
  testingFrequency: string;
}

const services: ServiceCard[] = [
  {
    id: 'ph-level',
    title: 'pH Level Monitoring',
    icon: <FlaskConical className="h-8 w-8" />,
    description: 'Continuous monitoring of pH levels to ensure optimal water quality for aquatic life.',
    measurementRanges: 'Ideal Range: 6.5 - 8.5 pH',
    testingFrequency: 'Daily testing recommended'
  },
  {
    id: 'dissolved-oxygen',
    title: 'Dissolved Oxygen Analysis',
    icon: <FlaskConical className="h-8 w-8" />,
    description: 'Measure dissolved oxygen content critical for fish health and survival.',
    measurementRanges: 'Ideal Range: 5 - 8 mg/L',
    testingFrequency: 'Twice daily testing recommended'
  },
  {
    id: 'ammonia',
    title: 'Ammonia Detection',
    icon: <FlaskConical className="h-8 w-8" />,
    description: 'Early detection of toxic ammonia levels that can harm fish populations.',
    measurementRanges: 'Safe Level: < 0.02 mg/L',
    testingFrequency: 'Weekly testing recommended'
  },
  {
    id: 'nitrite-nitrate',
    title: 'Nitrite & Nitrate Testing',
    icon: <FlaskConical className="h-8 w-8" />,
    description: 'Monitor nitrogen cycle compounds that affect water quality and fish health.',
    measurementRanges: 'Nitrite: < 0.1 mg/L, Nitrate: < 50 mg/L',
    testingFrequency: 'Bi-weekly testing recommended'
  },
  {
    id: 'temperature',
    title: 'Temperature Regulation',
    icon: <FlaskConical className="h-8 w-8" />,
    description: 'Maintain optimal temperature ranges for different fish species and environments.',
    measurementRanges: 'Species Dependent: 15°C - 30°C',
    testingFrequency: 'Continuous monitoring recommended'
  },
  {
    id: 'salinity',
    title: 'Salinity Measurement',
    icon: <FlaskConical className="h-8 w-8" />,
    description: 'Monitor salt concentration for brackish water and marine aquaculture systems.',
    measurementRanges: 'Species Dependent: 0 - 35 ppt',
    testingFrequency: 'Daily testing recommended'
  },
  {
    id: 'water-treatment',
    title: 'Water Treatment Solutions',
    icon: <FlaskConical className="h-8 w-8" />,
    description: 'Professional water treatment services to maintain optimal aquaculture conditions.',
    measurementRanges: 'Custom treatment plans available',
    testingFrequency: 'Based on water quality assessment'
  }
];

const faqs = [
  {
    question: "How often should I test my water quality?",
    answer: "Testing frequency depends on the specific parameter and your system. Generally, pH and temperature should be monitored daily, while other parameters like ammonia may be tested weekly."
  },
  {
    question: "What equipment do I need for basic water testing?",
    answer: "For basic testing, we recommend a pH meter, dissolved oxygen meter, ammonia test kit, and thermometer. More advanced testing may require additional specialized equipment."
  },
  {
    question: "How does water quality affect fish health?",
    answer: "Poor water quality can stress fish, reduce growth rates, impair reproduction, and increase susceptibility to disease. Maintaining optimal water parameters is essential for fish health and productivity."
  }
];

type ChatMessage = {
  id: string;
  content: string;
  sender: 'user' | 'system';
  timestamp: Date;
};

const Services = () => {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      content: 'Hello! How can I help you with water quality management today?',
      sender: 'system',
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleCardFlip = (id: string) => {
    if (flippedCard === id) {
      setFlippedCard(null);
    } else {
      setFlippedCard(id);
    }
  };

  const handleChatToggle = () => {
    setChatOpen(!chatOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!chatInput.trim()) return;
    
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: chatInput,
      sender: 'user',
      timestamp: new Date()
    };
    
    setChatMessages(prev => [...prev, userMessage]);
    setChatInput('');
    
    // Simulate typing indication
    setIsTyping(true);
    
    // Simulate response after delay
    setTimeout(() => {
      const responseMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: "Thanks for your message. Our water quality specialist will respond shortly. For immediate assistance, please call our support line at +1-555-123-4567.",
        sender: 'system',
        timestamp: new Date()
      };
      
      setChatMessages(prev => [...prev, responseMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <PageLayout>
      <div className="container mx-auto py-16 px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-machgari-50 dark:bg-machgari-900/30 text-machgari-600 mb-4">
            <FlaskConical className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Water Quality Management</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional water testing and treatment solutions for optimal fish health and aquaculture productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={cn(
                "relative perspective-1000 transition-all duration-500 h-full",
                flippedCard === service.id ? "z-10" : ""
              )}
              style={{ minHeight: '250px' }}
            >
              <div 
                className={cn(
                  "absolute w-full h-full transition-all duration-500 preserve-3d",
                  flippedCard === service.id ? "rotate-y-180" : ""
                )}
              >
                {/* Front Side */}
                <Card className="absolute w-full h-full backface-hidden cursor-pointer">
                  <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center">
                    <div className="mb-4 text-machgari-600">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-grow">
                      {service.description}
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => handleCardFlip(service.id)}
                      className="w-full"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
                
                {/* Back Side */}
                <Card className="absolute w-full h-full backface-hidden rotate-y-180 bg-machgari-50 dark:bg-machgari-900/30 cursor-pointer">
                  <CardContent className="p-6 h-full flex flex-col">
                    <h3 className="text-lg font-semibold mb-4 text-center">{service.title}</h3>
                    
                    <div className="flex-grow space-y-4">
                      <div>
                        <h4 className="font-medium text-sm">Measurement Ranges:</h4>
                        <p className="text-sm text-muted-foreground">{service.measurementRanges}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-sm">Testing Frequency:</h4>
                        <p className="text-sm text-muted-foreground">{service.testingFrequency}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <Button 
                        onClick={() => handleCardFlip(service.id)}
                        className="w-full"
                      >
                        Back to Service
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Live Chat Bubble */}
        <div className="fixed bottom-6 right-6 z-50">
          {!chatOpen ? (
            <Button
              className="w-14 h-14 rounded-full p-0 shadow-lg"
              onClick={handleChatToggle}
            >
              <MessageCircle className="h-6 w-6" />
              <span className="sr-only">Open Chat</span>
              {/* Pulsing animation for notifications */}
              <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
            </Button>
          ) : (
            <div className="bg-background rounded-lg shadow-xl w-80 md:w-96 border overflow-hidden">
              <div className="bg-machgari-600 text-white p-4 flex items-center justify-between">
                <h3 className="font-semibold">Water Quality Support</h3>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 text-white hover:bg-machgari-700" 
                  onClick={handleChatToggle}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Chat Messages */}
              <div className="h-80 overflow-y-auto p-4 flex flex-col gap-3">
                {chatMessages.map((message) => (
                  <div 
                    key={message.id}
                    className={cn(
                      "max-w-[80%] p-3 rounded-lg",
                      message.sender === 'user' 
                        ? "bg-machgari-100 dark:bg-machgari-900/20 ml-auto" 
                        : "bg-muted mr-auto"
                    )}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex space-x-1 bg-muted w-16 p-3 rounded-lg">
                    <div className="w-2 h-2 bg-machgari-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-machgari-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-machgari-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                )}
              </div>
              
              {/* FAQ Accordion (only show if no messages exchanged) */}
              {chatMessages.length <= 1 && !isTyping && (
                <div className="px-4 py-2 border-t">
                  <p className="text-sm font-medium mb-2">Frequently Asked Questions:</p>
                  <div className="space-y-2">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border rounded-md overflow-hidden">
                        <details className="group">
                          <summary className="flex cursor-pointer items-center justify-between bg-muted/50 px-4 py-2 text-sm">
                            {faq.question}
                            <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                          </summary>
                          <div className="px-4 py-2 text-sm text-muted-foreground">
                            {faq.answer}
                          </div>
                        </details>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Chat Input */}
              <form onSubmit={handleSendMessage} className="border-t p-3 flex gap-2">
                <Input 
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow"
                />
                <Button type="submit" size="icon" disabled={!chatInput.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default Services;
