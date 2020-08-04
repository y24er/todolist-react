import ToDoList from "../components/ToDoList";
import {connect} from "react-redux";
import {removeTodo} from "../actions";

const mapStateToProps = (state) => (
    {
        todoList: state.todoList
    })

const mapDispatchToProps = dispatch => ({
    removeTodo: text => {
        dispatch(removeTodo(text))
    }
});
const ToDoListContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoList)
export default ToDoListContainer