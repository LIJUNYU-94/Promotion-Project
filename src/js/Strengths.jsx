import { useState, useEffect } from "react";
import BackgroundText from "./common/Backtext";
import Midashi from "./common/Midashi";
import data from "./common/data.json";
import Compare from "./Compare.jsx";
import { useInView } from "react-intersection-observer";

const strength = data.strength;

const Strengthpart = () => {
  return (
    <>
      {strength.map((x) => (
        <div className="strengths_part" key={x.id}>
          <div className="strengths_container">
            <h3>{x.ttl}</h3>
            <div className="strengths_part-left">
              <p className="strengths_part-text">
                {x.text[0].split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < x.text[0].split("\n").length - 1 && <br />}
                  </span>
                ))}
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
              <p className="strengths_sub">{x.sub || ""}</p>
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
  return (
    <>
      <div className="case">
        <Midashi x={3} />
        <BackgroundText x={2} />
        <div className="case_container">
          <div className="case_box case_left">
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
          <div className="case_box case_right">
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
  const { ref, inView } = useInView({
    threshold: 0.2, // 20%見えたらトリガー
    triggerOnce: true, // 一度だけトリガー
  });
  return (
    <>
      <div className="strengths" id="strengths">
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
