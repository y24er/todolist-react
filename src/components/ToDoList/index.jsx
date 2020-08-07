import React, {Component} from "react";
import {List} from "antd";
import ToDo from "../ToDo";
import API from "../../api/api";

class ToDoList extends Component {
    delete = (id) => {
        this.props.removeTodo(id)
    }
    change = (id) => {
        this.props.changeTodo(id)
    }

    componentDidMount = async () => {
        await API.getTodo().then((response) => {
            this.props.initTodo(response.data)
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        console.log("todolist", this.props.todoList)
        return (
            <List size="small" bordered dataSource={this.props.todoList}
                  renderItem={todo => <List.Item><ToDo
                      todo={todo}
                      delete={this.delete}
                      change={this.change}/></List.Item>}/>
        )
    }
}

export default ToDoList