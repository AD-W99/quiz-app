import React, { useState, useEffect } from 'react';
import Start from './Components/Start';
import Quiz from './Components/Quiz';
import './App.css';

function App() {
  const [quizStart, setQuizStart] = useState(false);
  const [triviaData, setTriviaData] = useState([])

  function startQuiz() {
    setQuizStart(prevState => !prevState)
  }

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then(res => res.json())
      .then(data => setTriviaData(data.results.map(obj => {
        if (obj.question.includes("&#039;")) {
          obj.question = obj.question.replace(/&#039;/g, "'")
        }
        if (obj.question.includes("&amp;")) {
          obj.question = obj.question.replace(/&amp;/g, "&")
        }
        if (obj.question.includes("&quot;")) {
          obj.question = obj.question.replace(/&quot;/g, '"')
        }
        if (obj.question.includes("&shy;")) {
          obj.question = obj.question.replace(/&shy;/g, "")
        }
        if (obj.question.includes("&eacute;")) {
          obj.question = obj.question.replace(/&eacute;/g, "")
        }
        if (obj.question.includes("&ldquo;")) {
          obj.question = obj.question.replace(/&ldquo;/, '"')
        }
        if (obj.question.includes("&rdquo;")) {
          obj.question = obj.question.replace(/&rdquo;/, '"')
        }               

        return obj
    })))
  }, [])

  return (
    <div>
      {quizStart ? <Quiz triviaData={triviaData} /> : <Start startQuiz={startQuiz} />}
    </div>
  );
}

export default App;