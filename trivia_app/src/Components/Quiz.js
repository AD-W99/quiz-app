import { useState, useRef } from 'react';
import Question from './Question';

export default function Quiz({ triviaData }) {
    const [showAnswers, setShowAnswers] = useState(false);
    const rightAnswers = useRef(0);

    const questions = triviaData.map((obj, index) => {
        let randomNum = Math.floor(Math.random() * 4);

        return <Question
            key={index}
            questionDetails={obj}
            randomNum={randomNum}
            showAnswers={showAnswers}
            rightAnswers={rightAnswers}
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
            <div>
                {showAnswers && <p>You scored {rightAnswers.current}/5 correct answers</p>}
                <button className='check-answers-btn' onClick={revealAnswers}>Check answers</button>
            </div>
        </div>
    );
}