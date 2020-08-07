import {connect} from "react-redux";
import {addTodo} from "../actions";
import ToDoForm from "../components/ToDoForm";

const mapDispatchToProps = dispatch => ({
    addToDo: todo => {
        dispatch(addTodo(todo))
    }
});
const ToDoFormContainer = connect(null, mapDispatchToProps)(ToDoForm);
export default ToDoFormContainer;