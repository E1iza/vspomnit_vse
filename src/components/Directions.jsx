export default function Directions() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-0">
          <div className="w-full row-start-2 lg:row-start-1 lg:col-span-2 flex flex-col items-center justify-center lg:w-1/2 relative">
            <img
              alt=""
              src={'/src/assets/directions/mountens.svg'}
              className="object-cover"
            />
            <h3 className="text-3xl md:text-4xl mb-6 font-semibold tracking-tight text-pretty text-[#1A430B]">туризм</h3>
            <p className="text-base text-justify text-gray-600 dark:text-gray-200">
              Мы открываем уникальные уголки России, где природа рассказывает свои древние истории.
              От карельских лесов до камчатских вулканов, от алтайских гор до байкальских глубин — каждый маршрут уникален.
              Походный быт учит простым истинам: ценить тепло костра, вкус родниковой воды и красоту звездного неба.
              Пешие походы и сплавы по рекам, велосипедные маршруты и восхождения — каждая экспедиция предлагает новый вызов.
            </p>
            <img
              alt=""
              src={'/src/assets/directions/traces2.svg'}
              className="object-cover absolute top-55 lg:w-32 xl:w-50 lg:-left-20 xl:-left-50 hidden 2xl:block"
            />
          </div>
          <div className="flex row-start-1 w-full lg:row-start-2 items-center justify-center relative">
            <p className="text-2xl font-semibold tracking-tight text-pretty text-gray-600 text-center lg:w-2/3">
              Наши поездки включают в себя три направления, которые способствуют глубокому и разностороннему изучению места экспедиции
            </p>
              <img
                alt=""
                src={'/src/assets/directions/traces.svg'}
                className="object-cover absolute lg:bottom-60 xl:bottom-50 lg:w-62 xl:w-72 lg:-right-40 xl:-right-50 hidden lg:block"
              />
          </div>
          <div className="flex-col row-start-3 flex items-center relative lg:row-start-2">
            <img
              alt=""
              src={'/src/assets/directions/nalichnik.png'}
              className="object-cover"
            />
            <h3 className="text-3xl md:text-4xl -mt-8 mb-6 lg:-mt-12 font-semibold tracking-tight text-pretty text-[#552A00]">краеведение</h3>
            <p className="text-base text-gray-600 dark:text-gray-200 text-justify">
              Краеведение в наших экспедициях подразумевает изучение природы, историю и культуру конкретного региона,
              собирая материалы через полевые экспедиции, архивные исследования и интервью с местными жителями.
              Его цель — сохранение и популяризация местного наследия, поддержка региональной идентичности, охрана памятников и развитие туризма.
            </p>
          </div>
          <div className="flex flex-col justify-center relative lg:col-span-2 lg:row-start-3 lg:w-2/3 lg:flex-col-reverse lg:items-start lg:-top-20">
            <h3 className="text-3xl md:text-4xl mb-6 font-semibold tracking-tight text-pretty text-center text-cyan-700">волонтерство</h3>
            <div className="flex relative items-center sm:items-end gap-4 lg:w-full lg:gap-12 2xl:gap-8">
              <div className="flex-col flex w-1/3 relative">
                <img
                  alt=""
                  src={'/src/assets/directions/volunteering.png'}
                  className="object-cover left-0 bottom-0"
                />
              </div>
              <div className="items-end flex w-2/3 relative lg:-bottom-10">
                <p className="text-base text-gray-600 dark:text-gray-200 text-justify text-balance">
                  Мы меняем мир к лучшему, объединяя усилия с другими сообществами для реализации волонтерских проектов,
                  оказывая конкретную помощь посещаемому региону, бережно сохраняя культурное наследие.
                  Для нас волонтёрство — это диалог с прошлым, который помогает преобразовывать будущее.
                </p>
              </div>
            </div>
            <img
              alt=""
              src={'/src/assets/directions/traces3.svg'}
              className="object-cover absolute bottom-10 lg:w-70 xl:w-84 lg:-right-80 xl:-right-90 hidden lg:block"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
