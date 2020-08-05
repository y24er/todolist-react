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
    },
    removeTodo: index => {
        dispatch(removeTodo(index))
    },
    changeTodo: (index) => {
        dispatch(changeTodo(index))
    }
});
const ToDoListContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoList)
export default ToDoListContainer