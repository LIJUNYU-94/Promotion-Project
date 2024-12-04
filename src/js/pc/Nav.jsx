import { useState, useEffect } from "react";
function Nav() {
  return (
    <>
      <nav className="navpc">
        <div className="navpc_button">
          <p className="navpc_button-text">menu</p>
        </div>
        <ul className="navpc_ul">
          <li className="navpc_li">
            <a href="#">今の時代</a>
          </li>
          <li className="navpc_li">
            <a href="#">選ぶ理由</a>
          </li>
          <li className="navpc_li">
            <a href="#">機能一覧</a>
          </li>
          <li className="navpc_li">
            <a href="#">料金案内</a>
          </li>
          <li className="navpc_li">
            <a href="#">導入手順</a>
          </li>
          <li className="navpc_li">
            <a href="#">Q＆A</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
