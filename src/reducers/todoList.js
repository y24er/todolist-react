const todoList = (state = [], action) => {

    switch (action.type) {
        case "ADD_TO_DO":
            return [...state, {content: action.content, status: false}];
        case "REMOVE_TODO": {
            // console.log(state)
            // console.log(action)
            // let todo = state.filter((todo) => (todo.id===action.id))
            // return [...state.slice(0, action.id), ...state.slice(action.id + 1)]
        }
        case "CHANGE_TODO": {
            let todo = state.filter((todo) => (todo.id===action.id))
            console.log(todo)
            todo[0].status = !todo[0].status
            return [...state]
        }
        case "INIT_TODO": {
            return action.todos
        }
        default:
            return state
    }
};

export default todoList