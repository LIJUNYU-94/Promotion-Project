import { useState, useEffect } from "react";
import BackgroundText from "./common/Backtext";
import Midashi from "./common/Midashi";
const compare = () => {
  return (
    <>
      <div style={{ backgroundColor: green }}></div>
    </> //仮コンテンツ、表示調整用
  );
};
const strength = [
  {
    id: 0,
    ttl: "コスト抑えたいならZION-MEET！",
    btn: "料金プランをチェック",
    tbl: { compare },
    text: [
      "圧倒的なコスパが良い！費用対効果を検討するの最優選！ビジネスプランは安価で",
      "自社サーバー",
      "に導入する可能！",
    ],
  },
  {
    id: 1,
    ttl: "使いやすさと言えばZION-MEET！",
    btn: "ZION-MEETを体験する",
    img: "st-screen.png",
    alt: "ZION-MEETの使用画面",
    text: [
      "登録不要！アプリダウンロード不要！だれでも",
      "簡単に参加できる！",
      "時間無制限！",
    ],
    sub: "※別ページへ遷移しません",
  },
  {
    id: 2,
    ttl: "カスタマイズすればZION-MEET！",
    btn: "可能性の例をチェック",
    img: "st-customize.png",
    alt: "カストマイズ",
    text: "ご利用ユーザーに合わせて、希望機能の追加も可能！",
    sub: "※追加機能に応じて料金が発生します",
  },
];

const Strengthpart = () => {
  return (
    <>
      {strength.map((x) => (
        <div key={x.id}>
          <h3>{x.ttl}</h3>
          <p>
            {x.text[0]}
            <span>{x.text[1]}</span>
            {x.text[2]}
          </p>
          <p>{x.btn}</p>
          <p>{x.sub || ""}</p>
          <div>
            {x.img === "" ? (
              <div>{x.tbl}</div>
            ) : (
              <div>
                <img src={x.img} alt={x.alt} />
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

const Cases = () => {
  return (
    <>
      <div>
        <img src="docomo.svg" alt="株式会社ドコモCS" />
        <p>株式会社ドコモCS</p>
        <p>導入業務</p>
        <div>
          <p>
            シニア向けスマホ使い方講座 <br />
            （一部の店舗）
          </p>
        </div>
      </div>
      <div>
        <img src="ripty.svg" alt="株式会社リップル" />
        <p>株式会社リップル</p>
        <p>導入業務</p>
        <div>
          <p>入社の面談やリモート業務</p>
        </div>
      </div>
    </>
  );
};
const Strengths = () => {
  return (
    <>
      <div>
        <p>
          <span>そ</span>
          <span>の</span>
          <span>お</span>
          <span>悩</span>
          <span>み</span>
        </p>
      </div>
      <div>
        <Midashi x={2} />
        <section>
          <Strengthpart />
        </section>
        <Midashi x={3} />
        <Cases />
      </div>
    </>
  );
};

export default Strengths;
