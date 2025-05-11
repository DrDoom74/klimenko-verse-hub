
import React from 'react';

const Expertise = () => {
  const expertiseItems = [
    {
      title: "Функциональное тестирование",
      description: "Создание тест-кейсов, проведение регрессионного тестирования и выявление функциональных дефектов в различных типах приложений.",
    },
    {
      title: "API тестирование",
      description: "Тестирование REST и GraphQL API, автоматизация проверок API с использованием Postman и других инструментов.",
    },
    {
      title: "Мобильное тестирование",
      description: "Тестирование приложений для iOS и Android, включая специфические проверки для мобильных устройств.",
    },
    {
      title: "Тестирование веб-приложений",
      description: "Проверка UI/UX, кросс-браузерное и кроссплатформенное тестирование сложных веб-сервисов.",
    },
    {
      title: "Автоматизация тестирования",
      description: "Создание фреймворков автоматизированного тестирования с использованием Selenium, Cypress, Playwright и других инструментов.",
    },
    {
      title: "Тестирование производительности",
      description: "Анализ производительности приложений, выявление узких мест и проблем масштабируемости.",
    }
  ];

  return (
    <section id="expertise" className="section-padding bg-gray-50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Моя экспертиза</h2>
          <div className="w-20 h-1 bg-brand-purple mx-auto mb-8"></div>
          <p className="text-gray-700">
            Более 8 лет опыта в различных областях тестирования программного обеспечения
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 mb-4">
                <div className="w-6 h-6 rounded-full bg-brand-purple"></div>
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
