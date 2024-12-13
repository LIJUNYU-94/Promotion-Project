import { useState, useEffect } from "react";
import useScrollVisibility from "../common/ScrollVisibility";
function Nav() {
  const isVisible = useScrollVisibility(0.99);
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  return (
    <>
      <nav
        className={`navpc ${isVisible ? "" : "hidden"} ${
          isNavOpen ? "" : "closed"
        }`}
      >
        <div
          className={` ${isNavOpen ? "navpc_button" : "navpc_button-close"}`}
          onClick={toggleNav}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <p
            className={` ${
              isNavOpen ? "navpc_button-text" : "navpc_button-text-close"
            }`}
          >
            menu
          </p>
        </div>

        <ul
          className={`navpc_ul ${isNavOpen ? "open" : "closed"} ${
            isHovering ? "hovered" : ""
          }`}
        >
          <li className="navpc_li">
            <a href="#era">今の時代</a>
          </li>
          <li className="navpc_li">
            <a href="#strengths">選ぶ理由</a>
          </li>
          <li className="navpc_li">
            <a href="#unique">機能一覧</a>
          </li>
          <li className="navpc_li">
            <a href="#price">料金案内</a>
          </li>
          <li className="navpc_li">
            <a href="#step">導入手順</a>
          </li>
          <li className="navpc_li">
            <a href="#faq">Q＆A</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
