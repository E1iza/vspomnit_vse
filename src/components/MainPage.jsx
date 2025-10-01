import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useMediaQuery } from 'react-responsive'
import { useRefs } from "../contexts/RefContext.jsx";
import desktopImg from '../assets/main.png'
import mobileImg from '../assets/main_mobile.png'

const navigation = [
  { name: 'О проекте', href: '#' },
  { name: 'Карта экспедиций', href: '#' },
  { name: 'Присоединиться', href: '#' },
]

export default function MainPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const { mainRef } = useRefs()

  return (
    <div
      ref={mainRef}
      className="bg-white dark:bg-gray-900 height-auto"
    >
      <header className="absolute inset-x-0 top-0 z-50 opacity-0 animate-fade-in-down">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1 items-center">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt="logo"
                src={'/logo.svg'}
                className="h-24 w-auto dark:hidden"
              />
            </a>
            <span className='text-white p-0 ml-4'>Сохраняем память &mdash;<br/> преображаем будущее</span>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white dark:text-gray-400"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-md font-semibold text-white dark:text-white">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm/6 font-semibold text-white dark:text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900 dark:sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt="logo"
                  src={'/logo.svg'}
                  className="h-8 w-auto dark:hidden"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-500/25">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate overflow-hidden pt-14 h-[100vh]">
        <div className="">
          <div
            className="absolute inset-0 -z-9 bg-black opacity-20"
          />
          <img
            alt="main"
            src={isMobile ? mobileImg : desktopImg}
            className="absolute inset-0 -z-10 w-full h-full object-cover opacity-100"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 h-full flex flex-col justify-between">
          <div className="mx-auto max-w-2xl mt-30">
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl dark:text-white animate-init-hidden animate-fade-in-up animation-delay-400">
                Экспедиции &laquo;Вспомнить всё&raquo;
              </h1>
              <p className="mt-6 text-lg font-medium text-pretty text-white sm:text-xl/8 dark:text-gray-400 animate-init-hidden animate-fade-in-up animation-delay-500">
                Краеведческие экспедиции по России для подростков
              </p>
            </div>
          </div>
          <div className="mb-12 flex items-center justify-center gap-x-6 animate-init-hidden animate-fade-in-up animation-delay-700">
            <a
              href="#"
              className="rounded-xl bg-cyan-700 px-2.5 py-3 md:px-3.5 md:py-4 text-md font-semibold text-white shadow-xs
              hover:bg-cyan-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
              transition-all duration-300 transform hover:scale-105"
            >
              Отправиться в экспедицию
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
