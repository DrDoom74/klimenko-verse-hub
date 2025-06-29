
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Михаил Ф.",
      role: "QA Engineer",
      message: "Выражаю огромную благодарность https://t.me/Doom_t4 за помощь в определении моего текущего уровня навыков и знаний. Алексей провел мок собеседование, в формате максимально приближенном к техническому собеседованию, на основании которого определил темы, требующие дополнительной проработки, а также предоставил подробнейший фидбек с пошаговым планом и точками роста. Кроме того, дал необходимые рекомендации по составлению резюме. В общем и целом, от общения с Алексеем сложилось, впечатление как о человеке ответственном и детально подходящим к решению возникающих вопросов. Алексей всегда на связи, консультирует по любым вопросам, касающимся QA.",
    },
    {
      name: "Artem",
      role: "",
      message: "Прошел курс Интенсив по тестированию АПИ — и это, пожалуй, один из самых вменяемых курсов для новичков, который мне попадался. Всё начинается с базовых вещей: что такое API, чем REST отличается от GraphQL, как не перепутать POST с PUT и зачем вообще нужен Postman. Теория подаётся чётко, по делу и без воды. Вебинары — норм, не засыпаешь, даже если смотришь в записи. в Postman потыкал по полной — к концу курса накатал около 70 тестов, JavaScript напомнили (ну как напомнили... я и не знал, но теперь чуть знаю 😅). Понравилось: легко влиться даже без опыта; хорошие задания — не просто «прочитай», а «сделай»; поддержка адекватная, отвечают, помогают; ощущение, что не просто посмотрел, а реально чему-то научился.",
    },
    {
      name: "Алёна М.",
      role: "QA Engineer",
      message: "Всем привет! Оставлю отзыв о прошедшем своем собеседовании с Алексеем @Doom_t4. В первую очередь большое спасибо Алексею за индивидуальную подготовку к собеседованию. Разобрали много вопросов и по итогу Алексей дал список тем, которые нужно подтянуть (что очень удобно). Понравилось то, что как и на реальных собеседованиях, многие вопросы у Алексея возникали исходя из ответа. Видно, что Алексей заинтересован в результате и даже собеседование длилось дольше, чем оговаривали. Буду с удовольствием обращаться еще!",
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
                  {testimonial.role && <p className="text-sm text-gray-600">{testimonial.role}</p>}
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
