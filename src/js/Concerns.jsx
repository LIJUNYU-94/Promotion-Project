import { useState, useEffect, useRef } from "react";
import React from "react"; // 必要に応じてReactをインポート
import Midashi from "./common/Midashi";
import BackgroundText from "./common/Backtext";
import data from "./common/data.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const concernText = data.concern;

const Concerns = () => {
  const boxesRef = useRef([]); // 各ボックスの参照を格納
  boxesRef.current = []; // 初期
  const addToRefs = (el) => {
    if (el && !boxesRef.current.includes(el)) {
      boxesRef.current.push(el);
    }
  };
  useEffect(() => {
    boxesRef.current.forEach((box) => {
      gsap.fromTo(
        box,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: box,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <section className="concerns">
        <Midashi x={1} />
        <div className="concerns_boxs">
          {concernText.map((x) => {
            return (
              <div className="concerns_box" key={x.id} ref={addToRefs}>
                <p className="concerns_box-text">
                  {x.texts[0]}
                  <span>{x.texts[1]}</span>
                  {x.texts[2]}
                </p>
                <p className="concerns_box-mark">？</p>
              </div>
            );
          })}
        </div>
        <p className="concerns_bottom">
          <span>そ</span>
          <span>の</span>
          <span>お</span>
          <span>悩</span>
          <span>み</span>
        </p>
        {/* <BackgroundText x={1} /> */}
      </section>
    </>
  );
};

export default Concerns;
