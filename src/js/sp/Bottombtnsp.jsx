import { useState, useEffect } from "react";
import useScrollVisibility from "../common/ScrollVisibility";
function Bottombtnsp() {
  const isVisible = useScrollVisibility(0.94);
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
      <div className={`bottombtnsp ${isVisible ? "" : "hidden"} `}>
        <button className="bottomsp buttons_download" onClick={download}>
          <a href="">資料ダウンロード</a>
        </button>
        <button className="bottomsp buttons_contact">
          <a href="">お問い合わせ</a>
        </button>
      </div>
    </>
  );
}

export default Bottombtnsp;
