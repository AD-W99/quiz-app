import './Button.css'

export default function Button({ changeButton, isChosen, isCorrect, answer }) {
    const choiceStyle = {
        backgroundColor: isChosen ? "#D6DBF5" : "#F5F7FB",
    }

    const answerStyle = {
        backgroundColor: isCorrect ? "#94D7A2" : "#F8BCBC"
    }
    
    return (
        <button onClick={changeButton} style={choiceStyle}>{answer}</button>
    )
}