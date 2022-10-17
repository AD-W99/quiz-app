import React from 'react';
import './Start.css';

export default function Start({ startQuiz }) {
    return (
        <div className="screen">
            <div className="start-container">
                <h1>Quizzical</h1>
                <p>Can you get all five questions right?</p>
                <button onClick={startQuiz}>Start quiz</button>
            </div>
        </div>
    )
}