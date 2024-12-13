import { useState, useEffect } from "react";
function Backtotop() {
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
        <div className="backtotop" onClick={scrollToTop}>
          <p>↑</p>
        </div>
      )}
    </>
  );
}

export default Backtotop;
