import React, {Component} from "react";
import axios from "axios";
import {List} from "antd";
import ToDo from "./ToDo";

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
            <List size="small" bordered dataSource={this.props.todoList}
                  renderItem={todo => <List.Item><ToDo content={todo.content} status={todo.status} id={todo.id}
                                                       delete={this.delete}
                                                       change={this.change}/></List.Item>}/>
        )
    }
}

export default ToDoList