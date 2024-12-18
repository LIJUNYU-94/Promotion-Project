import "./css/Style.css";
import Header from "./js/pc/Header";
import Headersp from "./js/sp/Headersp";
import Nav from "./js/pc/Nav";
import Keyvisual from "./js/Keyvisual";
import Era from "./js/Era";
import Concerns from "./js/Concerns";
import Strengths from "./js/Strengths";
import Try from "./js/Try";
import Bottombtn from "./js/pc/Bottombtn";
import Bottombtnsp from "./js/sp/Bottombtnsp";
import Unique from "./js/UniqueFeatures";
import Price from "./js/Price";
import Step from "./js/Step";
import Stepsp from "./js/sp/Stepsp";
import Faq from "./js/Faq";
import Footer from "./js/pc/footer";
import Footersp from "./js/sp/footersp";
import Backtotop from "./js/common/backtotop";
import useMediaQuery from "./js/common/UseMediaQuery";
function App() {
  const phone = useMediaQuery("(max-width: 600px)");
  const stepsp = useMediaQuery("(max-width: 918px)");
  return (
    <div className="body">
      {phone ? <Headersp /> : <Header />}
      <Keyvisual />
      {!phone && <Nav />}
      {phone ? <Bottombtnsp /> : <Bottombtn />}
      <Era />
      <Concerns />
      <Strengths />
      {!phone && <Try />}
      <Unique />
      <Price />
      {stepsp ? <Stepsp /> : <Step />}
      <Faq />
      {phone ? <Footersp /> : <Footer />}
      <Backtotop />
    </div>
  );
}

export default App;
