import todoList from "../reducers/todoList";
import {connect} from "react-redux";
import mapDispatchToProps from "react-redux/es/connect/mapDispatchToProps";
const todoList = connect(null, mapDispatchToProps)