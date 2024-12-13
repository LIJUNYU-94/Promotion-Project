import { useState, useEffect } from "react";
import BackgroundText from "./common/Backtext";
import { useInView } from "react-intersection-observer";
function Keyvisual() {
  const { ref, inView } = useInView({
    threshold: 0.2, // 20%見えたらトリガー
    triggerOnce: true, // 一度だけトリガー
  });
  return (
    <>
      <section ref={ref} className={`kv ${inView ? "visible" : "hidden"}`}>
        <h1>
          今こそ掴む、
          <br /> 時代のチャンスを <br />
          <span className="kv_ttl-sub">
            MTG作成・会議システムZION-MEETと共に
          </span>
        </h1>
        <BackgroundText x={0} />
        <div className="kv_pic">
          <img src="kvpc.png" alt="シニアのシーン" />
          <div className="kv_pic-box">
            <p className="kv_pic-text">
              登録、ダウンロード不要！
              <br /> 誰でも使いやすい！
              <br /> <span className="kv_pic-text-large">安価</span>
              で導入できる！
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Keyvisual;
