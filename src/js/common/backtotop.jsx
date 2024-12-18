import { useState, useEffect } from "react";
import useScrollVisibility from "../common/ScrollVisibility";
function Backtotop() {
  const bottom = useScrollVisibility(0.95);
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 800); // 3
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // スムーズにスクロール
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // クリーンアップ
  }, []);
  return (
    <>
      {isVisible && (
        <div
          className={`backtotop ${bottom ? "" : "bottom"}`}
          onClick={scrollToTop}
        >
          <p>↑</p>
        </div>
      )}
    </>
  );
}

export default Backtotop;
