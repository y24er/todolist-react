import React, {Component} from "react";
import './index.css'
import DeleteOutlined from "@ant-design/icons/es/icons/DeleteOutlined";
import API from "../../api/api";

class ToDo extends Component {
    isClick = () => {
        API.putTodo(this.props.todo.id, this.props.todo.status).then((response) => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
        this.props.change(this.props.todo.id)
    };

    delete = () => {
        let id = this.props.todo.id;
        API.deleteTodo(id).then(() => {
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