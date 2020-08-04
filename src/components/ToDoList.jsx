import React, {Component} from "react";
import ToDo from "../components/ToDo"

class ToDoList extends Component {
    delete = (index) => {
        this.props.removeTodo(index)
    }
    // change = (index, done) => {
    //     this.props.changeTodo(index, done)
    // }

    render() {
        console.log(this.props.todoList)
        return (
            this.props.todoList.map((todo, index) => (
                <ToDo todo={todo} index={index} key={index} delete={this.delete} change={this.change()}/>
            ))
        )
    }
}

export default ToDoList