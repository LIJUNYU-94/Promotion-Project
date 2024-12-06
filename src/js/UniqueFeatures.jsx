import { useState, useEffect } from "react";
import Midashi from "./common/Midashi";
function Unique() {
  return (
    <>
      <section className="unique">
        <Midashi x={5} />
        <div className="unique_container">
          <div>
            <p>
              開催ミーティングに独自のロゴマークを設定可能（有料プランのみ）
            </p>
            <img src="" alt="開催ミーティングに独自のロゴマークを設定可能" />
          </div>
          <div>
            <p>
              専用アプリを利用することによGoogleカレンダーへ会議予定の登録・参加者の招待が可能
            </p>
            <img
              src=""
              alt="専用アプリを利用することによGoogleカレンダーへ会議予定の登録・参加者の招待が可能"
            />
          </div>
          <div>
            <p>カスタマイズ（ビジネスプランのみ）</p>
            <p>例</p>
            <div>
              <figure>
                <img src="" alt="専用の待機ルーム" />
                <figcaption>専用の待機ルーム</figcaption>
              </figure>
              <figure>
                <img src="" alt="勤怠管理" />
                <figcaption>勤怠管理</figcaption>
              </figure>
              <figure>
                <img src="" alt="シニア見やすさ重視" />
                <figcaption>シニア見やすさ重視</figcaption>
              </figure>
            </div>
            <p>※追加機能に応じて料金が発生します</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Unique;
