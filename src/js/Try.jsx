import { useState, useEffect } from "react";
import Midashi from "./common/Midashi";

function Try() {
  const [mode, change] = useState("OFF");
  const [testid, setTestid] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [showJoin, setShowJoin] = useState(false);
  const [iframeSrc, setIframeSrc] = useState("");
  const toggleMode = () => {
    if (mode === "OFF") {
      const newTestId = randomId();
      setTestid(newTestId);
      setIframeSrc(`https://zion-meet.com/test${newTestId}`); // iframeのsrcを設定
      change("ON");
      setShowJoin(true);
    } else {
      setIframeSrc("");
      change("OFF");
      setShowJoin(false);
    }
  };
  const handleJoinClick = () => {
    const isValidTestId = /^\d{6}$/.test(inputValue.trim()); // 入力値をトリムして検証
    if (isValidTestId) {
      setTestid(inputValue.trim()); // Test ID を状態に保存
      alert(`Test ID: ${inputValue.trim()} の会議に入りました`);
      setShowJoin(false);
    } else {
      alert("正しいTest IDを入力してください");
      setInputValue(""); // 入力フィールドをクリア
    }
  };
  const handleTestIdClick = () => {
    setShowJoin(true); // Test IDをクリックしたときに表示
  };

  const randomId = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };
  useEffect(() => {
    if (mode === "ON") {
      document.body.style.overflow = "hidden"; // スクロール禁止
      const iframeElement = document.querySelector(".try_switch-btn");
      if (iframeElement) {
        iframeElement.scrollIntoView({ behavior: "smooth" }); // スムーズスクロール
      }
    } else {
      document.body.style.overflow = ""; // スクロール有効化
    }
    return () => {
      document.body.style.overflow = ""; // クリーンアップ
    };
  }, [mode]);

  return (
    <>
      <div className="try" id="try">
        <Midashi x={4} />
        <div className="try_text">
          <p>
            ※他のデバイスで共同参加する場合は、画面右上に表示される
            <span className="try_text-green" onClick={handleTestIdClick}>
              Test IDを入力する
            </span>
            ことで、同じ会議に参加できます。
          </p>
          <p>
            ※カメラとマイクの使用権限を取得することで、すべての機能をご利用いただけます。ご了承ください。
          </p>
        </div>
        <div className="try_switch">
          <p>体験モード：</p>
          <div
            onClick={toggleMode}
            className={`try_switch-btn ${mode === "ON" ? "on" : ""}`}
          >
            <div className="try_switch-btn-circle"></div>
            <div className="try_switch-btn-text">{mode}</div>
          </div>
        </div>
        <div className="try_container">
          {showJoin && mode === "ON" && (
            <div className="try_join">
              <label htmlFor="test-id">Test ID:</label>
              <input
                type="text"
                id="test-id"
                placeholder=" "
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button type="button" onClick={handleJoinClick}>
                入室
              </button>
            </div>
          )}
          {mode === "ON" && <p className="try_testid">Test ID:{testid}</p>}
          <div>
            {mode === "OFF" ? (
              <img src="try.png" alt="tryの画像" />
            ) : (
              <iframe
                allow="camera; microphone; fullscreen; display-capture; autoplay"
                src={`https://zion-meet.com/test${testid}`}
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Try;
