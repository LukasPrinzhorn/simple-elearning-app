import React from 'react'
import { Question } from './entities/entities'
import shuffleArray from './helper'

const dummyObject = {
    results: [
        {
            image: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
            question: '**What is true about ReactJS**',
            correct_answers: ['Library for building interaction interfaces', 'Created by Facebook',],
            incorrect_answers: [
                'Client Side Framework',
                'Serverside Framework',
            ],
        },
        {
            image: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
            question: 'When did JavaScript first appear?',
            correct_answers: ['1995',],
            incorrect_answers: [
                '2000',
                '1990',
                '1985',
            ],
        },
        {
            image: '',
            question: 'Which of the following facts are true about Angular?',
            correct_answers: ['It uses two-way data binding', 'It is a fully-featured MVC framework', 'It was developed by Google'],
            incorrect_answers: [
                'It is primarily used for Mobile App Development'
            ],
        },
        {
            image: '',
            question: 'Which specific features werde introduced with ECMAScript 2020?',
            correct_answers: ['BigInt', 'matchAll method for strings', 'globalThis', 'A function-like” import() module loading syntax to asynchronously import modules'],
            incorrect_answers: [],
        },
        {
            image: '',
            question: 'What are the advantages of React',
            correct_answers: ['Prompt rendering', 'Updates process is optimised and accelerated', 'React’s native tools for testing, debugging code'],
            incorrect_answers: [
                'JSX React’s documentation',
            ],
        },
    ]
};

export async function fetchQuestions() {
   /* const endpoint = 'https://endpoint';
    const data = await (await fetch(endpoint)).json();*/

    const data = JSON.parse(JSON.stringify(dummyObject))
    const results = data.results.map((question: Question) => ({
        ...question,
        answers: shuffleArray(question.incorrect_answers, question.correct_answers)
    }))
    return results
}