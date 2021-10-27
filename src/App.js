import React, {Component} from 'react';
import './App.css';
import TodoListHeader from './components/TodoListHeader'
import TodoForm from "./components/TodoForm";
import TodoListItems from "./components/TodoListItems";

export default class App extends Component {
  inputElement = React.createRef();
  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: {
        key: '',
        text: ''
      }
    }
  } // End constructor

  addItem = (event) => {
    event.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      // use spread operator to insert new item (at start) of list
      const newListItems = [newItem, ...this.state.items];
      this.setState({
        items: newListItems,
        currentItem: { text:'', key:'' }
      })
    }
    console.log(this.state.items);
  };

  handleInput = (event) => {
    const itemText = event.target.value;
    const currentItem = {
      text: itemText,
      key: Date.now()
    };
    this.setState( {currentItem} );
    console.log(this.state)
  };

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key;
    });
    this.setState({
      items: filteredItems,
    })
  };

  // [1, 2, 3].filter(function(n) {
  //   return n!=2;
  // });
  render() {
    return (
        <div className="App">
          <div className="#container">
            <div className="todoListMain">
              <TodoListHeader/>

              <TodoForm
                  handleInput={this.handleInput}
                  inputElement={this.inputElement}
                  addItem={this.addItem}
                  currentItem={this.state.currentItem}
              />

              <TodoListItems
                  entries={this.state.items}
                  deleteItem={this.deleteItem}
              />

            </div>
          </div>
        </div>
    );
  } // End render
}
