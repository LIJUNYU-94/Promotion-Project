import { useState, useEffect } from "react";
import useScrollVisibility from "../common/ScrollVisibility";
function Bottombtn() {
  const isVisible = useScrollVisibility(0.985);

  return (
    <>
      {isVisible && (
        <div className="sticky-buttons">
          <button className="buttons_download sticky-button">
            <a href="">ご相談、お問い合わせはこちら</a>
          </button>
        </div>
      )}
    </>
  );
}

export default Bottombtn;
