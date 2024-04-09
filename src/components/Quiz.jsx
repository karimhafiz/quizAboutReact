import React, { useCallback, useRef, useState } from "react";
import Question from "./Question";
import Summary from "./Summary";
import QUESTIONS from "../questions";
export default function Quiz() {
	const [userAnswers, setUserAnswers] = useState([]);

	const activeQuestionIndex = userAnswers.length;

	const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

	const handleSelectAnswer = useCallback(function handleSelectAnswer(
		selectedAnswer
	) {
		setUserAnswers((prevUserAnswer) => {
			return [...prevUserAnswer, selectedAnswer];
		});
		//check if the correct answer was selected
	},
	[]);

	const handleSkipAnswer = useCallback(() => {
		handleSelectAnswer(null);
	}, [handleSelectAnswer]);

	if (quizIsComplete) {
		return <Summary userAnswers={userAnswers} />;
	}

	return (
		<div id="quiz">
			<Question
				key={activeQuestionIndex}
				index={activeQuestionIndex}
				onSelectAnswer={handleSelectAnswer}
				onSkipAnswer={handleSkipAnswer}
			/>
		</div>
	);
}
