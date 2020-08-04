import ToDoList from "../components/ToDoList";
import {connect} from "react-redux";

const mapStateToProps = (state) => (
    {
    todoList: state.todoList
})
const ToDoListContainer = connect(mapStateToProps)(ToDoList)
export default ToDoListContainer