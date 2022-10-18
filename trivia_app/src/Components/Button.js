import './Button.css'

export default function Button({ 
    changeButton,
    isChosen,
    isCorrect,
    answer,
    showAnswers
}) {
    const choiceStyle = {
        backgroundColor: isChosen ? "#D6DBF5" : "#F5F7FB",
    }

    const rightStyle = {
        backgroundColor: "#94D7A2"
    }

    const wrongStyle = {
        backgroundColor: "#F8BCBC"
    }

    let finalAnswer;

    if (isChosen && !isCorrect) {
        finalAnswer = wrongStyle;
    } else if (isCorrect) {
        finalAnswer = rightStyle;
    } else {
        finalAnswer = {
            backgroundColor: "#F5F7FB"
        }
    }
    
    return (
        <button onClick={changeButton} style={showAnswers ? finalAnswer : choiceStyle}>{answer}</button>
    )
}