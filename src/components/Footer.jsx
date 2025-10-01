const navigation = {
  main: [
    { name: 'О проекте', href: '#' },
    { name: 'Карта экспедиций', href: '#' },
    { name: 'Присоединиться', href: '#' },
  ],
  social: [
    {
      name: 'Telegram',
      href: 'https://t.me/vspomnit_vso',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M4 10.5s7-3.2 9.5-4.3c1-.4 4.1-1.9 4.1-1.9s1.5-.6 1.4.9c-.04.6-.37 2.8-.7 5.2-.5 3.4-1 7-1 7s-.08 1-.8 1.2-1.8-.6-2-.8c-.16-.13-3-2.1-4.1-3.1-.3-.3-.6-.8.04-1.4 1.5-1.5 3.2-3.3 4.3-4.5.5-.5 1-1.8-1-.3-2.9 2.2-5.7 4.3-5.7 4.3s-.65.5-1.9.04c-1.2-.4-2.6-.9-2.6-.9s-1-.7.7-1.4z"></path>
        </svg>
      ),
    },
    {
      name: 'Email',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props} strokeWidth="1.5" stroke="#007595" aria-hidden="true" data-slot="icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path>
        </svg>
      ),
    },
    {
      name: 'Phone Number',
      href: 'tel:+7 985 336-61-86',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props} strokeWidth="1.5" stroke="#007595" aria-hidden="true" data-slot="icon">
          <path strokeLinecap="round" strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"></path>
        </svg>
      ),
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-cyan-700 text-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav aria-label="Footer" className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6">
          {navigation.main.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <div className="mt-16 flex justify-center items-center gap-x-2">
          <div className="flex justify-center items-center gap-x-10">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" className="size-6" />
              </a>
            ))}
          </div>
          <a href="tel:+7 985 336-61-86" className="text-md hidden sm:inline">
            +7 985 336-61-86
          </a>
        </div>
        <p className="mt-10 text-center text-sm/6 dark:text-gray-400">
          &copy; 2025 Экспедиции &laquo;Вспомнить всё&raquo;
        </p>
      </div>
    </footer>
  )
}
