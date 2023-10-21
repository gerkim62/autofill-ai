import React from "react";
import FAQItem from "./FAQItem"; // Make sure to import the component

type faq = {
  question: string;
  answer: string;
};
type Props = {
  faqs: faq[];
};

const FAQ = ({faqs}:Props) => {
  return (
    <div>
      {faqs.map((faq) => (
        <FAQItem question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQ;
