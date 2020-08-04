import ToDoList from "../components/ToDoList";
import {connect} from "react-redux";
import {changeTodo, removeTodo} from "../actions";

// const defaultState = {todoList: []}
const mapStateToProps = (state) => (
    {
        todoList: state.todoList
    })

const mapDispatchToProps = dispatch => ({
    removeTodo: index => {
        dispatch(removeTodo(index))
    },
    // changeTodo: (index, done) => {
    //     dispatch(changeTodo(index, done))
    // }
});
const ToDoListContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoList)
export default ToDoListContainer