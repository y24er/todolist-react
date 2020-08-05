import {connect} from "react-redux";
import ToDoDoneList from "../components/ToDoDoneList";
import {changeTodo, removeTodo} from "../actions";

const defaultState = {todoList: []}
const mapStateToProps = (state = defaultState) => (
    {
        todoList: state.todoList
    })
const mapDispatchToProps = dispatch => ({
    removeTodo: index => {
        dispatch(removeTodo(index))
    },
    changeTodo: (index) => {
        dispatch(changeTodo(index))
    }
});
const ToDoDoneListContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoDoneList)
export default ToDoDoneListContainer