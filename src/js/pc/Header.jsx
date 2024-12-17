import { useState, useEffect } from "react";
import Btn from "../common/Btn";
import useScrollVisibility from "../common/ScrollVisibility";
function Header() {
  const isVisible = useScrollVisibility(0.95);
  return (
    <>
      <header>
        <div className="header_left">
          <img className="header_logo" src="logo.png" alt="zion-logo" />
          <p className="header_ttl">
            ZION-MEET
            <span className="header_subttl">
              ～だれでも、簡単で自由な会議を～
            </span>
          </p>
        </div>
        <Btn />
      </header>
    </>
  );
}

export default Header;
