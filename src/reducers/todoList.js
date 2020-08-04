const todoList = (state = [], action) => {
    switch (action.type) {
        case "ADD_TO_DO":
            return [...state, action.text];
        case "REMOVE_TODO": {
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
        }
        case "CHANGE_TODO":{
            // return [...state, {index:action.index,done:action.done}]
        }
        default:
            return state
    }
};

export default todoList