import React, { useState, useEffect } from 'react';
import Start from './Components/Start';
import Quiz from './Components/Quiz';

function App() {
  const [quizStart, setQuizStart] = React.useState(false);

  function startQuiz() {
    setQuizStart(prevState => !prevState)
  }

  return (
    <div>
      {quizStart ? <Quiz /> : <Start startQuiz={startQuiz} />}
    </div>
  );
}

export default App;
