import { useState, useEffect } from "react";
import useScrollVisibility from "../common/ScrollVisibility";
function Bottombtnsp() {
  const isVisible = useScrollVisibility(0.94);
  return (
    <>
      <div className={`bottombtnsp ${isVisible ? "" : "hidden"} `}>
        <button className="bottomsp buttons_download">
          <a href="">資料ダウンロード</a>{" "}
        </button>
        <button className="bottomsp buttons_contact">
          <a href="">お問い合わせ</a>
        </button>
      </div>
    </>
  );
}

export default Bottombtnsp;
