
const QUIZZES_URL = 'https://xiaoliunodeserver.herokuapp.com/api/quizzes';
const findQuestionsForQuiz = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}/questions`)
        .then(response => {
            const result = response.json()
            return result})
}
export default {
    findQuestionsForQuiz
}

