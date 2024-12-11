import { useState, useEffect } from "react";

const Table = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);
  return (
    <div>
      <table
        className={`comparison-table ${isOpen ? "open" : ""}`}
        onClick={toggleOpen}
      >
        <thead>
          <tr>
            <th></th>
            <th>ZION-MEET</th>
            <th>M社</th>
            <th>G社</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>使用環境</td>
            <td className="compare-ziontd">Webブラウザ</td>
            <td>専用アプリ</td>
            <td>Webブラウザ</td>
          </tr>
          <tr>
            <td>アカウント登録</td>
            <td className="compare-ziontd">不要</td>
            <td>主催者は必要</td>
            <td>必要</td>
          </tr>
          <tr>
            <td>金額</td>
            <td className="compare-ziontd">
              初期費用 36,000円
              <br />
              無制限<span className="bold">（人数の制限なし）</span>
              <br />
              月額料金：
              <br />
              <span className="small">
                スタンダード 5,000円〜
                <br />{" "}
              </span>
              <span className="small">ビジネス 15,000円〜</span>
            </td>
            <td>
              プロプラン
              <br />
              <span className="small">
                ¥2,399/ユーザー/月
                <br />
              </span>
              <span className="small">
                ¥23,988/ユーザー/年
                <br />
              </span>
              ビジネスプラン
              <br />
              <span className="small">
                ¥3,299/ユーザー/月
                <br />
              </span>
              <span className="small">¥3,2988/ユーザー/年</span>
            </td>
            <td>
              スタンダード
              <br />
              <span className="small">¥1,632/ユーザー/月</span>
              <span className="small">¥16,320/ユーザー/年</span>
              <br />
              ビジネスプラン <br />
              <span className="small">¥2,448/ユーザー/月</span> <br />
              <span className="small">¥24,480/ユーザー/年</span>
              <br />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
const Cals = () => {
  const [userCount, setUserCount] = useState(15);
  const [plan, setPlan] = useState("sm");
  const [period, setPeriod] = useState("sy");
  const prices = {
    zionMeet: { sm: 5000, bm: 15000 },
    mCompany: {
      sm: { standard: 2399, business: 3299 },
      sy: { standard: 23988, business: 32988 },
    },
    gCompany: {
      sm: { standard: 1632, business: 2448 },
      sy: { standard: 16320, business: 24480 },
    },
  };
  const calculateZionMeet = () => {
    const baseCost = 36000;
    const monthlyCost = prices.zionMeet[plan];
    const userCost = period === "sm" ? monthlyCost : monthlyCost * 12;
    return baseCost + userCost;
  };
  const calculateMCompany = () => {
    const planType = plan === "sm" || plan === "sy" ? "standard" : "business";
    const costPerUser = prices.mCompany[period][planType];
    return userCount * costPerUser;
  };
  const calculateGCompany = () => {
    const planType = plan === "sm" || plan === "sy" ? "standard" : "business";
    const costPerUser = prices.gCompany[period][planType];
    return userCount * costPerUser;
  };

  return (
    <div className="complare-calc-container">
      <div className="complare-calc-left">
        <form>
          <label htmlFor="user-count">ユーザー数：</label>
          <input
            type="number"
            id="user-count"
            name="user-count"
            className="complare-calc-user"
            value={userCount}
            onChange={(e) => setUserCount(Number(e.target.value))}
            min="0"
          />
          <label htmlFor="plan">プラン：</label>
          <select
            id="plan"
            name="plan"
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
          >
            <option value="sm">スタンダード</option>
            <option value="bm">ビジネス</option>
          </select>
          <div className="complare-calc-period">
            <label>
              <input
                type="radio"
                id="period-month"
                name="period"
                value="sm"
                checked={period === "sm"}
                onChange={() => setPeriod("sm")}
              />
              月額
            </label>
            <label>
              <input
                type="radio"
                id="period-year"
                name="period"
                value="sy"
                checked={period === "sy"}
                onChange={() => setPeriod("sy")}
              />
              年額
            </label>
          </div>
        </form>
      </div>
      <div className="complare-calc-right">
        <p>M社：</p>
        <p>{calculateMCompany()}円～</p>

        <p>G社：</p>
        <p>{calculateGCompany()}円～</p>

        <p className="complare-calc-zion">ZION-MEET：</p>
        <p className="complare-calc-ziona">{calculateZionMeet()}円～</p>
      </div>
    </div>
  );
};

function Compare() {
  const [part, change] = useState("table");
  const partChange = () => {
    change((x) => (x === "table" ? "cals" : "table"));
  };
  return (
    <div className="strengths_part-tbl">
      <div></div>
      <p className="compare-ttl">
        {part === "table" ? <>主要サービスの比較</> : <>費用計算ツール</>}
      </p>
      <p className="compare-calc" onClick={partChange}>
        {part === "table" ? (
          <>
            費<br />
            用<br />
            計<br />算
          </>
        ) : (
          <>
            比<br />
            較<br />表
          </>
        )}
      </p>
      <div className="compare-box">
        {part === "table" ? <Table /> : <Cals />}
      </div>
    </div>
  );
}
export default Compare;
