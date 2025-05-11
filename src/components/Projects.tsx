
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Онлайн-курсы по тестированию",
      category: "Обучение",
      description: "Авторские курсы по различным аспектам тестирования программного обеспечения для начинающих и продвинутых QA-инженеров.",
      link: "https://coreapp.ai/app/player/course/677640bd9e77c5240a881b6b",
      linkText: "Перейти к курсам"
    },
    {
      title: "Канал на YouTube",
      category: "Медиа",
      description: "Образовательный контент по тестированию, интервью с экспертами отрасли и обзоры инструментов для QA-специалистов.",
      link: "https://www.youtube.com/@AKlimenko",
      linkText: "Смотреть канал"
    },
    {
      title: "Телеграм-канал",
      category: "Сообщество",
      description: "Полезные материалы и новости из мира тестирования, а также обсуждение актуальных вопросов QA.",
      link: "https://t.me/QA_AKlimenko",
      linkText: "Подписаться"
    },
    {
      title: "Track Habits",
      category: "Проект",
      description: "Приложение для отслеживания привычек и достижения целей с фокусом на простоту использования и продуктивность.",
      link: "https://trackhabits.ru/",
      linkText: "Посетить сайт"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Мои проекты</h2>
          <div className="w-20 h-1 bg-brand-purple mx-auto mb-8"></div>
          <p className="text-gray-700">
            Образовательные и практические проекты, которые я создал для сообщества QA-специалистов
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl card-hover"
            >
              <div className="h-40 bg-gradient-to-r from-brand-purple/20 to-brand-blue/20 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-brand-purple">{project.title}</h3>
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-purple-100 text-brand-purple text-xs font-medium rounded-full mb-4">
                  {project.category}
                </div>
                <p className="text-gray-700 mb-6">{project.description}</p>
                <Button asChild variant="outline" className="w-full flex items-center justify-center gap-2">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.linkText}
                    <ExternalLink size={16} />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild className="btn-primary">
            <a href="https://www.linkedin.com/in/alexey-klimenko/" target="_blank" rel="noopener noreferrer">
              Смотреть все проекты на LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
