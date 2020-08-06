import React, {Component} from "react";
import './index.css'
import DeleteOutlined from "@ant-design/icons/es/icons/DeleteOutlined";
import axios from "axios";

class ToDo extends Component {
    updateStatus = (id, status) => {
        const API = 'https://5e9ec500fb467500166c4658.mockapi.io/todos'
        axios.put(API + `/${id}`, {status: !status}).then((response) => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
    }


    isClick = (event) => {
        this.updateStatus(event.target.id, this.props.status);
        this.props.change(event.target.id)
        console.log(this.props.status)
    };

    delete = () => {
        let id = this.props.todo.id;
        const API = 'https://5e9ec500fb467500166c4658.mockapi.io/todos'
        axios.delete(API + `/${id}`).then(response => {
            this.props.delete(id)
        })
    }

    render() {
        return (
            console.log(this.props.todo),
            <div>
                <input className={this.props.todo.status ? "done" : "doing"} id={this.props.todo.id}
                       value={this.props.todo.content}
                       onClick={this.isClick} readOnly style={{width: '300px'}}/>
                <DeleteOutlined onClick={this.delete}/>
            </div>
        )
    }
}

export default ToDo