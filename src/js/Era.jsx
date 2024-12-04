import { useState, useEffect } from "react";
import Midashi from "./common/Midashi";
import eraphoto from "../img/era.png";
import BackgroundText from "./common/Backtext";
const Nowdays = [
  {
    id: 0,
    text: "介護支援プラットフォーム",
    class: "era_left",
  },
  {
    id: 1,
    text: "シニア向け住宅フォーム",
    class: "era_left",
  },
  {
    id: 2,
    text: "家事代行・買い物代行",
    class: "era_left",
  },

  {
    id: 3,
    text: "シニア向け趣味講座・ワークショップ",
    class: "era_left",
  },
  {
    id: 4,
    text: "シニア向け旅行・観光パッケージ",
    class: "era_right",
  },
  {
    id: 5,
    text: "シニア向け習い事教室",
    class: "era_right",
  },
  {
    id: 6,
    text: "シニア向け食事宅配",
    class: "era_right",
  },
  {
    id: 7,
    text: "シニア向けライフプラン相談",
    class: "era_right",
  },
];
const eras = [
  {
    id: 0,
    src: "era-1.png",
    alt: "オンライン内見",
    caption: "オンライン内見",
  },
  {
    id: 1,
    src: "era-2.png",
    alt: "オンライン診療",
    caption: "オンライン診療",
  },
  {
    id: 2,
    src: "era-3.png",
    alt: "オンライン交流会",
    caption: "オンライン交流会",
  },
  {
    id: 3,
    src: "era-4.png",
    alt: "オンライン体操教室",
    caption: "オンライン体操教室",
  },
  {
    id: 4,
    src: "era-5.png",
    alt: "オンライン見積もり",
    caption: "オンライン見積もり",
  },
  {
    id: 5,
    src: "era-6.png",
    alt: "オンライン読書会",
    caption: "オンライン読書会",
  },
];
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
    <div>
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
  return (
    <>
      <div className="era">
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
          <BackgroundText x={1} />
          <p className="era_senior-future">
            <span>シニア</span>市場は急速に成長していますが <br />
            オンラインサービスの普及はまだ<span>「芽生え始めた領域</span>
          </p>
          <p>
            この<span>未成熟の領域</span>こそが大きな<span>チャンス</span>
            と言えます。
          </p>
        </div>
      </div>
    </>
  );
}

export default Era;
