import { createContext, useContext, useRef } from "react";

const RefContext = createContext();

export const RefProvider = ({ children }) => {
  const joinSectionRef = useRef(null);
  const mainRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <RefContext.Provider value={{ joinSectionRef, mainRef, footerRef }}>
      {children}
    </RefContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useRefs = () => {
  const context = useContext(RefContext);

  if (!context) {
    throw new Error('useRefs must be used within a RefProvider');
  }

  return context;
}