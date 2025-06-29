
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
              С 2017 года работаю в сфере тестирования ПО. Прошел путь от младшего тестировщика до QA лида, в настоящий момент работаю QA-инженером в одной из крупнейших IT-компаний России — Ozon Tech. Параллельно занимаюсь обучением и менторством: я преподавал курс «QA Engineer. Basic» в Otus, создал собственный интенсив по тестированию API, а также провожу консультации, ревью резюме и пробные собеседования.
            </p>
            <p className="text-gray-700 mb-4">
              За это время я обучил множество начинающих специалистов, помог им разобраться в практике функционального тестирования, работе с API, HTTP, Postman, Swagger, DevTools, а также основам автоматизации на Python (Selenium, Pytest, Requests, Allure). Я создаю обучающие тренажёры для Junior QA, которые помогают прокачивать навыки анализа требований, проектирования тестов и поиска багов.
            </p>
            <p className="text-gray-700">
              Работал над различными типами продуктов: веб-приложениями, API-сервисами, высоконагруженными backend-системами, а также портируемым на OpenVMS open source ПО. Хорошо разбираюсь в теории тестирования, инфраструктуре (Docker, VDS, nginx, CI/CD), умею разворачивать и поддерживать проекты, с которыми работают мои студенты.
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
                  <span className="font-semibold">Практика для закрепления теории.</span> Учу на реальном ПО, API и тренажерах.
                </p>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1">
                  <div className="w-2 h-2 rounded-full bg-brand-purple"></div>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">Просто о сложном.</span> Объясняю темы комплексно, декомпозируя и приводя простые примеры.
                </p>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1">
                  <div className="w-2 h-2 rounded-full bg-brand-purple"></div>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">Актуальность.</span> Следую за трендами и адаптирую обучение под реальные требования рынка.
                </p>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1">
                  <div className="w-2 h-2 rounded-full bg-brand-purple"></div>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">Результат.</span> Мне важно, чтобы ученик понял материал, применил и стал увереннее как специалист.
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
