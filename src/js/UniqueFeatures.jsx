import React, { useEffect, useRef } from "react";
import Midashi from "./common/Midashi";
import BackgroundText from "./common/Backtext";
import { useInView } from "react-intersection-observer";
import useMediaQuery from "./common/UseMediaQuery.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/effect-coverflow";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Unique() {
  const sectionRef = useRef(null);
  const elementsRef = useRef([]);
  const phone = useMediaQuery("(max-width: 600px)");
  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };
  const swiperRef = useRef(null); // Swiper インスタンス用の ref

  useEffect(() => {
    // 初期化後に再計算を強制
    if (swiperRef.current && swiperRef.current.swiper) {
      setTimeout(() => {
        swiperRef.current.swiper.update(); // Swiper の再計算を実行
      }, 0);
    }
  }, []);
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
            delay: index * 0.1, // 順番にアニメーション
          }
        );
      });
    }
  }, []);

  return (
    <>
      <section ref={sectionRef} id="unique" className="unique">
        <Midashi x={5} />
        <BackgroundText x={3} />
        <div className="unique_container">
          <div className="unique_part" ref={addToRefs}>
            <p className="unique_part-ttl">
              開催ミーティングに独自のロゴマークを設定可能（有料プランのみ）
            </p>
            <img
              className="unique_img"
              src="uni-logo.png"
              alt="開催ミーティングに独自のロゴマークを設定可能"
            />
          </div>
          <div className="unique_part" ref={addToRefs}>
            <p className="unique_part-ttl">
              専用アプリを利用することによる <br className="sp-only" />
              Googleカレンダーへ会議予定の
              <br className="sp-only" />
              登録・参加者の招待が可能
            </p>
            <img
              className="unique_img"
              src="uni-cal.png"
              alt="専用アプリを利用することによGoogleカレンダーへ会議予定の登録・参加者の招待が可能"
            />
          </div>
          <div className="unique_partc" ref={addToRefs}>
            <p className="unique_part-ttl" id="customize">
              カスタマイズ（ビジネスプランのみ）
            </p>
            <p className="unique_part-eg">例：</p>
            {!phone && (
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
            )}
            {phone && (
              <Swiper
                modules={[EffectCoverflow]}
                effect="coverflow"
                grabCursor={true}
                spaceBetween={0}
                loop={true}
                initialSlide={2}
                slidesPerView={1.2}
                centeredSlides={true}
                coverflowEffect={{
                  rotate: 0, // スライドを回転しない
                  stretch: 0, // スライドの間隔を変えない
                  depth: 100, // 奥行きの効果
                  modifier: 2.5, // 効果の強度
                  slideShadows: false, // スライドの影を無効
                }}
              >
                <SwiperSlide>
                  <figure className="unique_part-customize-sp">
                    <img src="uni-cus1.png" alt="専用の待機ルーム" />
                    <figcaption>専用の待機ルーム</figcaption>
                  </figure>
                </SwiperSlide>
                <SwiperSlide>
                  <figure className="unique_part-customize-sp">
                    <img src="uni-cus2.png" alt="勤怠管理" />
                    <figcaption>勤怠管理</figcaption>
                  </figure>
                </SwiperSlide>
                <SwiperSlide>
                  <figure className="unique_part-customize-sp">
                    <img src="uni-cus3.png" alt="シニア見やすさ重視" />
                    <figcaption>シニア見やすさ重視</figcaption>
                  </figure>
                </SwiperSlide>
              </Swiper>
            )}
            <p className="unique_part-sub">※追加機能に応じて料金が発生します</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Unique;
