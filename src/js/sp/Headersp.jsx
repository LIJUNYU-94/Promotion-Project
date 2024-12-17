import { useState, useEffect } from "react";
import Btn from "../common/Btn";
import useScrollVisibility from "../common/ScrollVisibility";

function Headersp() {
  const isVisible = useScrollVisibility(0.95);
  const [navON, navSwitch] = useState(false);
  const navtoggle = () => {
    navSwitch((x) => !x);
  };
  const [headerSticky, headerSwitch] = useState(false);
  const checkScroll = () => {
    headerSwitch(window.scrollY > 0 || document.documentElement.scrollTop > 0);
  };
  useEffect(() => {
    checkScroll();
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll); // クリーンアップ
    };
  }, []);
  return (
    <>
      <header className={`header ${headerSticky ? "sticky" : ""}`}>
        <div className="headersp_top">
          <img className="headersp_logo" src="logo.png" alt="zion-logo" />
          <p className="headersp_ttl">
            ZION-MEET
            <span className="headersp_subttl">
              ～だれでも、簡単で自由な会議を～
            </span>
          </p>
          <div className="headersp_menu" onClick={navtoggle}>
            <div className="headersp_menu-line headersp_menu-line1"></div>
            <div className="headersp_menu-line headersp_menu-line2"></div>
            <div className="headersp_menu-line headersp_menu-line3"></div>
          </div>
        </div>
        <nav className={`navsp_nav ${navON ? "open" : ""}`}>
          <ul className="navsp_ul">
            <li className="navsp_li">
              <a href="#era">今の時代</a>
            </li>
            <li className="navsp_li">
              <a href="#strengths">選ぶ理由</a>
            </li>
            <li className="navsp_li">
              <a href="#unique">機能一覧</a>
            </li>
            <li className="navsp_li">
              <a href="#price">料金案内</a>
            </li>
            <li className="navsp_li">
              <a href="#step">導入手順</a>
            </li>
            <li className="navsp_li">
              <a href="#faq">Q＆A</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Headersp;
