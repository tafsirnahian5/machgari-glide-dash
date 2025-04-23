
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { MessageSquare, X, Send } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

type ChatMessage = {
  id: string;
  content: string;
  sender: 'user' | 'system';
  timestamp: Date;
};

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      content: "Hello! I'm your AI assistant. How can I help you today?",
      sender: 'system',
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!chatInput.trim()) return;
    
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: chatInput,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setChatInput('');
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: "Thank you for your message. I'm here to help with any questions about our water quality management services.",
        sender: 'system',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
      toast.success('New message from AI assistant');
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <Button
          className="w-14 h-14 rounded-full p-0 shadow-lg bg-machgari-600 hover:bg-machgari-700"
          onClick={() => setIsOpen(true)}
        >
          <MessageSquare className="h-6 w-6 text-white" />
          <span className="sr-only">Open Chat</span>
          <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
        </Button>
      ) : (
        <Card className="w-80 md:w-96 shadow-xl">
          <div className="bg-machgari-600 text-white p-4 flex items-center justify-between rounded-t-lg">
            <h3 className="font-semibold">Chat with AI Assistant</h3>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 text-white hover:bg-machgari-700" 
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="h-80 overflow-y-auto p-4 flex flex-col gap-3">
            {messages.map((message) => (
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
          
          <form onSubmit={handleSendMessage} className="border-t p-3 flex gap-2">
            <Input 
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow"
            />
            <Button type="submit" size="icon" disabled={!chatInput.trim()} className="bg-machgari-600 hover:bg-machgari-700">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </Card>
      )}
    </div>
  );
};

export default LiveChat;
