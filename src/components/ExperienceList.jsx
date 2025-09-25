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
  // const [isShowText, setIsShowText] = useState(false);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 id="products-heading" className="w-full text-center text-5xl font-bold tracking-tight text-cyan-700">
          В нашей экспедиции
        </h2>

        <div className="grid grid-cols-1 mt-24">
          {products.map((product) => (
            <div key={product.id}
               // onMouseEnter={() => setIsShowText(product.id)}
               // onMouseLeave={() => setIsShowText(false)}
               className={`
                flex justify-between relative ${product.id % 2 === 0 ? 'flex-row-reverse' : ''}
            `}>
              <div className={`flex flex-1/3 justify-center items-center ${product.id % 2 === 0 ? 'pl-4' : 'pr-4'}  `}>
                <p
                className={`mt-1 text-sm sm:text-xl text-gray-500 ${product.id % 2 === 0 ? 'text-right' : ''}`}>
                {product.description}
                </p>
              </div>
              <div className="relative flex-2/3">
                <div
                  className="w-full h-full overflow-hidden p-1 sm:p-2 bg-cyan-700"
                  style={{
                    clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
                  }}
                >
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="object-cover w-full h-full"
                    style={{
                      clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
