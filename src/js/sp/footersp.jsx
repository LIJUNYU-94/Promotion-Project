import { useState, useEffect } from "react";
function Footersp() {
  return (
    <>
      <div className="footersp">
        <p className="footersp-name">ZION-MEET</p>
        <p className="footersp-cp">～だれでも、簡単で自由な会議を～</p>
        <ul className="footersp-ul">
          <li className="footersp-li">
            <a href="#era">今の時代</a>
          </li>
          <li className="footersp-li">
            <a href="#strengths">選ぶ理由</a>
          </li>
          <li className="footersp-li">
            <a href="#unique">機能一覧</a>
          </li>
          <li className="footersp-li">
            <a href="#price">料金案内</a>
          </li>
          <li className="footersp-li">
            <a href="#step">導入手順</a>
          </li>
          <li className="footersp-li">
            <a href="#faq">Q＆A</a>
          </li>
        </ul>
        <div className="footersp_name">
          <a href="https://www.zion-corp.co.jp/hp/">
            株式会社ZIONホームページ
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 6H7C6.73478 6 6.48043 6.10536 6.29289 6.29289C6.10536 6.48043 6 6.73478 6 7V17C6 17.2652 6.10536 17.5196 6.29289 17.7071C6.48043 17.8946 6.73478 18 7 18H17C17.2652 18 17.5196 17.8946 17.7071 17.7071C17.8946 17.5196 18 17.2652 18 17V12M12 12L19.5 4.5M15 3H21V9"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
        <p className="footersp_cp">～すべての働く人に最適な環境を～</p>

        <p className="footersp_copyright">
          <small>copyright@2024株式会社ZION</small>
        </p>
      </div>
    </>
  );
}

export default Footersp;
