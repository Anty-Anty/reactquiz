function StartScreen({numQuestions}) {
    return (
        <div className="start">
            <h2>Welcome</h2>
            <h3>{numQuestions} questions</h3>
            <button className="btn btn-ui">Let's start</button>
        </div>
    )
}

export default StartScreen
