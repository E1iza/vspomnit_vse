import mainImg from '../assets/principles/main.jpg'
import icon1 from '../assets/principles/icon1.svg'
import icon2 from '../assets/principles/icon2.svg'
import icon3 from '../assets/principles/icon3.svg'

const incentives = [
  {
    name: 'Гуманная педагогика',
    imageSrc: icon1,
    description: "В работе с подростками мы применяем следующие педагогические ценности: уважение личности",
  },
  {
    name: 'Самостоятельность и адаптивность',
    imageSrc: icon2,
    description: "Ночуем в палатках и самостоятельно организовываем кемпинговую зону.\n" +
      "Каждый имеет зоны ответственности, дежурств и обязанностей, " +
      "что формирует дисциплину, взаимопомощь и способность быстро адаптироваться к внешним условиям.",
  },
  {
    name: 'Обучение через дело',
    imageSrc: icon3,
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
              <p className="mt-4 text-gray-500 text-lg">
                Мы воспитываем в подростках активную позицию и неравнодушное отношение к будущему, объединяя людей из разных регионов страны.
                Каждая экспедиция &mdash; это уникальный маршрут, в котором мы исследуем новые уголки России: от Карельской республики до Алтайского края, от Камчатских хребтов и до Байкальских глубин.
              </p>
            </div>
            <img
              alt=""
              src={mainImg}
              className="aspect-3/2 w-full rounded-lg bg-gray-100 object-cover"
            />
          </div>
          <h3 className="text-4xl font-bold tracking-tight text-gray-700 mt-32">
            Мы основываемся на следующих принципах
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
