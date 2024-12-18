import { useState, useEffect } from "react";
function Btn() {
  const download = () => {
    const zipUrl = "./ZION-MEET.zip";
    const link = document.createElement("a");
    link.href = zipUrl;
    link.download = "ZION-MEET.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className="buttons">
        <button className="buttons_download" onClick={download}>
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
