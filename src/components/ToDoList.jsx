import React, {Component} from "react";
import ToDo from "./ToDo"
import axios from "axios";

class ToDoList extends Component {
    delete = (index) => {
        this.props.removeTodo(index)
    }
    change = (index) => {
        this.props.changeTodo(index)
    }

    componentDidMount() {
        const API = 'https://5e9ec500fb467500166c4658.mockapi.io/todos'
        axios.get(API).then((response) => {
            this.props.initTodo(response.data)
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        console.log(this.props.todoList)
        return (
            this.props.todoList.map((todo, index) => (
                <ToDo todo={todo.content} done={todo.status} index={todo.id} key={index} delete={this.delete}
                      change={this.change}/>
            ))
        )
    }
}

export default ToDoList