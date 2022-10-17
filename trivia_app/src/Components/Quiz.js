import React from 'react';
import Question from './Question';

export default function Quiz({ triviaData }) {
    const questions = triviaData.map((obj, index) => {
        return <Question key={index} questionDetails={obj} />
    })

    return (
        <>
            {questions}
        </>
    )
}