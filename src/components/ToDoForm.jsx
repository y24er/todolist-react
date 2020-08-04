import React, {Component} from "react";

class ToDoForm extends Component{
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
        this.setState( {
            text: text
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onsubmit}>
                    <input type="text" onChange={this.inputText}/>
                    <input type="submit" value = "add" />
                </form>
            </div>
        )
    }
}

export default ToDoForm