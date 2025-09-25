import {useState} from "react";

const products = [
  {
    id: 1,
    description: 'Денис узнал как работает альпинистская страховка и перестал бояться высоты',
    imageSrc: '/src/assets/experience/image1.png',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 2,
    description: 'Миша научился управлять байдаркой и доплыл до уникальных островов Карелии',
    imageSrc: '/src/assets/experience/image2.png',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 3,
    description: 'Вова увидел снег летом и рассказал об этом своим друзьям',
    imageSrc: '/src/assets/experience/image3.png',
    imageAlt: 'Brass scissors with geometric design, black steel finger holes, and included upright brass stand.',
  },
  {
    id: 4,
    description: 'Коля сплавился на рафте по реке Кокса и снял об этом влог',
    imageSrc: '/src/assets/experience/image4.png',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 5,
    description: 'Ваня выполнял обязанности шеф-повара и познал все тонкости полевой кухни',
    imageSrc: '/src/assets/experience/image5.png',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 6,
    description: 'Сережа и Кирилл покорили вершины Алтайского Края и узнали многое о горных породах',
    imageSrc: '/src/assets/experience/image6.png',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 7,
    description: 'Варя и Кристина побывали в Архангельской области и научились народным ремеслам Русского Севера',
    imageSrc: '/src/assets/experience/image7.png',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
]

export default function ExperienceList() {
  const [isShowText, setIsShowText] = useState(false);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 id="products-heading" className="w-full text-center text-5xl font-bold tracking-tight text-cyan-700">
          В нашей экспедиции
        </h2>

        <div className="grid grid-cols-1 mt-24 lg:grid-cols-3 gap-0">
          {products.map((product) => (
            <div key={product.id}
               onMouseEnter={() => setIsShowText(product.id)}
               onMouseLeave={() => setIsShowText(false)}
               className={`
                flex justify-between relative ${product.id % 2 === 0 ? 'flex-row-reverse' : ''}
            `}>
              <div className={`flex flex-1/3 justify-center items-center ${product.id % 2 === 0 ? 'pl-4' : 'pr-4'} lg:hidden`}>
                <p
                className={`text-sm sm:text-xl text-gray-500 ${product.id % 2 === 0 ? 'text-right' : ''}`}>
                {product.description}
                </p>
              </div>
              <div className={`
                relative flex-2/3 p-0 m-0
                ${product.id === 1 || product.id === 4 
                ? 'top-1/2 left-1/4' : ''} 
                ${product.id === 3 || product.id === 6
                ? 'top-1/2 right-1/4' : ''} 
                ${product.id === 7 
                ? 'left-2/2' : ''}
                `}>
                <div
                  className={`w-full h-full overflow-hidden p-1 sm:p-2 bg-cyan-700 m-0 z-10 flex items-center justify-center
                  `}
                  style={{
                    clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  }}
                >
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className={`
                      object-cover w-full h-full z-10
                      lg:${isShowText === product.id ? 'hidden' : 'block' }
                    `}
                    style={{
                      clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
                    }}
                  />
                  <div
                    className={`
                      bg-white w-[28vw] h-[24vw] hidden p-12
                      lg:${isShowText === product.id ? 'flex items-center justify-center ' : '' }
                    `}
                    style={{
                      clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
                    }}
                  >
                    <p
                      className={`
                        text-xl text-gray-500 text-center m-0 p-0
                      `}>
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
