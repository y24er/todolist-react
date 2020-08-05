export const addTodo = text => ({type: "ADD_TO_DO", text});

export const removeTodo = index => ({type: "REMOVE_TODO", index})

export const changeTodo = (index) => ({type: "CHANGE_TODO", index})

export const initTodo = (todos) => ({type: "INIT_TODO",todos})