import React, {Component} from "react";
import ReactDom from 'react-dom'
class ToDo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            done:true,
        }
    }

    isClick = () => {
        let todo = document.getElementById("todo");
        this.setState({
            done: !this.state.done
        });
        if (this.state.done){
            ReactDom.findDOMNode(todo).style.textDecoration = "line-through"
            // console.log(this.state.todo.current)
            // this.state.todo.current.style.textDecoration = "line-through"
        } else {
            ReactDom.findDOMNode(todo).style.textDecoration = "none"
            // this.state.todo.current.style.textDecoration = "none"
        }
        console.log(this.state.done)
    };

    render() {
        return (
            <div>
                <input id="todo" value={this.props.todo} onClick={this.isClick} readOnly/>
            </div>
        )
    }
}

export default ToDo