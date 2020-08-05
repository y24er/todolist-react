import React, {Component} from "react";
import ToDo from "../ToDo";

class ToDoDoneList extends Component {
    delete = (index) => {
        this.props.removeTodo(index)
    }
    change = (index) => {
        this.props.changeTodo(index)
    }

    render() {
        console.log(this.props.todoList)
        let doneList = this.props.todoList.filter((todo) => (todo.isDone))
        console.log(doneList)
        return (
            doneList.map((todo, index) => (
                <ToDo todo={todo.content} done={todo.isDone} id={this.props.todoList.length - index - 1} key={index}
                      delete={this.delete} change={this.change}/>,
                    console.log(this.props.todoList.length - index - 1)
            ))
        )
    }
}

export default ToDoDoneList