import { useState, useEffect } from "react";
import Midashi from "./common/Midashi";
import BackgroundText from "./common/Backtext";
function Price() {
  return (
    <>
      <section className="price">
        <Midashi x={6}></Midashi>
        <BackgroundText x={4} />
        <div className="price_container">
          <p className="price_text">プラン共通：初期費用36,000円</p>
          <div className="price_plan-container">
            <div className="price_plan price_plan-standard">
              <p className="price_plan-ttl">
                <span>スタンダード</span>プラン
              </p>
              <img src="price-std.png" alt="スタンダードプラン" />
              <p className="price_plan-price">
                <span>￥</span>
                <span>5,000</span>～<span>/</span>月
              </p>
              <p className="price_plan-cp">お手軽にスタート！</p>
              <p className="price_plan-text">
                このプランでは、株式会社ZIONのサーバーを利用し、専用URLを貸し出してご利用いただけます。
              </p>
            </div>
            <div className="price_plan price_plan-business">
              <p className="price_plan-ttl ">
                <span>ビジネス</span>プラン
              </p>

              <img src="price-business.png" alt="ビジネスプラン" />
              <p className="price_plan-price">
                <span>￥</span>
                <span>15,000</span>～<span>/</span>月
              </p>
              <p className="price_plan-cp">自社サーバー導入で安心運用！</p>
              <p className="price_plan-text">
                このプランでは、貴社のサーバーに直接システムを導入し、セキュリティーや柔軟性よくてご利用いただけます。
              </p>
            </div>
            <p className="price_sub">
              ※1. ご利用開始まで1～3営業日いただきます。 <br />
              ※2. プランによってはご利用開始時期が変動する場合があります。
              <br />
              ※3.
              ビジネスプランの場合、保守料金として別途ご請求になる場合がございます。
            </p>
            <button className="price_button">
              導入検討のご相談はこちら
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12.6 11.9998L8.70005 8.0998C8.51672 7.91647 8.42505 7.68314 8.42505 7.3998C8.42505 7.11647 8.51672 6.88314 8.70005 6.6998C8.88338 6.51647 9.11671 6.4248 9.40005 6.4248C9.68338 6.4248 9.91672 6.51647 10.1 6.6998L14.7 11.2998C14.8 11.3998 14.871 11.5081 14.913 11.6248C14.955 11.7415 14.9757 11.8665 14.975 11.9998C14.9744 12.1331 14.9537 12.2581 14.913 12.3748C14.8724 12.4915 14.8014 12.5998 14.7 12.6998L10.1 17.2998C9.91672 17.4831 9.68338 17.5748 9.40005 17.5748C9.11671 17.5748 8.88338 17.4831 8.70005 17.2998C8.51672 17.1165 8.42505 16.8831 8.42505 16.5998C8.42505 16.3165 8.51672 16.0831 8.70005 15.8998L12.6 11.9998Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Price;
