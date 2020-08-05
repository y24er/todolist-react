const todoList = (state = [], action) => {
    switch (action.type) {
        case "ADD_TO_DO":
            return [...state, {text: action.text, isDone: false}];
        case "REMOVE_TODO": {
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
        }
        case "CHANGE_TODO": {
            state[action.index].isDone = !state[action.index].isDone;
            return [...state]
        }
        case "INIT_TODO":{
            return action.todos
        }
        default:
            return state
    }
};

export default todoList