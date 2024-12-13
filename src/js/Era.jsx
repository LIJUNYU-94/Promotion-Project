import { useState, useEffect } from "react";
import Midashi from "./common/Midashi";
import BackgroundText from "./common/Backtext";
import eraphoto from "../img/era.png";
import data from "./common/data.json";
import { useInView } from "react-intersection-observer";
const Nowdays = data.Now;
const eras = data.era;
function Erap({ text }) {
  return (
    <>
      <div className="era_now-textbox">
        <p className="era_now-text">
          <span className="era_now-text-shadow"></span>
          {text}
        </p>
      </div>
    </>
  );
}
const Erasgallery = () => {
  return (
    <div className="era_erasgallery">
      {eras.map((figure) => (
        <figure key={figure.id} className={figure.class}>
          <img src={figure.src} alt={figure.alt} />
          <figcaption>{figure.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
};
function Era() {
  const { ref, inView } = useInView({
    threshold: 0.2, // 20%見えたらトリガー
    triggerOnce: true, // 一度だけトリガー
  });
  return (
    <>
      <section
        ref={ref}
        id="era"
        className={`era ${inView ? "visible" : "hidden"}`}
      >
        <Midashi x={0} />
        <div className="era_now">
          <img src={eraphoto} alt="シニアの市場なう" />
          <div className="era_columns">
            <div className="era_left-column">
              {Nowdays.filter((x) => x.class === "era_left").map((x) => (
                <Erap key={x.id} text={x.text} className="era_left" />
              ))}
            </div>
            <div className="era_right-column">
              {Nowdays.filter((x) => x.class === "era_right").map((x) => (
                <Erap key={x.id} text={x.text} className="era_right" />
              ))}
            </div>
          </div>
          <div className="era_now-stress">
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
            シニア向けのオンラインサービスは、すでに市場に浸透しつつあります...
          </p>
          <Erasgallery />

          <div className="era_senior-future">
            <BackgroundText x={1} />
            <p className="era_senior-future-text">
              <span className="text-orange text-bold600">シニア市場</span>
              は急速に成長していますが <br />
              オンラインサービスの普及はまだ
              <span className="text-bold600">「芽生え始めた領域」</span>
            </p>
            <p className="era_senior-future-chance">
              この
              <span className="text-blue">未成熟の領域</span>
              こそが大きな
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
