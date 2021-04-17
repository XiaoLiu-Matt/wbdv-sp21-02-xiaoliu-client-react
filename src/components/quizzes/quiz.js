import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import Question from "./questions/question";
import api from '../../services/question-service'
import apiQuiz from '../../services/quiz-service'
const Quiz = () => {
    const {quizId} = useParams()
    const [questions, setQuestions] = useState([])
    useEffect(() => {
        // TODO: move this to a service file
        api.findQuestionsForQuiz(quizId)
            .then((questions) => {
                setQuestions(questions)
                console.log(questions)
            })
    }, [])

    return(
        <div>
            {/*<h3>Quiz {quizId} ({questions.length})</h3>*/}
            <ul>
                {
                    questions.map((question) => {

                        return(
                            <li>
                                <Question question={question}/>
                            </li>
                        )
                    })
                }
            </ul>
            <button className="btn btn-success" onClick={()=>{apiQuiz.submitQuiz(quizId,questions)}}>
                Submit
            </button>

        </div>
    )
}

export default Quiz;