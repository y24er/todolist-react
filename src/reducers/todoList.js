const todoList = (state=[], action) => {
    switch (action.type) {
        case "ADD_TO_DO":
            console.log(...state)
            console.log(action.text)
            return [...state, action.text];
        default:
            return state
    }
};

export default todoList