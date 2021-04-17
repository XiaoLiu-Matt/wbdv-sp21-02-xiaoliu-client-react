import React, {useState} from "react";

const MultipleChoiceQuestion = ({question}) => {
    const [yourAnswer, setYourAnswer] = useState("")
    const [pickYourAnswer, setPickYourAnswer] = useState("")
    return(
        <div>
            <h5>
                {question.question}
                {
                    yourAnswer !== ''&& question.correct === yourAnswer &&
                    <i className="fas fa-check wbdv-green"></i>
                }
                {
                    yourAnswer !== ''&& question.correct !== yourAnswer &&
                    <i className="fas fa-times wbdv-red"></i>
                }
            </h5>
            <ul className="list-group">
                {
                    question.choices.map((choice) => {
                        return(
                            <li className={`list-group-item ${yourAnswer === '' ? '' :`${yourAnswer === question.correct ? 'list-group-item-success' : 'list-group-item-danger'}`}`}>
                                <label><input
                                    onClick={() => {
                                        setPickYourAnswer(choice)
                                    }}
                                    type="radio"
                                    name={question._id}/> {choice}</label>
                            </li>
                        )
                    })
                }
            </ul>
            <p>
                Your answer: {yourAnswer}
            </p>
            {/*<button className="btn btn-success" onClick={()=>{setYourAnswer(pickYourAnswer)}}>*/}
            {/*    Grade*/}
            {/*</button>*/}
            {/*<p>{question.correct}</p>*/}
            {/*<p></p>*/}
            {/*<p>{question.type}</p>*/}
        </div>
    )
}

export default MultipleChoiceQuestion