import React, { useEffect, useRef, useState } from "react";
import BackgroundText from "./common/Backtext";
import Midashi from "./common/Midashi";
import data from "./common/data.json";
import Compare from "./Compare.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useMediaQuery from "./common/UseMediaQuery.jsx";
gsap.registerPlugin(ScrollTrigger);
const strength = data.strength;
const spWord = (text) => {
  // ハイライトする単語とその正規表現
  const keywords = ["コスト", "使いやすさ", "カスタマイズ"];
  const regex = new RegExp(`(${keywords.join("|")})`, "g");

  // 単語をspanで置き換える
  return text.split(regex).map((part, index) =>
    keywords.includes(part) ? (
      <span key={index} className="strengths_part-h3sp">
        {part}
      </span>
    ) : (
      part
    )
  );
};
const Strengthpart = () => {
  const phone = useMediaQuery("(max-width: 600px)");
  const [strengthData, setStrengthData] = useState(data.strength);
  const elementsRef = useRef([]);
  useEffect(() => {
    const updatedData = data.strength.map((item) =>
      item.id === 1
        ? {
            ...item,
            btn: phone ? "" : item.btn,
            sub: phone
              ? "※PCブラウザ環境でページ中に体験できます<br />&nbsp;ぜひPCでもご覧ください！"
              : item.sub,
          }
        : item
    );
    setStrengthData(updatedData);
  }, [phone]);
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
            delay: index * 0.1, // 順番に表示
          }
        );
      });
    }
  }, []);
  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };
  return (
    <>
      {strengthData.map((x) => (
        <div className="strengths_part" key={x.id} ref={addToRefs}>
          <div className="strengths_container">
            <h3>{spWord(x.ttl)}</h3>
            <div className="strengths_part-left">
              <p className="strengths_part-text">
                {x.text[0].split("\n").map((line, i) => {
                  if (line.includes("安価で")) {
                    const parts = line.split("安価で");
                    return (
                      <span key={i}>
                        {parts[0]}安価で
                        <br className="sp-only" />
                        {parts[1]}
                      </span>
                    );
                  }
                  return (
                    <span key={i}>
                      {line}
                      {i < x.text[0].split("\n").length - 1 && <br />}
                    </span>
                  );
                })}
                <span className="text-blue">{x.text[1]}</span>
                {x.text[2].split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < x.text[2].split("\n").length - 1 && <br />}
                  </span>
                ))}
              </p>
              <p className="strengths_btn">
                <a href={`#${x.btnlink}`}>
                  {x.btn}
                  <svg
                    className="sp-only"
                    xmlns="http://www.w3.org/2000/svg"
                    width="201"
                    height="22"
                    viewBox="0 0 201 22"
                    fill="none"
                  >
                    <line
                      y1="20.5"
                      x2="199"
                      y2="20.5"
                      stroke="#FF9500"
                      strokeWidth="3"
                    />
                    <line
                      y1="-1.5"
                      x2="24.2275"
                      y2="-1.5"
                      transform="matrix(0.620467 0.784232 -0.543603 0.839342 183.968 3)"
                      stroke="#FF9500"
                      strokeWidth="3"
                    />
                  </svg>
                  <svg
                    className="pc-only"
                    xmlns="http://www.w3.org/2000/svg"
                    width="237"
                    height="22"
                    viewBox="0 0 237 22"
                    fill="none"
                  >
                    <line
                      y1="20.5"
                      x2="235"
                      y2="20.5"
                      stroke="#FF9500"
                      strokeWidth="3"
                    />
                    <line
                      y1="-1.5"
                      x2="26.0024"
                      y2="-1.5"
                      transform="matrix(0.682698 0.730701 -0.607506 0.794315 217.248 3)"
                      stroke="#FF9500"
                      strokeWidth="3"
                    />

                    <line
                      y1="20.5"
                      x2="235"
                      y2="20.5"
                      stroke="#21BA43"
                      strokeWidth="3"
                      className="hover-line"
                    />
                    <line
                      y1="-1.5"
                      x2="26.0024"
                      y2="-1.5"
                      transform="matrix(0.682698 0.730701 -0.607506 0.794315 217.248 3)"
                      stroke="#21BA43"
                      strokeWidth="3"
                      className="hover-line"
                    />
                  </svg>
                </a>
              </p>
              <p
                className="strengths_sub"
                dangerouslySetInnerHTML={{ __html: x.sub }}
              ></p>
            </div>

            <div className="strengths_part-right">
              {x.img === "" ? (
                <Compare />
              ) : (
                <div className="strengths_part-img">
                  <img src={x.img} alt={x.alt} />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const Cases = () => {
  const caseRef = useRef([]); // 各ボックスの参照

  useEffect(() => {
    if (caseRef.current.length > 0) {
      caseRef.current.forEach((caseBox, index) => {
        gsap.fromTo(
          caseBox,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: caseBox,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            delay: index * 0.2, // 順番に表示
          }
        );
      });
    }
  }, []);

  const addCaseToRefs = (el) => {
    if (el && !caseRef.current.includes(el)) {
      caseRef.current.push(el);
    }
  };
  return (
    <>
      <div className="case">
        <Midashi x={3} />
        <BackgroundText x={2} />
        <div className="case_container">
          <div className="case_box case_left" ref={addCaseToRefs}>
            <figure>
              <img src="docomo.svg" alt="株式会社ドコモCS" />
              <figcaption>株式会社ドコモCS</figcaption>
            </figure>
            <p className="case_box-ttl">導入業務：</p>
            <div className="case_box-text">
              <p>
                シニア向けスマホ使い方講座 <br />
                <span>（一部の店舗）</span>
              </p>
            </div>
          </div>
          <div className="case_box case_right" ref={addCaseToRefs}>
            <figure>
              <img src="ripty.svg" alt="株式会社リップル" />
              <figcaption>株式会社リップル</figcaption>
            </figure>
            <p className="case_box-ttl">導入業務：</p>
            <div className="case_box-text">
              <p>入社の面談やリモート業務</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const Strengths = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

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
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <>
      <div className="strengths" id="strengths" ref={sectionRef}>
        <div className="strengths_top"></div>
        <Midashi x={2} />
        <BackgroundText x={0} />
        <div className="strengths_parts">
          <Strengthpart />
        </div>

        <Cases />
      </div>
    </>
  );
};

export default Strengths;
