import { useState, useEffect } from "react";
import Midashi from "./common/Midashi";

function Try() {
  const [mode, change] = useState("OFF");
  const toggleMode = () => {
    change((x) => (x === "OFF" ? "ON" : "OFF"));
  };
  return (
    <>
      <section>
        <Midashi x={4} />
        <div>
          <p>
            ※他のデバイスで共同参加する場合は、画面右上に表示される
            <span>Test IDを入力する</span>ことで、同じ会議に参加できます。
          </p>
          <p>
            ※カメラとマイクの使用権限を取得することで、すべての機能をご利用いただけます。ご了承ください。
          </p>
        </div>
        <div>
          <p>体験モード</p>
          <div>
            <p>{mode}</p>
            <button onClick={toggleMode}></button>
          </div>
        </div>
        <div>
          <label htmlFor="test-id">Test ID:</label>
          <input type="text" id="test-id" placeholder=" " />
          <button type="button">入室</button>
        </div>
      </section>
    </>
  );
}

export default Try;
