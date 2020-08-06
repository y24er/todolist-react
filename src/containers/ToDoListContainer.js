import ToDoList from "../components/ToDoList";
import {connect} from "react-redux";
import {changeTodo, initTodo, removeTodo} from "../actions";

const mapStateToProps = (state) => (
    {
        todoList: state.todoList
    })

const mapDispatchToProps = dispatch => ({
    initTodo: todos => {
        dispatch(initTodo(todos))
        // dispatch({type: "INIT_TODO", todos:todos})
    },
    removeTodo: id => {
        dispatch(removeTodo(id))
    },
    changeTodo: (id) => {
        dispatch(changeTodo(id))
    }
});
const ToDoListContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoList)
export default ToDoListContainer