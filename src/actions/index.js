export const addTodo = content => ({type: "ADD_TO_DO", content: content});

export const removeTodo = id => ({type: "REMOVE_TODO", id: id})

export const changeTodo = (id) => ({type: "CHANGE_TODO", id: id})

export const initTodo = (todos) => ({type: "INIT_TODO", todos})