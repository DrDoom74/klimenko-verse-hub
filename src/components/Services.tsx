
import React from 'react';
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Обучение тестированию",
      description: "Индивидуальное и групповое обучение QA с фокусом на практические задачи и реальные проекты.",
      items: [
        "Курсы для начинающих QA-инженеров",
        "Специализированные тренинги по API тестированию",
        "Обучение мобильному тестированию",
        "Воркшопы по автоматизации тестирования"
      ],
      action: "Узнать программу",
      link: "https://boosty.to/aklimenko"
    },
    {
      title: "Консультации для QA-специалистов",
      description: "Помощь в профессиональном росте, решении сложных задач и построении карьеры в QA.",
      items: [
        "Карьерное консультирование",
        "Помощь с подготовкой к интервью",
        "Ревью резюме и портфолио",
        "Разбор сложных тестовых кейсов"
      ],
      action: "Записаться на консультацию",
      link: "https://t.me/QA_AKlimenko"
    },
    {
      title: "Аудит процессов тестирования",
      description: "Анализ и оптимизация процессов тестирования и обеспечения качества в проектных командах.",
      items: [
        "Оценка текущих процессов QA",
        "Разработка стратегии тестирования",
        "Внедрение практик автоматизации",
        "Оптимизация процессов обеспечения качества"
      ],
      action: "Заказать аудит",
      link: "https://t.me/QA_AKlimenko"
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Мои услуги</h2>
          <div className="w-20 h-1 bg-brand-purple mx-auto mb-8"></div>
          <p className="text-gray-700">
            Комплексные решения для обучения, развития и оптимизации процессов тестирования
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold mb-4 text-brand-purple">{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              
              <ul className="mb-6 space-y-2">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="mr-3 mt-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-purple"></div>
                    </div>
                    <p className="text-gray-700 text-sm">{item}</p>
                  </li>
                ))}
              </ul>
              
              <Button asChild variant="outline" className="w-full">
                <a href={service.link} target="_blank" rel="noopener noreferrer">{service.action}</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
