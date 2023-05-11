import React, { useState } from 'react';


export default function App() {
	const questions = [
		{
			questionText: 'What is my name?',
			answerOptions: [
				{ answerText: 'Osman', isCorrect: false },
				{ answerText: 'Mahmut', isCorrect: false },
				{ answerText: 'Adnan', isCorrect: true },
				{ answerText: 'Faruk', isCorrect: false },
			],
		},
		{
			questionText: 'Which programming language do I use?',
			answerOptions: [
				{ answerText: 'Java', isCorrect: false },
				{ answerText: 'C#', isCorrect: true },
				{ answerText: 'Python', isCorrect: false },
				{ answerText: 'Go', isCorrect: false },
			],
		},
		{
			questionText: 'Which country am I from?',
			answerOptions: [
				{ answerText: 'Turkey', isCorrect: true },
				{ answerText: 'Morocco', isCorrect: false },
				{ answerText: 'Singapore', isCorrect: false },
				{ answerText: 'India', isCorrect: false },
			],
		},
		{
			questionText: 'Which JS library or framework is mostly used by programmers?',
			answerOptions: [
				{ answerText: 'Svelte', isCorrect: false },
				{ answerText: 'Angular', isCorrect: false },
				{ answerText: 'Vue', isCorrect: false },
				{ answerText: 'React', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}