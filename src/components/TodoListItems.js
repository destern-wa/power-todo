import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee} from "@fortawesome/free-solid-svg-icons";

export default class TodoListItems extends Component {
    createTasks = (item) => {
        return (
            <li
               key={item.key}
                onClick={
                    () => this.props.deleteItem(item.key)
                }
            >
                <FontAwesomeIcon icon={faCoffee} />&nbsp;
                {item.text}
            </li>
        )
    };

    render() {
        const todoEntries = this.props.entries;
        const listItems = todoEntries.map(this.createTasks);

        return (
            <div>
                <h2>These are the To Dos</h2>
                <ul className="theList">
                    {listItems}
                </ul>
            </div>
        )
    }
}