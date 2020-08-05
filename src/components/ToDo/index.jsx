import React, {Component} from "react";
import './index.css'
class ToDo extends Component {

    isClick = (event) => {
        this.props.change(event.target.id)
        console.log(this.props.done)
    };

    delete = (event) => {
        this.props.delete(event.target.previousElementSibling.id)
    }

    render() {
        return (
            <div>
                <input className={this.props.done ? "done" : "doing"} id={this.props.index} value={this.props.todo}
                       onClick={this.isClick} readOnly/>
                <button onClick={this.delete}>X</button>
            </div>
        )
    }
}

export default ToDo