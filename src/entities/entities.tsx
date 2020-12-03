export type Question = {
    image: string,
    correct_answers: string[],
    incorrect_answers: string[],
    question: string,
}

export type ExtendedQuestion = Question & { answers: string[] };

export type Answer = {
    questionNumber: number,
    question: string,
    answers: string[],
    correctAnswers: string[]
}