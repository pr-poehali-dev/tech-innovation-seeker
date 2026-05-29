export default function Featured() {
  const advantages = [
    { title: "Логопед", desc: "Коррекция речевых нарушений у детей и взрослых" },
    { title: "Дефектолог", desc: "Помощь детям с задержкой психического развития" },
    { title: "Сурдопедагог", desc: "Работа с детьми с нарушениями слуха" },
    { title: "Тифлопедагог", desc: "Образование и развитие детей с нарушениями зрения" },
    { title: "Олигофренопедагог", desc: "Обучение детей с интеллектуальными нарушениями" },
    { title: "Тьютор", desc: "Индивидуальное сопровождение детей с ОВЗ" },
  ];

  return (
    <div id="about" className="min-h-screen px-6 py-20 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-500">О направлении</h3>
        <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 leading-tight mb-6 max-w-3xl">
          Специальное (дефектологическое) образование — профессия помощи и призвания
        </h2>
        <p className="text-lg text-neutral-600 leading-relaxed mb-16 max-w-2xl">
          Направление готовит специалистов, способных создавать условия для развития, обучения и социализации детей 
          с ограниченными возможностями здоровья. Вы научитесь работать с разными категориями особенных детей, 
          владеть современными методами коррекции и помогать каждому ребёнку найти свой путь.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200">
          {advantages.map((item) => (
            <div key={item.title} className="bg-white p-8 hover:bg-neutral-50 transition-colors duration-300">
              <div className="w-8 h-px bg-neutral-900 mb-6" />
              <h4 className="text-lg font-semibold text-neutral-900 mb-2">{item.title}</h4>
              <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 lg:p-12 bg-neutral-900 text-white">
          <h3 className="uppercase text-neutral-400 text-sm tracking-wide mb-4">Перспективы трудоустройства</h3>
          <p className="text-xl lg:text-3xl leading-relaxed max-w-4xl">
            Выпускники востребованы в коррекционных школах, детских садах, реабилитационных центрах, 
            психолого-педагогических службах и частных практиках по всей России.
          </p>
        </div>
      </div>
    </div>
  );
}
