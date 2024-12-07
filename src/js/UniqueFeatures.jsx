import { useState, useEffect } from "react";
import Midashi from "./common/Midashi";
import BackgroundText from "./common/Backtext";

function Unique() {
  return (
    <>
      <section className="unique">
        <Midashi x={5} />
        <BackgroundText x={3} />
        <div className="unique_container">
          <div className="unique_part">
            <p className="unique_part-ttl">
              開催ミーティングに独自のロゴマークを設定可能（有料プランのみ）
            </p>
            <img
              className="unique_img"
              src="uni-logo.png"
              alt="開催ミーティングに独自のロゴマークを設定可能"
            />
          </div>
          <div className="unique_part">
            <p className="unique_part-ttl">
              専用アプリを利用することによGoogleカレンダーへ会議予定の登録・参加者の招待が可能
            </p>
            <img
              className="unique_img"
              src="uni-cal.png"
              alt="専用アプリを利用することによGoogleカレンダーへ会議予定の登録・参加者の招待が可能"
            />
          </div>
          <div className="unique_partc">
            <p className="unique_part-ttl">
              カスタマイズ（ビジネスプランのみ）
            </p>
            <p className="unique_part-eg">例：</p>
            <div className="unique_part-customize">
              <figure>
                <img src="uni-cus1.png" alt="専用の待機ルーム" />
                <figcaption>専用の待機ルーム</figcaption>
              </figure>
              <figure>
                <img src="uni-cus2.png" alt="勤怠管理" />
                <figcaption>勤怠管理</figcaption>
              </figure>
              <figure>
                <img src="uni-cus3.png" alt="シニア見やすさ重視" />
                <figcaption>シニア見やすさ重視</figcaption>
              </figure>
            </div>
            <p className="unique_part-sub">※追加機能に応じて料金が発生します</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Unique;
