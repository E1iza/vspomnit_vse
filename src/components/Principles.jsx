const incentives = [
  {
    name: 'Гуманная педагогика',
    imageSrc: '/src/assets/principles/icon1.svg',
    description: "В работе с подростками разделяем и применяем педагогические ценности, описанные в трудах следующих авторов: " +
      "Януш Корчак, Людмила Петрановская, Симон Соловейчик, Василий Зеньковский и других.",
  },
  {
    name: 'Самостоятельность и адаптивность',
    imageSrc: '/src/assets/principles/icon2.svg',
    description: "Ночуем в палатках и самостоятельно организовываем кемпинговую зону.\n" +
      "Каждый имеет зоны ответственности, дежурств и обязанностей, " +
      "что формирует дисциплину, взаимопомощь и способность быстро адаптироваться к внешним условиям.",
  },
  {
    name: 'Обучение через дело',
    imageSrc: '/src/assets/principles/icon3.svg',
    description:
      "В ходе экспедиции ребята учатся коммуникациям друг с другом, приобретают навык работы в команде, " +
      "умение анализировать информацию и принимать решения, а также навыки походной жизни.",
  },
]

export default function Principles() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <h2 className="text-5xl font-bold tracking-tight text-cyan-700">
                Уникальность нашего проекта
              </h2>
              <p className="mt-4 text-gray-500">
                Через осуществление нашей миссии мы воспитываем в подростках активную позицию и даем опыт участия в жизни своей страны.
                Мы не «застываем» на одном маршруте год за годом, а каждый сезон открываем новые уголки от Карельской республики и до Алтайского края,
                объединяя в экспедиции людей из разных регионов нашей страны.
                Каждое новое поколение «Вспомнить все» расширяет географию и тематику экспедиций, сохраняя дух познания и созидания.
              </p>
            </div>
            <img
              alt=""
              src={'/src/assets/principles/main.jpg'}
              className="aspect-3/2 w-full rounded-lg bg-gray-100 object-cover"
            />
          </div>
          <h3 className="text-4xl font-bold tracking-tight text-gray-700 mt-32">
            В нашей работе мы основываемся на следующих принципах
          </h3>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:shrink-0">
                  <img alt="" src={incentive.imageSrc} className="size-16" />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
