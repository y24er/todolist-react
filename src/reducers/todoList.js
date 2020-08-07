const todoList = (state = [], action) => {

    switch (action.type) {
        case "ADD_TO_DO":
            return [...state, {id:action.todo.id,content: action.todo.content, status: false}];
        case "REMOVE_TODO": {
            return [...state.filter((todo) => (todo.id !== action.id))]
        }
        case "CHANGE_TODO": {
            state.forEach(todo => {
                if (todo.id === action.id) todo.status = !todo.status
            })
            return [...state]
        }
        case "INIT_TODO": {
            return action.todos
            // return {type: "INIT_TODO", todos:todos}.todos
        }
        default:
            return state
    }
};

export default todoList