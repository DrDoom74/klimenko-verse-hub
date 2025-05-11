
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Обо мне</h2>
          <div className="w-20 h-1 bg-brand-purple mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Профессиональный путь</h3>
            <p className="text-gray-700 mb-4">
              Более 8 лет опыта в сфере тестирования и QA. Прошел путь от младшего тестировщика до ведущего QA Engineer и тренера по тестированию.
            </p>
            <p className="text-gray-700 mb-4">
              Разработал и провел множество тренингов по тестированию для сотен студентов. Создал авторские курсы по функциональному, API и мобильному тестированию.
            </p>
            <p className="text-gray-700">
              Работал с различными командами разработки и продуктами — от мобильных приложений до высоконагруженных веб-сервисов и AI-решений.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Мои ценности</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="mr-3 mt-1">
                  <div className="w-2 h-2 rounded-full bg-brand-purple"></div>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">Практический подход:</span> Обучаю на основе реальных задач и проектов
                </p>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1">
                  <div className="w-2 h-2 rounded-full bg-brand-purple"></div>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">Качество:</span> Не ищу компромиссов, когда речь идет о стандартах тестирования
                </p>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1">
                  <div className="w-2 h-2 rounded-full bg-brand-purple"></div>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">Актуальность:</span> Постоянно изучаю новые методики и инструменты
                </p>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1">
                  <div className="w-2 h-2 rounded-full bg-brand-purple"></div>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">Эффективность:</span> Помогаю командам находить оптимальный баланс между скоростью и качеством
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
