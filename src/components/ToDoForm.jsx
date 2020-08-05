import React, {Component} from "react";
import 'antd/dist/antd.css';
import {Button, Input, Space} from 'antd';

class ToDoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    onsubmit = (event) => {
        event.preventDefault();
        this.props.addToDo(this.state.text)
    };

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