import React, {Component} from "react";
import ToDo from "../components/ToDo"

class ToDoDoneList extends Component {
    delete = (value) => {
        this.props.removeTodo(value)
    }

    render() {
        // let doneList = this.props.todoList.filter((todo)=>todo)
        return (
            this.props.todoList.map((todo, index) => (
                <ToDo todo={todo} index={index} key={index} delete={this.delete}/>
            ))
        )
    }
}

export default ToDoDoneList