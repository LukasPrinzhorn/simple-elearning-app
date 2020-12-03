import { cleanup, render, waitFor, fireEvent, getByTestId, getByText } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils';
import Home from '../Home'
import QuestionCard from '../QuestionCard';
import { Answer } from '../../entities/entities'


it('QuestionCard callback works correctly', async () => {
    const root = document.createElement('div')
    const answers: string[] = ['Yes', 'Maybe', 'No', 'What is a test']
    let markAnswerMock = jest.fn();
    const answer: Answer = {
        questionNumber: 1,
        question: 'Is this a test',
        answers,
        correctAnswers: ['Yes']
    }
    const home = ReactDOM.render(<QuestionCard
        question={'Is this a test?'}
        answers={answers}
        callback={markAnswerMock}
        isFinal={false}
        userAnswer={answer}
        questionNr={1}
        totalQuestions={10} />, root)

    expect(markAnswerMock).not.toBeCalled();

    const leftClick = { button: 1 }
    const correctAnswer = getByText(root, 'Yes')
    act(() => {
        fireEvent.click(correctAnswer, leftClick)
    });

    expect(markAnswerMock).toBeCalled();
})