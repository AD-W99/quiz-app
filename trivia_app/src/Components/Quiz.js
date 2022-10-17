import React from 'react';
import Question from './Question';

export default function Quiz({ triviaData }) {
    const randomNum = Math.floor(Math.random() * 4);
    const questions = triviaData.map((obj, index) => {
        return <Question key={index} questionDetails={obj} randomNum={randomNum} />
    })

    return (
        <>
            {questions}
        </>
    )
}