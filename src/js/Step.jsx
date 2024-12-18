import React, { useEffect, useRef } from "react";
import Midashi from "./common/Midashi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Step() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    // GSAP アニメーションの設定
    gsap.fromTo(
      section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%", // セクションがビューポートの80%位置に来たら開始
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <>
      <section ref={sectionRef} id="step" className="step">
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
