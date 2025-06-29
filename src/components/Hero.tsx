
import React from 'react';
import { Button } from "@/components/ui/button";
import { Linkedin, Youtube, MessageSquare } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Алексей Клименко
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 font-medium gradient-text">
              QA Engineer & Тренер
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Помогаю IT-командам создавать качественные продукты и обучаю специалистов тестированию ПО с практическим подходом.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild className="btn-primary">
                <a href="#contact">Связаться</a>
              </Button>
              <Button asChild variant="outline" className="btn-secondary">
                <a href="#services">Услуги</a>
              </Button>
            </div>
            
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/alexey-klimenko/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://www.youtube.com/@AKlimenko" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="https://t.me/QA_AKlimenko" target="_blank" rel="noopener noreferrer" className="social-icon">
                <MessageSquare className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto shadow-xl">
                <img 
                  src="/lovable-uploads/fe40ffab-ce0d-4147-996a-14daed1604e9.png" 
                  alt="Алексей Клименко"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
