import { useState, useEffect } from "react";
function Btn() {
  const download = () => {
    const zipUrl = "./ZION-MEET.pdf";
    const link = document.createElement("a");
    link.href = zipUrl;
    link.download = "ZION-MEET.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className="buttons">
        <button className="buttons_download" onClick={download}>
          資料ダウンロード
        </button>
        <button className="buttons_contact">お問い合わせ</button>
      </div>
    </>
  );
}

export default Btn;
