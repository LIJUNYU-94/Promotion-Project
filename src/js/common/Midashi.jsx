import { useState, useEffect } from "react";
const Midashis = [
  {
    ttl: [
      { text: "シニア向けの" },
      { class: "ttl_color", text: "市場開拓" },
      { text: "をしていますか" },
    ],
    sub: "日本、世界一の高齢者社会",
    class: "ttl_underline",
  },
  {
    ttl: [{ class: "ttl_color", text: "お悩み" }, { text: "ではありませんか" }],
    sub: "シニア業務にオンライン会議システムの導入",
    class: "ttl_underline",
  },
  {
    ttl: [
      { class: "ttl_bold", text: "ZION-MEET" },
      { text: "こそ、求めていた" },
      { class: "ttl_boldline", text: "最適解" },
    ],
    sub: "",
  },
  {
    ttl: "導入実績",
    sub: "",
    class: "ttl_white ttl_underline",
  },
  {
    ttl: "機能体験",
    sub: "",
  },
  {
    ttl: "特有機能",
    sub: "ZION-MEETならではの",
    class: "ttl_underline",
  },
  {
    ttl: "料金プラン",
    sub: "あなたのビジネスを次のステージへ",
    class: "ttl_underline",
  },
  {
    ttl: "導入手順",
    sub: "簡単に始められる",
    class: "ttl_underline",
  },
  {
    ttl: "よくある質問",
    sub: "",
    class: "ttl_underline",
  },
];
function Midashi({ x }) {
  const { ttl, sub } = Midashis[x];
  return (
    <>
      <h2 className={Midashis[x].class || ""}>
        {Array.isArray(ttl)
          ? ttl.map((x, index) => (
              <span className={x.class || ""} key={index}>
                {x.text}
              </span>
            ))
          : ttl}
        <span className="ttl_sub">{Midashis[x].sub}</span>
      </h2>
    </>
  );
}
export default Midashi;
