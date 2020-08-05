import React, {Component} from "react";
import './index.css'
import DeleteOutlined from "@ant-design/icons/es/icons/DeleteOutlined";
import axios from "axios";

class ToDo extends Component {

    updateStatus(id, status) {
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

    delete = (event) => {
        this.props.delete(event.target.parentNode.previousElementSibling.id)
    }

    render() {
        return (
            <div>
                <input className={this.props.status ? "done" : "doing"} id={this.props.id} value={this.props.content}
                       onClick={this.isClick} readOnly style={{width: '300px'}}/>
                <DeleteOutlined onClick={this.delete}/>
            </div>
        )
    }
}

export default ToDo