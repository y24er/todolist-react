import React, {Component} from "react";
import ToDo from "../components/ToDo"

class ToDoList extends Component {
    delete = (value) => {
        this.props.removeTodo(value)
    }

    render() {
        return (
            this.props.todoList.map((todo, index) => (
                <ToDo todo={todo} index={index} key={index} delete={this.delete}/>
            ))
        )
    }
}

export default ToDoList