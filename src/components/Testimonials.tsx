
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Александр К.",
      role: "Junior QA Engineer",
      message: "Благодаря курсу Алексея я смог успешно пройти собеседование и начать карьеру в тестировании. Особенно ценными были практические задания и обратная связь от Алексея.",
    },
    {
      name: "Екатерина М.",
      role: "Middle QA Engineer",
      message: "Консультации Алексея по API-тестированию помогли мне значительно поднять уровень и получить повышение. Всегда актуальная информация и индивидуальный подход.",
    },
    {
      name: "Дмитрий П.",
      role: "Lead QA",
      message: "Аудит процессов тестирования от Алексея помог нашей команде оптимизировать работу и значительно сократить время на регрессионное тестирование. Рекомендую!",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Отзывы</h2>
          <div className="w-20 h-1 bg-brand-purple mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-purple to-brand-blue rounded-t-lg"></div>
              <div className="text-4xl text-brand-purple/20 font-serif mb-4">"</div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.message}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-brand-purple font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="https://t.me/qa_aklimenko_reviews" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-brand-purple hover:text-brand-blue underline transition-colors"
          >
            Смотреть больше отзывов в Telegram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
