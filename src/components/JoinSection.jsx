import baikal from '../assets/joinExpedition/baikal.jpg'

const benefits = [
  'Уникальный опыт в туризме и краеведении',
  'Участие в создании Большой Байкальской тропы',
  'Посещение самого чистого и глубокого озера на планете ',
  'Развитие навыков командной работы',
  'Знакомство с культурным наследием народов Байкала',
  'Яркие воспоминания и новые знакомства',
]

export default function JoinSection() {
  return (
    <div className="overflow-hidden bg-white py-12 sm:py-16 dark:bg-gray-900">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl ">
          <div className="mx-auto p-6 lg:p-8 flex max-w-2xl flex-col gap-16 bg-white/75 shadow-lg ring-1 ring-gray-900/5 sm:rounded-3xl lg:mx-0 lg:max-w-none lg:flex-row lg:items-center xl:gap-x-10 dark:bg-white/3 dark:shadow-none dark:ring-white/10">
            <img
              alt=""
              src={baikal}
              className="h-96 w-full flex-none rounded-2xl object-cover shadow-none lg:aspect-square lg:h-auto lg:max-w-md dark:shadow-xl"
            />
            <div className="w-full flex-auto">
              <h2 className="text-4xl font-semibold tracking-tight text-pretty text-cyan-700 sm:text-5xl dark:text-white">
                Следующая остановка &mdash; Байкал
              </h2>
              <p className="mt-4 text-lg/8 text-pretty text-gray-600 dark:text-gray-400">
                В первой половине августа отправляйся вместе с нами в живописное место Иркутского края - озеро Байкал!
                Место, которое знаменито не только своей красотой, но и историей.
              </p>
              {/*<h3 className="mt-10 text-base/7 text-gray-800 dark:text-gray-200">*/}
              {/*  Ты получишь:*/}
              {/*</h3>*/}
              <ul
                role="list"
                className="mt-4 grid grid-cols-1 gap-x-8 gap-y-3 text-base/7 text-gray-800 sm:grid-cols-2 dark:text-gray-200"
              >
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-x-3">
                    <div className="w-6 h-6 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0092b8" className="w-full h-full">
                      <path fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                            clipRule="evenodd"/>
                      </svg>
                    </div>
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex">
                <a
                  href="#"
                  className="text-sm/6 font-semibold text-cyan-600 hover:text-cyan-500 dark:text-cyan-400 dark:hover:text-cyan-300"
                >
                  Отправиться в экспедицию
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
            className="aspect-1318/752 w-329.5 flex-none bg-linear-to-r from-[#9fd6fc] to-cyan-300 opacity-50 dark:from-[#80caff] dark:to-[#4f46e5] dark:opacity-20"
          />
        </div>
      </div>
    </div>
  )
}
