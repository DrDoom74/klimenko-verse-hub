
import React from 'react';
import { Linkedin, Youtube, MessageSquare, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Алексей Клименко</h3>
            <p className="text-gray-400 mb-6">
              QA Engineer и тренер с более чем 8-летним опытом в сфере тестирования программного обеспечения.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.linkedin.com/in/alexey-klimenko/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@AKlimenko" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://t.me/QA_AKlimenko" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <MessageSquare className="h-5 w-5" />
              </a>
              <a href="https://boosty.to/aklimenko" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Ссылки</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Обо мне</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Услуги</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Проекты</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Проекты</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://coreapp.ai/app/player/course/677640bd9e77c5240a881b6b" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Онлайн-курсы
                </a>
              </li>
              <li>
                <a href="https://trackhabits.ru/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Track Habits
                </a>
              </li>
              <li>
                <a href="https://t.me/qa_aklimenko_reviews" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Отзывы студентов
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500">© {currentYear} Алексей Клименко. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
