export default function Question({ questionDetails }) {
    return (
        <>
            <h3>{questionDetails.question}</h3>
            <p>{questionDetails.correct_answer}</p>
            <p>{questionDetails.incorrect_answers[0]}</p>
            <p>{questionDetails.incorrect_answers[1]}</p>
            <p>{questionDetails.incorrect_answers[2]}</p>
        </>
    )
}