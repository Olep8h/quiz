import React from 'react'
import './index.scss';

const questions = [
    {
        title: 'React - it is ... ?',
        variants: ['library', 'framework', 'application'],
        correct: 0,
    },
    {
        title: 'Component - it is ... ',
        variants: ['application', 'part of an application or page', 'something that I don`t know'],
        correct: 1,
    },
    {
        title: 'What is JSX?',
        variants: [
            'This is plain HTML',
            'This is a function',
            'This is the same HTML, but with the ability to execute JS code',
        ],
        correct: 2,
    },
];