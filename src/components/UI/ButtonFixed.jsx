import {useEffect, useState} from "react";

export default function ButtonFixed() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button className={`
      flex items-center justify-center
      `}
    >
      <a
        href="#"
        className={`
          rounded-2xl bg-cyan-700 p-3 text-md font-semibold text-white shadow-xs
          hover:bg-cyan-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
          transition-all duration-500
          animate-pulse-ring
          ${isScrolled
            ? 'flex bottom-5 right-5 z-100 fixed'
            : 'hidden'
        }
        `}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white"
             className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>
        </svg>

      </a>
    </button>
  );
}