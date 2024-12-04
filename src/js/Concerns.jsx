import { useState, useEffect } from "react";
import React from "react"; // 必要に応じてReactをインポート
import Midashi from "./common/Midashi";
import BackgroundText from "./common/Backtext";
const concernText = [
  {
    id: 0,
    texts: [
      "高齢者に対して、IDやパスワードの",
      "管理が煩雑、機能が多すぎて操作方法が分かりづらい、",
      "設定やトラブル対応が難しい...",
    ],
  },
  {
    id: 1,
    texts: [
      "成功事例がまだ少ない中で、自分たちのサービスが本当にターゲットの需要に合っているのか、",
      "費用に見合う効果があるのか",
      "を判断するのは難しい...",
    ],
  },
  {
    id: 2,
    texts: [
      "今のオンラインMTGツールは",
      "安価とは言えず、試行錯誤には大きな負担が伴う",
      "ため、それに対応する余裕がないかもしれない...",
    ],
  },
];
const Concerns = () => {
  return (
    <>
      <Midashi x={1} />
      <div>
        {concernText.map((x) => {
          return (
            <div key={x.id}>
              <p>
                {x.texts[0]}
                <span>{x.texts[1]}</span>
                {x.texts[2]}
              </p>
            </div>
          );
        })}
      </div>
      <BackgroundText x={1} />
    </>
  );
};

export default Concerns;
