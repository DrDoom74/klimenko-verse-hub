
import React from 'react';
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Старт в QA: сопровождение новичков",
      description: "Если вы только осваиваете тестирование — помогу дойти до оффера и уверенного старта в профессии.",
      items: [
        "🎯 Диагностика текущего уровня. Понимаем, где вы находитесь сейчас и чего не хватает до Junior-уровня.",
        "📘 Индивидуальный план развития (ИПР). Подберу необходимые темы, материалы и практику под ваши цели и возможности.",
        "👨‍💻 Обучение и менторство. Провожу обучающие консультацию, проверяю задания, помогаю вырасти в уверенного Junior QA.",
        "💼 Поддержка до оффера. Ревью резюме, помощь с откликами, подготовка к собеседованиям и постоянная поддержка."
      ],
      pricing: "Стоимость: 40 000₽ (возможна оплата в рассрочку)",
      action: "Узнать детали",
      link: "https://t.me/QA_AKlimenko"
    },
    {
      title: "Консультации для QA-специалистов",
      description: "Помогаю решить практические задачи, прокачать навыки и выйти на следующий уровень в профессии.",
      items: [
        "📈 Карьерная навигация. Разберём, куда двигаться: ручное тестирование, автоматизация или менеджмент.",
        "🧠 Разбор сложных кейсов. Помогу с тестированием веба, API, автоматизацией, выстраиванием процессов на проекте.",
        "📄 Ревью резюме и портфолио. Сделаю убедительным и привлекательным для работодателей ваш профессиональный профиль.",
        "🎤 Подготовка к собеседованиям. Тренируемся отвечать на технические вопросы и чувствовать себя уверенно на интервью."
      ],
      pricing: (
        <>
          <div><span className="font-semibold text-brand-purple">Стоимость</span>:</div>
          <div className="ml-4 space-y-1">
            <div>- консультации: 3 500₽ за час</div>
            <div>- mock собеседования: 4 000₽ за ~1.5 часа</div>
          </div>
        </>
      ),
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
      pricing: "Стоимость: 25 000₽",
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
              
              <div className="mb-6 text-gray-800">
                {typeof service.pricing === 'string' ? (
                  <div className="text-lg">
                    <span className="font-semibold text-brand-purple">Стоимость</span>: {service.pricing.split(': ')[1]}
                  </div>
                ) : (
                  <div className="space-y-1 text-sm">
                    {service.pricing}
                  </div>
                )}
              </div>
              
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
