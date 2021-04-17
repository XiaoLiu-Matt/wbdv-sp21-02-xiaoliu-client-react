
const QUIZZES_URL = 'http://localhost:4000/api/quizzes';
const findQuestionsForQuiz = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}/questions`)
        .then(response => {
            const result = response.json()
            return result})
}
export default {
    findQuestionsForQuiz
}

