import React, {Component} from "react";

export default class TodoForm extends Component {

    componentDidUpdate() {
        this.props.inputElement.current.focus();
    }

    render() {
    return (
        <div className="todoForm">
            <h2>Entry Form</h2>
            <form onSubmit={ this.props.addItem }>
                <input
                    type="text" placeholder="task name"
                    onChange={this.props.handleInput}
                    value={this.props.currentItem.text}
                    ref={this.props.inputElement}
                />
                <button>Add To Do</button>
            </form>
        </div>
    );
    }
}