import {useState} from "react";

const products = [
  {
    id: 1,
    description: 'Петя научился ставить палатку',
    imageSrc: '/src/assets/experience/image1.png',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 2,
    description: 'Петя научился ставить палатку',
    imageSrc: '/src/assets/experience/image2.png',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 3,
    description: 'Петя научился ставить палатку',
    imageSrc: '/src/assets/experience/image3.png',
    imageAlt: 'Brass scissors with geometric design, black steel finger holes, and included upright brass stand.',
  },
  {
    id: 4,
    description: 'Петя научился ставить палатку',
    imageSrc: '/src/assets/experience/image4.png',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 5,
    description: 'Петя научился ставить палатку',
    imageSrc: '/src/assets/experience/image5.png',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 6,
    description: 'Петя научился ставить палатку',
    imageSrc: '/src/assets/experience/image6.png',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 7,
    description: 'Петя научился ставить палатку',
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

        <div className="grid grid-cols-1 mt-24">
          {products.map((product) => (
            <div key={product.id}
               // onMouseEnter={() => setIsShowText(product.id)}
               // onMouseLeave={() => setIsShowText(false)}
               className={`
                flex justify-between relative ${product.id % 2 === 0 ? 'flex-row-reverse' : ''}
            `}>
              <div className="flex flex-1/3 justify-center items-center p-0">
                <p
                className="mt-1 text-base text-gray-500 italic text-center">
                {product.description}
                </p>
              </div>
                <div
                  className="hexagon flex-2/3 w-full h-full overflow-hidden relative"
                  style={{
                    clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
                  }}
                >
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="object-cover"
                  />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
