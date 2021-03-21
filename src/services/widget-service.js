// const COURSES_URL = "https://wbdv-generic-server.herokuapp.com/api/001385626/courses"
// const MODULES_URL = "https://wbdv-generic-server.herokuapp.com/api/001385626/modules"
const LESSONS_URL = "https://wbdv-generic-server.herokuapp.com/api/001385626/lessons"
const TOPICS_URL = "https://wbdv-generic-server.herokuapp.com/api/001385626/topics"
const WIDGET_URL = process.env.REACT_APP_WIDGET_URL

export const createWidget = (topicId, widget) =>
    fetch(`${WIDGET_URL}/api/topics/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const updateWidget = (wid, widget) =>
    fetch(`${WIDGET_URL}/api/widgets/${wid}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const findWidgetsForTopic = (topicId) =>
    fetch(`${WIDGET_URL}/api/topics/${topicId}/widgets`)
        .then(response => response.json())

export const deleteWidget = (wid) =>
    fetch(`${WIDGET_URL}/api/widgets/${wid}`, {
        method: "DELETE",
    }).then(response => response.json());

const api = {
    createWidget, updateWidget, findWidgetsForTopic, deleteWidget
}

export default api;