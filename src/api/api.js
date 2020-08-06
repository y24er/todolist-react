import axios from "axios";

const API = 'http://localhost:8081/todos'
export default {
    getTodo: () => {
        return axios.get(API)
    },

    putTodo: (id, status) => {
        return axios.put(API + `/${id}`, {status: !status})
    },

    deleteTodo: id => {
        return axios.delete(API + `/${id}`)
    },

    postTodo: todo => {
        return axios.post(API, todo)
    }
}