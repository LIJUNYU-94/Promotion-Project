import React, { useState, useEffect, useRef } from "react";
import Midashi from "./common/Midashi";
import BackgroundText from "./common/Backtext";
import eraphoto from "../img/era.png";
import data from "./common/data.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Nowdays = data.Now;
const eras = data.era;
const Erap = React.forwardRef(({ text }, ref) => (
  <div className="era_now-textbox" ref={ref}>
    <p className="era_now-text">
      <span className="era_now-text-shadow"></span>
      {text}
    </p>
  </div>
));
const Erasgallery = () => {
  const elementsRef = useRef([]); // アニメーション対象の要素を格納
  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };
  useEffect(() => {
    if (elementsRef.current.length > 0) {
      elementsRef.current.forEach((element, index) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            delay: index * 0.1, // 順番にアニメーション
          }
        );
      });
    }
  }, []);
  return (
    <div className="era_erasgallery">
      {eras.map((figure) => (
        <figure key={figure.id} className={figure.class} ref={addToRefs}>
          <img src={figure.src} alt={figure.alt} />
          <figcaption>{figure.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
};
function Era() {
  const sectionRef = useRef(null);
  const elementsRef = useRef([]);
  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };
  useEffect(() => {
    const section = sectionRef.current;

    // 要素の初期化
    elementsRef.current.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <section ref={sectionRef} id="era" className="era">
        <Midashi x={0} />
        <div className="era_now">
          <img src={eraphoto} alt="シニアの市場なう" />
          <div className="era_columns">
            <div className="era_left-column">
              {Nowdays.filter((x) => x.class === "era_left").map((x) => (
                <Erap
                  key={x.id}
                  text={x.text}
                  className="era_left"
                  ref={addToRefs}
                />
              ))}
            </div>
            <div className="era_right-column">
              {Nowdays.filter((x) => x.class === "era_right").map((x) => (
                <Erap
                  key={x.id}
                  text={x.text}
                  className="era_right"
                  ref={addToRefs}
                />
              ))}
            </div>
          </div>
          <div className="era_now-stress" ref={addToRefs}>
            <div className="era_now-stress-box">
              <p>
                <span>ご存知</span>で<br />
                しょうか？
              </p>
            </div>
            <p className="era_now-stress-now">
              <span>シニア層</span>には
              <br /> インターネットの利用率が<span>８割</span>
              <br />
              パソコンの利用率が<span>６割</span>
            </p>
          </div>
        </div>

        <div className="era_senior">
          <p className="era_senior-phrase">
            シニア向けのオンラインサービスは、
            <br className="sp-only" /> すでに市場に浸透しつつあります...
          </p>
          <Erasgallery />

          <div className="era_senior-future" ref={addToRefs}>
            <BackgroundText x={1} />
            <p className="era_senior-future-text">
              <span className="text-orange text-bold600">シニア市場</span>
              は<br className="sp-only" />
              急速に成長していますが <br />
              オンラインサービスの普及は
              <br className="sp-only" />
              まだ
              <span className="text-bold600">「芽生え始めた領域」</span>
            </p>
            <p className="era_senior-future-chance">
              この
              <span className="text-blue">未成熟の領域</span>
              こそが
              <br className="sp-only" />
              大きな
              <span className="text-blue text-boldline">チャンス</span>
              と言えます。
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Era;
