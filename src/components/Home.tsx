import React, { useState } from 'react'
import QuestionCard from './QuestionCard'
import { fetchQuestions } from '../api'
import { ExtendedQuestion, Answer } from '../entities/entities'
import { GlobalStyle, Wrapper } from '../App.styles';
import { arraysEqual } from '../helper';

const TOTAL_QUESTIONS = 5;

export default function Home() {
    const [started, setStarted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [questions, setQuestion] = useState<ExtendedQuestion[]>([]);
    const [number, setNumber] = useState(0);
    const [answerList, setAnswerList] = useState<Answer[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);
    const [finalAnswer, setFinalAnswer] = useState(false);


    async function startQuiz() {
        setLoading(true)
        setGameOver(false)

        const newQuestions = await fetchQuestions()
        setQuestion(newQuestions)
        setScore(0)
        setAnswerList([])
        setNumber(0)
        setStarted(true)
        setLoading(false)
    }

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        const userAnswers: string[] = answerList[number].answers
        const correctAnswers: string[] = questions[number].correct_answers
        setFinalAnswer(true);

        if (arraysEqual(userAnswers, correctAnswers)) setScore(prev => prev + 1)
    }

    function nextQuestion() {
        if (number !== TOTAL_QUESTIONS - 1) {
            setNumber(previousNumber => previousNumber + 1)
            setFinalAnswer(false)
        }
    }

    function endQuiz() {
        setGameOver(true)
        setFinalAnswer(false)
    }

    const markAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!finalAnswer) {
            const answerValue = e.currentTarget.value;
            let answerArray: string[] = [];

            if (answerList.length === 0 || answerList.length <= number || answerList[number].answers.length === 0) {
                //if no useranswers are registered
                answerArray.push(answerValue);
            } else {
                //if useranswers are registered
                if (answerList[number].answers.includes(answerValue)) {
                    //if answer was already marked
                    answerArray = answerList[number].answers
                    let index = answerArray.indexOf(answerValue)
                    if (index !== -1) {
                        answerArray.splice(index, 1);
                    }
                } else {
                    //if answer wasn't marked
                    answerArray = answerList[number].answers
                    answerArray.push(answerValue);
                }
            }
            const answer: Answer = {
                questionNumber: number,
                question: questions[number].question,
                answers: answerArray,
                correctAnswers: questions[number].correct_answers,
            }


            let answerListCopy = [...answerList] //spread in order to get rid of the reference
            answerListCopy.splice(number, 1)
            answerListCopy.push(answer)
            setAnswerList(answerListCopy)
        }
    }


    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <div className="App">
                    <h1>Simple Quiz</h1>
                    {gameOver ? (
                        <button id='startButton' className='start' onClick={() => startQuiz()}>Start Quiz</button>
                    ) : null}
                    {started ? (
                        <p id='scoreField' className='score'>Score: {score}</p>
                    ) : null}
                    {loading && (
                        <p>Loading....</p>)
                    }
                    {!loading && !gameOver && (
                        <QuestionCard
                            questions={questions}
                            callback={markAnswer}
                            isFinal={finalAnswer}
                            userAnswer={answerList ? answerList[number] : undefined}
                            questionNr={number + 1}
                            totalQuestions={TOTAL_QUESTIONS} />
                    )}
                    {!loading && !gameOver && !finalAnswer && (
                        <button id='checkButton' className='next' disabled={answerList.length !== number + 1 || answerList[number].answers.length === 0} onClick={checkAnswer}>Check Answer</button>
                    )}
                    {!loading && !gameOver && finalAnswer && number !== TOTAL_QUESTIONS - 1 ? (
                        <button className='next' onClick={nextQuestion}>Next Question</button>
                    ) : null}
                    {!loading && !gameOver && (
                        <button id='endButton' className='end' onClick={endQuiz}>End Quiz</button>
                    )}
                </div >
            </Wrapper>
        </>
    )
}

