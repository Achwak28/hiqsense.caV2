import React, { useState, useEffect } from "react";
import FAQHero from "./FAQHero/FAQHero";
import Questions from "./Questions/Questions";
import FAQFooter from "./FAQFooter/FAQFooter";
import { faq_answers } from "../../../constants";

const FAQ = () => {
  const [questionsList, setQuestionsList] = useState(faq_answers);
  const [originalQuestionsList, setOriginalQuestionsList] = useState(faq_answers);

  useEffect(() => {
    setOriginalQuestionsList(faq_answers);
  }, []);

  const searchQuestion = (word) => {
    const lowercaseWord = word.toLowerCase();
    const filteredList = originalQuestionsList.filter((item) => {
      const titleMatch = item.title.toLowerCase().includes(lowercaseWord);
      const answerMatch = item.answer.toLowerCase().includes(lowercaseWord);
      return lowercaseWord === '' || titleMatch || answerMatch;
    });
    setQuestionsList(filteredList);
  };

  return (
    <div>
      <FAQHero onSearchQuestion={searchQuestion} />
      <Questions questions={questionsList} />
      <FAQFooter />
    </div>
  );
};

export default FAQ;
