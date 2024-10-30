import { createContext, useContext, useState, useEffect } from 'react';

const ScrollContext = createContext();


export const useScrollContext = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
  const [isBlackSectionVisible, setIsBlackSectionVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const targetSection = document.querySelector("#blackBannerVideo");
      const sectionTop = targetSection.getBoundingClientRect().top;

      if (sectionTop < window.innerHeight && sectionTop >= -500) {
        setIsBlackSectionVisible(true);
      } else {
        setIsBlackSectionVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider value={isBlackSectionVisible}>
      {children}
    </ScrollContext.Provider>
  );
};
