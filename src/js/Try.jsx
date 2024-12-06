import { useState, useEffect } from "react";
import Midashi from "./common/Midashi";

function Try() {
  const [mode, change] = useState("OFF");
  const toggleMode = () => {
    change((x) => (x === "OFF" ? "ON" : "OFF"));
  };
  return (
    <>
      <section className="try">
        <Midashi x={4} />
        <div className="try_text">
          <p>
            ※他のデバイスで共同参加する場合は、画面右上に表示される
            <span className="try_text-green">Test IDを入力する</span>
            ことで、同じ会議に参加できます。
          </p>
          <p>
            ※カメラとマイクの使用権限を取得することで、すべての機能をご利用いただけます。ご了承ください。
          </p>
        </div>
        <div className="try_switch">
          <p>体験モード：</p>
          <div onClick={toggleMode} className="try_switch-btn">
            <div className="try_switch-btn-circle"></div>
            <div className="try_switch-btn-text">{mode}</div>
          </div>
        </div>
        <div className="try_container">
          <div className="try_join">
            <label htmlFor="test-id">Test ID:</label>
            <input type="text" id="test-id" placeholder=" " />
            <button type="button">入室</button>
          </div>
          <div>
            <img src="try.png" alt="tryの画像" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Try;
