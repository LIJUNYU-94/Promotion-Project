import { useState, useEffect } from "react";
import Midashi from "./common/Midashi";
import { useInView } from "react-intersection-observer";
function Step() {
  const { ref, inView } = useInView({
    threshold: 0.2, // 20%見えたらトリガー
    triggerOnce: true, // 一度だけトリガー
  });
  return (
    <>
      <section
        ref={ref}
        id="step"
        className={`step ${inView ? "visible" : "hidden"}`}
      >
        <Midashi x={7} />

        <div className="step_container">
          <div className="step_container-empty"></div>
          <div className="step_container-left">
            <h3>ご契約の流れ</h3>
            <p>
              ZION
              <br />
              MEET
            </p>
          </div>
          <div className="step_container-empty"></div>
          <div className="step_container-right">
            <ul className="step_listnum">
              <li>01</li>
              <li>02</li>
              <li>03</li>
              <li>04</li>
            </ul>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="184"
              height="703"
              viewBox="0 0 184 698"
              fill="none"
            >
              <path
                d="M2 1C240.908 263.5 243.09 389.5 2 701"
                stroke="white"
                strokeOpacity="0.8"
                strokeWidth="3"
              />
            </svg>
            <ul className="step_steplist">
              <li>
                お問い合わせフォームで
                <br />
                申し込む
              </li>
              <li>
                担当営業よりご連絡の上
                <br />
                お打ち合わせ
              </li>
              <li>構築・設定</li>
              <li>利用開始</li>
            </ul>
          </div>
          <div className="step_container-empty"></div>
        </div>
      </section>
    </>
  );
}

export default Step;
