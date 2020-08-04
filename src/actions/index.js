export const addTodo = text => ({type: "ADD_TO_DO", text});

export const removeTodo = index => ({type: "REMOVE_TODO", index})

export const changeTodo = (index, isDone) => ({type: "CHANGE_TODO", index, isDone})