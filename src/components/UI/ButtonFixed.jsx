import {useEffect, useState} from "react";
import { useRefs } from "../../contexts/RefContext.jsx";

export default function ButtonFixed() {
  const [isJoinSectionVisible, setIsJoinSectionVisible] = useState(false);
  const [isMainVisible, setIsMainVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const { joinSectionRef, footerRef, mainRef } = useRefs();

  useEffect(() => {
    const mainObserver = new IntersectionObserver(([entry]) => {
        setIsMainVisible(entry.isIntersecting);
      }, {
      rootMargin: '0px 0px 0px -50px',
      threshold: 0
    })

    const joinSectionObserver = new IntersectionObserver(([entry]) => {
      setIsJoinSectionVisible(entry.isIntersecting);
    }, {
      rootMargin: '0px 0px 0px 0px',
      threshold: 1
    })

    const footerObserver = new IntersectionObserver(([entry]) => {
      setIsFooterVisible(entry.isIntersecting);
    }, {
      rootMargin: '-50px 0px 0px 0px',
      threshold: 0
    })

    if (mainRef.current) {
      mainObserver.observe(mainRef.current);
    }
    if (joinSectionRef.current) {
      joinSectionObserver.observe(joinSectionRef.current);
    }
    if (footerRef.current) {
      footerObserver.observe(joinSectionRef.current);
    }


    return () => {
      mainObserver.disconnect();
      joinSectionObserver.disconnect();
      footerObserver.disconnect();
    };
  }, [mainRef, joinSectionRef, footerRef]);

  if (isMainVisible || isJoinSectionVisible || isFooterVisible) return null;

  return (
    <button className={`
      flex items-center justify-center
      `}
    >
      <a
        href="#"
        className={`
          flex bottom-5 right-5 z-100 fixed
          rounded-2xl bg-cyan-700 p-3 text-md font-semibold text-white shadow-xs
          hover:bg-cyan-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
          transition-all duration-500
          animate-pulse-ring
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