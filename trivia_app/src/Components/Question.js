import { useState } from 'react';
import Button from './Button';
import './Question.css'

export default function Question({ 
    questionDetails,
    randomNum,
    showAnswers,
    rightAnswers
}) {
    function generateChoices() {

        const answersArray = [
            {
                answer: questionDetails.incorrect_answers[0],
                isChosen: false,
                isCorrect: false
            },
            {
                answer: questionDetails.incorrect_answers[1],
                isChosen: false,
                isCorrect: false
            },
            {
                answer: questionDetails.incorrect_answers[2],
                isChosen: false,
                isCorrect: false
            }
        ];
        const correctAnswer = {
            answer: questionDetails.correct_answer,
            isChosen: false,
            isCorrect: true
        }
        answersArray.splice(randomNum, 0, correctAnswer);

        return answersArray;
    }

    const [allChoices, setAllChoices] = useState(generateChoices())


    const changeButton = (e) => {
        if (showAnswers) return;
        
        setAllChoices(prevState => 
            prevState.map(obj => {
                if (e.target.innerText === obj.answer) {
                    obj.isChosen = true;

                    if (obj.isCorrect) {
                        rightAnswers.current += 1;
                    }
                } else {
                    obj.isChosen = false;
                }

                return obj;
            })
        )
    }

    const choices = allChoices.map((choice, index) => {
        return <Button
                    changeButton={changeButton}
                    key={index}
                    isChosen={choice.isChosen}
                    isCorrect={choice.isCorrect}
                    answer={choice.answer}
                    showAnswers={showAnswers}
                />
    })

    return (
        <div className='single-question-container'>
            <h3 className='question'>{questionDetails.question}</h3>
            {choices}
        </div>
    )
}