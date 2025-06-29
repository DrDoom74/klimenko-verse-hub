
import React from 'react';
import { Linkedin, Youtube, MessageSquare, Mail, Globe } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/alexey-klimenko/",
      icon: <Linkedin className="h-5 w-5" />
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@AKlimenko",
      icon: <Youtube className="h-5 w-5" />
    },
    {
      name: "Telegram",
      url: "https://t.me/QA_AKlimenko",
      icon: <MessageSquare className="h-5 w-5" />
    },
    {
      name: "Boosty",
      url: "https://boosty.to/aklimenko",
      icon: <Globe className="h-5 w-5" />
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-purple-100 to-blue-100">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Связаться со мной</h2>
          <div className="w-20 h-1 bg-brand-purple mx-auto mb-8"></div>
          <p className="text-gray-700 mb-6">
            Заинтересованы в сотрудничестве или хотите узнать больше о моих услугах?
            Свяжитесь со мной любым удобным способом.
          </p>
        </div>

        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-brand-purple mr-4" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">alexey_klimenko2010@mail.ru</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <MessageSquare className="h-6 w-6 text-brand-purple mr-4" />
                <div>
                  <p className="text-sm text-gray-500">Telegram</p>
                  <a href="https://t.me/QA_AKlimenko" target="_blank" rel="noopener noreferrer" className="font-medium text-brand-purple hover:underline">
                    @QA_AKlimenko
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-center font-medium mb-4">Социальные сети</p>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 border-t border-gray-200">
            <p className="text-center text-gray-700">
              Предпочитаете быструю связь? Напишите мне в{" "}
              <a 
                href="https://t.me/QA_AKlimenko" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-purple hover:underline"
              >
                Telegram
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
