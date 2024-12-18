import { useState, useEffect } from "react";
import React from "react"; // 必要に応じてReactをインポート
import Midashi from "./common/Midashi";
import BackgroundText from "./common/Backtext";
import data from "./common/data.json";
import { useInView } from "react-intersection-observer";
const concernText = data.concern;
const Concerns = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, // 20%見えたらトリガー
    triggerOnce: true, // 一度だけトリガー
  });
  return (
    <>
      <section
        ref={ref}
        className={`concerns ${inView ? "visible" : "hidden"}`}
      >
        <Midashi x={1} />
        <div className="concerns_boxs">
          {concernText.map((x) => {
            return (
              <div className="concerns_box" key={x.id}>
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
