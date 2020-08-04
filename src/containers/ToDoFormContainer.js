import {connect} from "react-redux";
import {addTodo} from "../actions";
import ToDoForm from "../components/ToDoForm"
const mapDispatchToProps = dispatch => ({
    addToDo: text => {dispatch(addTodo(text))}
});
const ToDoFormContainer = connect(null, mapDispatchToProps)(ToDoForm);
export default ToDoFormContainer;