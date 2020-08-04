import {connect} from "react-redux";
import ToDoDoneList from "../components/ToDoDoneList";

const defaultState = {todoList: []}
const mapStateToProps = (state = defaultState) => (
    {
        todoList: state.todoList
    })
const ToDoListContainer = connect(mapStateToProps)(ToDoDoneList)
export default ToDoListContainer