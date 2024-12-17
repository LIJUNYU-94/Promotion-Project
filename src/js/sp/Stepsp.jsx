import { useState, useEffect } from "react";
import Midashi from "../common/Midashi";
import { useInView } from "react-intersection-observer";
function Stepsp() {
  const { ref, inView } = useInView({
    threshold: 0.2, // 20%見えたらトリガー
    triggerOnce: true, // 一度だけトリガー
  });
  return (
    <>
      <section
        ref={ref}
        id="step"
        className={`stepsp ${inView ? "visible" : "hidden"}`}
      >
        <Midashi x={7} />
        <ul className="stepsp_steplist">
          <li>１、お申し込み</li>
          <li>２、担当営業からご連絡</li>
          <li>３、構築・設定</li>
          <li>４、利用開始</li>
        </ul>
      </section>
    </>
  );
}

export default Stepsp;
