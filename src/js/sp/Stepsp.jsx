import React, { useEffect, useRef } from "react";
import Midashi from "../common/Midashi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Stepsp() {
  const sectionRef = useRef(null);
  const elementsRef = useRef([]);
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
            duration: 0.3,
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
    <>
      <section ref={sectionRef} id="step" className="stepsp">
        <Midashi x={7} />
        <ul className="stepsp_steplist">
          <li ref={addToRefs}>１、お申し込み</li>
          <li ref={addToRefs}>２、担当営業からご連絡</li>
          <li ref={addToRefs}>３、構築・設定</li>
          <li ref={addToRefs}>４、利用開始</li>
        </ul>
      </section>
    </>
  );
}

export default Stepsp;
