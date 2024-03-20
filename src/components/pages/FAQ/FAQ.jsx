import React, { useState, useEffect } from "react";
import FAQHero from "./FAQHero/FAQHero";
import Questions from "./Questions/Questions";
import FAQFooter from "./FAQFooter/FAQFooter";
import { faq_questions } from "../../../constants";

const FAQ = () => {
  const allQuestions = faq_questions.flatMap((section) => section.questions);
  const [questionsList, setQuestionsList] = useState(allQuestions);
  const [originalQuestionsList, setOriginalQuestionsList] =
    useState(allQuestions);
  const [userIsSearching, setUserisSearching] = useState(false);

  useEffect(() => {
    setOriginalQuestionsList(allQuestions);
  }, []);

  const searchQuestion = (word) => {
    setUserisSearching(true);
    const lowercaseWord = word.toLowerCase();
    const filteredList = originalQuestionsList.filter((item) => {
      const titleMatch = item.title.toLowerCase().includes(lowercaseWord);
      const answerMatch = item.answer.toLowerCase().includes(lowercaseWord);
      return lowercaseWord === "" || titleMatch || answerMatch;
    });
    setUserisSearching(word.length > 0);
    setQuestionsList(filteredList);
  };

  return (
    <div>
      <FAQHero onSearchQuestion={searchQuestion} />
      <Questions questions={questionsList} onSearch={userIsSearching} />
      <FAQFooter />
    </div>
  );
};

export default FAQ;
