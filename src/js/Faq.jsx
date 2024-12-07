import { useState, useEffect } from "react";
import Midashi from "./common/Midashi";
import BackgroundText from "./common/Backtext";
import data from "./common/data.json";
const faqs = data.faqs;
function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <>
      <div className="faq_container">
        <p className="faq-question">
          <span className="faq-q">Q</span>
          {question}
          <span className="faq-toggle" onClick={onToggle}>
            {isOpen ? "−" : "+"}
          </span>
        </p>

        {isOpen && <div className="faq-answer">{answer}</div>}
      </div>
    </>
  );
}

const Faq = () => {
  const [active, handler] = useState(null);
  const handle = (x) => {
    handler(active === x ? null : x);
  };
  return (
    <section className="faq">
      <Midashi x={8} />
      <BackgroundText x={5} />
      <div className="faq_box">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={active === index}
            onToggle={() => handle(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Faq;
