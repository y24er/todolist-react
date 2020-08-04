import React, {Component} from "react";

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false
        }
    }

    isClick = (event) => {
        this.setState({
            done: !this.state.done
        });
        // this.props.change(event.target.id, !this.state.done)
        if (this.state.done) {
            event.target.style.textDecoration = "none"
        } else {
            event.target.style.textDecoration = "line-through"
        }
    };

    delete = (event) => {
        this.props.delete(event.target.previousElementSibling.id)
    }

    render() {
        return (
            <div>
                <input id={this.props.index} value={this.props.todo} onClick={this.isClick} readOnly/>
                <button onClick={this.delete}>X</button>
            </div>
        )
    }
}

export default ToDo