import React, {Component} from "react";
import 'antd/dist/antd.css';
import {Button, Input, Space} from 'antd';
import axios from "axios";

class ToDoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    onsubmit = () => {
        let todo = {
            content: this.state.text,
            status: false
        }
        console.log("todo", todo)
        this.addTodo(todo)
        // this.props.addToDo(this.state.text)
    };

    addTodo = (todo) => {
        axios.post("https://5e9ec500fb467500166c4658.mockapi.io/todos", todo)
            .then(response => this.props.addToDo(response.data))
    }

    inputText = (event) => {
        let text = event.target.value;
        this.setState({
            text: text
        })
    }

    render() {
        return (
            <Space size={'middle'}>
                <Input type="text" onChange={this.inputText} placeholder="todo"/>
                <Button type="submit" onClick={this.onsubmit}>add</Button>
            </Space>
        )
    }
}

export default ToDoForm