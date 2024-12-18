import React, { useEffect, useRef } from "react";
import BackgroundText from "./common/Backtext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Keyvisual() {
  const sectionRef = useRef(null);
  const elementsRef = useRef([]); // アニメーション対象の要素を管理
  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };
  useEffect(() => {
    const section = sectionRef.current;

    // GSAP アニメーションの設定

    gsap.fromTo(
      elementsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "back.out(5)",
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <>
      <section ref={sectionRef} className="kv">
        <h1 ref={addToRefs}>
          今こそ掴む、
          <br /> 時代のチャンスを <br />
          <span className="kv_ttl-sub">
            MTG作成・会議システムZION-MEETと共に
          </span>
        </h1>
        <BackgroundText x={0} />
        <div className="kv_pic" ref={addToRefs}>
          <picture>
            <source media="(min-width: 600px)" srcSet="kvpc.png" />
            <img src="kvsp.png" alt="シニアのシーン" />
          </picture>

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
