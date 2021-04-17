const QUIZZES_URL = 'https://xiaoliunodeserver.herokuapp.com';
const findAllQuizzes = () => {
    return fetch(`${QUIZZES_URL}/api/quizzes`)
        .then(response => response.json())
}
const findQuizById = (qid) => {
    return fetch(`${QUIZZES_URL}/api/quizzes/${qid}`)
        .then(response => {
            const result = response.json()
            return result})
}
const submitQuiz = (quizId, questions) => {
    fetch(`${QUIZZES_URL}/api/quizzes/${quizId}/attempts`, {
        method: 'POST',
        body: JSON.stringify(questions),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
        .then(result => console.log(result))
}

export default {
    findAllQuizzes, findQuizById, submitQuiz
}
