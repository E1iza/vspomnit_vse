import {useState} from "react";

const products = [
  {
    id: 1,
    href: '#',
    description: 'Петя научился ставить палатку',
    imageSrc: '/src/assets/experience/1.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 2,
    href: '#',
    description: '',
    imageSrc: '',
    imageAlt: '',
  },
  {
    id: 3,
    href: '#',
    description: 'Петя научился ставить палатку',
    imageSrc: '/src/assets/experience/1.jpg',
    imageAlt: 'Brass scissors with geometric design, black steel finger holes, and included upright brass stand.',
  },
  {
    id: 4,
    href: '#',
    description: '',
    imageSrc: '',
    imageAlt: '',
  },
  {
    id: 5,
    href: '#',
    description: 'Петя научился ставить палатку',
    imageSrc: '/src/assets/experience/2.jpg',
    imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
  },
  {
    id: 6,
    href: '#',
    description: '',
    imageSrc: '',
    imageAlt: '',
  },
  {
    id: 7,
    href: '#',
    description: 'Петя научился ставить палатку',
    imageSrc: '/src/assets/experience/1.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 8,
    href: '#',
    description: '',
    imageSrc: '',
    imageAlt: '',
  },
  {
    id: 9,
    href: '#',
    description: 'Петя научился ставить палатку',
    imageSrc: '/src/assets/experience/1.jpg',
    imageAlt: 'Brass scissors with geometric design, black steel finger holes, and included upright brass stand.',
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

        <div className="grid grid-cols-3 gap-4 mt-24 grid-rows-auto">
          {products.map((product) => (
            <div key={product.id}
               onMouseEnter={() => setIsShowText(product.id)}
               onMouseLeave={() => setIsShowText(false)}
               className={`
                flex justify-between
            `}>
              {isShowText === product.id ?
                (<div className="w-full flex justify-center items-center p-0">
                  <p
                  className="mt-1 text-3xl text-gray-500 italic text-center">
                  {product.description}
                  </p>
                </div>)

              : (<div className="w-full flex justify-center items-center overflow-hidden ">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="w-full rounded-lg object-cover group-hover:opacity-75"
                />
              </div>
                )
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
