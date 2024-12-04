import { useState, useEffect } from "react";
function Btn() {
  return (
    <>
      <div className="buttons">
        <button className="buttons_download">
          <a href="">資料ダウンロード</a>{" "}
        </button>
        <button className="buttons_contact">
          <a href="">お問い合わせ</a>
        </button>
      </div>
    </>
  );
}

export default Btn;
