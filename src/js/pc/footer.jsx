import { useState, useEffect } from "react";
import Btn from "../common/Btn";
function Footer() {
  return (
    <>
      <section className="footer">
        <div className="footer_left">
          <img className="footer_logo" src="logo.png" alt="zion-logo" />
          <p className="footer_left-cp">～すべての働く人に最適な環境を～</p>
          <p className="footer_left-name">株式会社ZION</p>
          <p className="footer_left-copyright">
            <small>copyright@2024株式会社ZION</small>
          </p>
        </div>
        <div className="footer_right">
          <p className="footer_right-name">ZION-MEET</p>
          <p className="footer_right-cp">～だれでも、簡単で自由な会議を～</p>
          <ul className="footer_right-nav">
            <li className="footer_right-nav-left">
              <a href="#">今の時代</a>
            </li>
            <li className="footer_right-nav-right">
              <a href="#">選ぶ理由</a>
            </li>
            <li className="footer_right-nav-left">
              <a href="#">機能一覧</a>
            </li>
            <li className="footer_right-nav-right">
              <a href="#">料金案内</a>
            </li>
            <li className="footer_right-nav-left">
              <a href="#">導入手順</a>
            </li>
            <li className="footer_right-nav-right">
              <a href="#">Q＆A</a>
            </li>
          </ul>
          <Btn />
        </div>
      </section>
    </>
  );
}

export default Footer;
