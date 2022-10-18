import { useState } from 'react';
import Question from './Question';

export default function Quiz({ triviaData }) {
    const [showAnswers, setShowAnswers] = useState(false);

    const questions = triviaData.map((obj, index) => {
        let randomNum = Math.floor(Math.random() * 4);

        return <Question
            key={index}
            questionDetails={obj}
            randomNum={randomNum}
            showAnswers={showAnswers}
        />
    });

    function revealAnswers() {
        setShowAnswers(true);
    }

    return (
        <div className='container'>
            <div className='questions-container'>
                {questions}
            </div>
            <button onClick={revealAnswers}>Check answers</button>
        </div>
    );
}