import { useState, useEffect } from "react";

const useScrollVisibility = (percentage) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = (scrollTop + windowHeight) / documentHeight;

      setIsVisible(scrollPercentage < percentage);
    };

    window.addEventListener("scroll", handleScroll);

    // クリーンアップ
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [percentage]);

  return isVisible;
};

export default useScrollVisibility;
