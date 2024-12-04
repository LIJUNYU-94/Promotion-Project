import { useState } from "react";
import "./css/Style.css";
import BackgroundText from "./js/common/Backtext";
import Header from "./js/pc/Header";
import Nav from "./js/pc/Nav";
import Keyvisual from "./js/Keyvisual";
import Era from "./js/Era";
import Concerns from "./js/Concerns";
import Strengths from "./js/Strengths";
import Try from "./js/Try";
import Bottombtn from "./js/pc/Bottombtn";
function App() {
  return (
    <div className="body">
      <Header />
      <Keyvisual />
      <Nav />
      <Bottombtn />
      <Era />
      <Concerns />
      <Strengths />
      <Try />
    </div>
  );
}

export default App;
