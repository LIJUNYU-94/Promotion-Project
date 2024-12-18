import { useState, useEffect } from "react";

const BackgroundTexts = [
  "ZION-MEET",
  "Opportunity",
  "CASE STUDY",
  "Unique Features",
  "Service Plan",
  "Customer Q＆A",
];
function BackgroundText({ x }) {
  return (
    <div className="backtext-box">
      <p className="backtext">{BackgroundTexts[x]}</p>
      <p className="backtext">{BackgroundTexts[x]}</p>
    </div>
  );
}
export default BackgroundText;
