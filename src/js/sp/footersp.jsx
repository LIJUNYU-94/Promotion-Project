import { useState, useEffect } from "react";
function Footersp() {
  return (
    <>
      <div className="footersp">
        <p className="footersp-name">ZION-MEET</p>
        <p className="footersp-cp">～だれでも、簡単で自由な会議を～</p>
        <ul className="footersp-nav">
          <li className="footersp-nav">
            <a href="#era">今の時代</a>
          </li>
          <li className="footersp-nav">
            <a href="#strengths">選ぶ理由</a>
          </li>
          <li className="footersp-nav">
            <a href="#unique">機能一覧</a>
          </li>
          <li className="footersp-nav">
            <a href="#price">料金案内</a>
          </li>
          <li className="footersp-nav">
            <a href="#step">導入手順</a>
          </li>
          <li className="footersp-nav">
            <a href="#faq">Q＆A</a>
          </li>
        </ul>
        <p className="footersp_name">
          <a href="https://www.zion-corp.co.jp/hp/">株式会社ZIONホームページ</a>
        </p>
        <p className="footersp_cp">～すべての働く人に最適な環境を～</p>

        <p className="footersp_copyright">
          <small>copyright@2024株式会社ZION</small>
        </p>
      </div>
    </>
  );
}

export default Footersp;
