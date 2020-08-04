import React, {Component} from "react";
import ToDo from "../components/ToDo"

class ToDoList extends Component {

    render() {
        return (
            this.props.todoList.map((todo, index) => (
                <ToDo todo={todo} key={index}/>
            ))
        )
    }
}

export default ToDoList