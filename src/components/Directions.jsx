export default function Directions() {
  return (
    <div className="relative overflow-hidden bg-white pt-12 sm:py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 max-h-[100vh]">
        <div className="flex flex-col">
          <div>
            <div className="flex flex-col items-center justify-center w-1/2">
              <img
                alt=""
                src={'/src/assets/directions/mountens.svg'}
                className="w-full object-cover"
              />
              <h3 className="text-4xl mb-6 font-semibold tracking-tight text-pretty text-[#1A430B]">туризм</h3>
              <p className="text-xs sm:text-base text-justify text-gray-600 dark:text-gray-200">
                Мы открываем уникальные уголки России, где природа рассказывает свои древние истории.
                От карельских лесов до камчатских вулканов, от алтайских гор до байкальских глубин — каждый маршрут уникален.
                Походный быт учит простым истинам: ценить тепло костра, вкус родниковой воды и красоту звездного неба.
                Пешие походы и сплавы по рекам, велосипедные маршруты и восхождения — каждая экспедиция предлагает новый вызов.
              </p>
            </div>
          </div>
          <div className="flex mt-32">
            <div className="flex-1/2 flex flex-row-reverse relative">
              <p className="text-2xl font-semibold tracking-tight text-pretty text-gray-600 text-center w-3/5">
                Наши поездки включают в себя три направления, которые способствуют глубокому и разностороннему изучению места экспедиции
              </p>
              <img
                alt=""
                src={'/src/assets/directions/traces.svg'}
                className="object-cover absolute bottom-120 w-2/5 -right-40"
              />
            </div>
            <div className="flex-1/2 pl-12 relative -top-64">
              <div className="flex-col flex items-center relative">
                <img
                  alt=""
                  src={'/src/assets/directions/nalichnik.png'}
                  className="w-full object-cover absolute"
                />
                <h3 className="text-4xl mt-36 mb-6 font-semibold tracking-tight text-pretty text-[#552A00]">краеведение</h3>
                <p className="text-xs sm:text-base mx-32 text-gray-600 dark:text-gray-200 text-justify">
                  Краеведение в наших экспедициях подразумевает изучение природы, историю и культуру конкретного региона,
                  собирая материалы через полевые экспедиции, архивные исследования и интервью с местными жителями.
                  Его цель — сохранение и популяризация местного наследия, поддержка региональной идентичности, охрана памятников и развитие туризма.
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-2/3 relative -top-112">
            <div className="flex-col flex relative w-1/3">
              <img
                alt=""
                src={'/src/assets/directions/volunteering.png'}
                className="object-cover left-0 bottom-10"
              />
              <h3 className="text-4xl mt-4 font-semibold tracking-tight text-pretty text-cyan-700">волонтерство</h3>
            </div>
            <div className="w-2/3 items-end flex">
              <p className="text-xs sm:text-base text-gray-600 dark:text-gray-200 text-justify">
                Мы меняем мир к лучшему, объединяя усилия с другими сообществами для реализации волонтерских проектов,
                оказывая конкретную помощь посещаемому региону, бережно сохраняя культурное наследие.
                Для нас волонтёрство — это диалог с прошлым, который помогает преобразовывать будущее.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
