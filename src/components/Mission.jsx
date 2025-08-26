export default function Mission() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-4xl">
          <p className="text-base/7 font-semibold text-gray-500 dark:text-indigo-400">О проекте</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-cyan-700 sm:text-5xl dark:text-white">
            Экспедиции &laquo;Вспомнить всё&raquo; &mdash;
          </h1>
          <p className="mt-6 text-xl/8 text-balance text-gray-700 dark:text-gray-300">
            это любовь к родине через познание и дело.
          </p>
        </div>
        <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          <div className="lg:pr-8">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-500 dark:text-white">
              Наша миссия
            </h2>
            <p className="mt-6 text-base/7 text-gray-600 dark:text-gray-400">
              Проект &laquo;Вспомнить всё&raquo; направлен на знакомство подростков и молодёжи со своей страной
              через деятельное участие в сохранении исторической и культурной памяти при взаимодействии с волонтёрскими проектами.

            </p>
            <p className="mt-8 text-base/7 text-gray-600 dark:text-gray-400">
              Для нас история - это не только про учебники и музеи, а в первую очередь про личный опыт соприкосновения с прошлым через общее дело,
              которое преображает настоящее и формирует неравнодушное отношение к своей стране.
            </p>
          </div>
          <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
            <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 xl:gap-8">
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 dark:shadow-none dark:outline-white/10">
                <img
                  alt="1"
                  src={'/src/assets/mission/mission1.jpg'}
                  className="block size-full object-cover"
                />
              </div>
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40 dark:shadow-none dark:outline-white/10">
                <img
                  alt=""
                  src={'/src/assets/mission/mission2.jpg'}
                  className="block size-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 dark:shadow-none dark:outline-white/10">
                <img
                  alt=""
                  src={'/src/assets/mission/mission3_2.jpg'}
                  className="block size-full object-cover"
                />
              </div>
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40 dark:shadow-none dark:outline-white/10">
                <img
                  alt=""
                  src={'/src/assets/mission/mission4.jpg'}
                  className="block size-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="max-lg:mt-16 lg:col-span-1">
            <p className="text-xl font-semibold text-gray-500 dark:text-gray-400">Путь проекта</p>
            <hr className="mt-2 border-t border-gray-200 dark:border-gray-700" />
            <dl className="mt-4 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4 dark:border-gray-700">
                <dt className="text-sm/6 text-gray-600 dark:text-gray-400">Старт проекта</dt>
                <dd className="order-first text-6xl font-semibold tracking-tight text-cyan-700 dark:text-white">
                  2010<span className='text-4xl'> г.</span>
                </dd>
              </div>
              <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4 dark:max-sm:border-gray-700">
                <dt className="text-sm/6 text-gray-600 dark:text-gray-400">Экспедиций проведено</dt>
                <dd className="order-first text-6xl font-semibold tracking-tight text-cyan-700 dark:text-white">
                  <span>8</span>
                </dd>
              </div>
              <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4 dark:border-gray-700">
                <dt className="text-sm/6 text-gray-600 dark:text-gray-400">Лет опыта</dt>
                <dd className="order-first text-6xl font-semibold tracking-tight text-cyan-700 dark:text-white">
                  <span>15</span>
                </dd>
              </div>
              <div className="flex flex-col gap-y-2">
                <dt className="text-sm/6 text-gray-600 dark:text-gray-400">Человек приняли участие в проекте</dt>
                <dd className="order-first text-6xl font-semibold tracking-tight text-cyan-700 dark:text-white">
                  <span>200+</span>
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </div>
    </div>
  )
}
