import React,{useState} from "react";

const TrueFalseQuestion = ({question}) => {

    const [yourAnswer, setYourAnswer] = useState("")
    const [pickYourAnswer, setPickYourAnswer] = useState("")
    return(
        <div>
        <ul className="list-group">
            <h5>{question.question}


                    {
                        yourAnswer !== ''&& question.correct === yourAnswer &&
                            <i className="fas fa-check wbdv-green"></i>
                    }
                    {
                        yourAnswer !== ''&& question.correct !== yourAnswer &&
                    <i className="fas fa-times wbdv-red"></i>
                    }


            </h5>

            <li className={`list-group-item ${yourAnswer === '' ? '' :`${yourAnswer === question.correct ? 'list-group-item-success' : 'list-group-item-danger'}`}`}>
            <label><input onClick={() => {
                setPickYourAnswer("true")
            }}  type="radio" name={question._id}/> True</label>
            </li>
            <li className={`list-group-item ${yourAnswer === '' ? '' :`${yourAnswer === question.correct ? 'list-group-item-success' : 'list-group-item-danger'}`}`}>
            <label><input onClick={() => {
                setPickYourAnswer("false")
            }} type="radio" name={question._id}/> False</label>
            </li>

        </ul>
            <p>
                Your answer: {yourAnswer}
            </p>
            <button className="btn btn-success" onClick={()=>{setYourAnswer(pickYourAnswer)}}>
                Grade
            </button>
            <hr/>
        </div>
    )
}

export default TrueFalseQuestion