import React, {Component} from "react";
import ToDo from "../ToDo";

class ToDoDoneList extends Component {
    delete = (id) => {
        this.props.removeTodo(id)
    }
    change = (id) => {
        this.props.changeTodo(id)
    }

    render() {
        console.log(this.props.todoList)
        let doneList = this.props.todoList.filter((todo) => (todo.status))
        console.log(doneList)
        return (
            doneList.map((todo, index) => (
                <ToDo todo={todo} key={index}
                      delete={this.delete} change={this.change}/>))
        )
    }
}

export default ToDoDoneList