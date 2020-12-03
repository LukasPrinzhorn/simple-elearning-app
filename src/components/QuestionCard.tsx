import React from 'react'
import { Answer, ExtendedQuestion } from '../entities/entities'
import { ButtonWrapper, CardWrapper } from './QuestionCard.styles'

type Props = {
    questions: ExtendedQuestion[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: Answer | undefined;
    questionNr: number;
    isFinal: boolean;
    totalQuestions: number;
}


const QuestionCard: React.FC<Props> = ({
    questions,
    isFinal,
    callback,
    userAnswer,
    questionNr,
    totalQuestions }) => {
    const currentQuestion = questions[questionNr - 1];
    return (
        <CardWrapper>
            <p className='number'>Question {questionNr} / {totalQuestions}</p>
            <p dangerouslySetInnerHTML={{ __html: currentQuestion.question }} />
            {currentQuestion.image !== null && currentQuestion.image !== '' && (
                <img src={currentQuestion.image} alt='image' />
            )}
            {currentQuestion.answers.map(
                (answer) => (
                    <ButtonWrapper
                        key={answer}
                        id={answer}
                        correct={userAnswer ? userAnswer.correctAnswers.includes(answer) : false}
                        isFinal={isFinal}
                        userClicked={userAnswer ? userAnswer.answers.includes(answer) : false}>
                        <button disabled={isFinal} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </ButtonWrapper>
                )
            )}
        </CardWrapper>
    )
}

export default QuestionCard;