import React, { Component } from "react";
import './App.css'
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import uuid from "uuid";

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      name: this.state.item
    };

    const updateItem = [...this.state.items, newItem];
    this.setState({
      items: updateItem,
      item: "",
      id: uuid(),
      editItem: false
    });
  };
  handleEdit = id => {
    var filterItems = this.state.items.filter(item => item.id !== id);
    var selectItem = this.state.items.find(item => item.id === id);

    this.setState({
      items: filterItems,
      item: selectItem.name,
      id: id,
      editItem: true
    });
  };
  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };
  handleDelete = id => {
    const filterItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filterItems
    });
  };
  clearList = () => {
    this.setState({
      items: []
    });
  };
  render() {
    return (
      <div className="container bg">
        <div className="jumbotron text-center">
          <h1 className="text-white">Todo List Application</h1>
          <p className="text-white">Create your activity!</p>
        </div>
        <div className="row">
          <TodoInput
            item={this.state.item}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            editItem={this.state.editItem}
          />
        </div>

        <TodoList
          items={this.state.items}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          clearList={this.clearList}
        />

        <footer id="sticky-footer" className="py-2 bg-dark text-white-50">
          <div className="container text-center">
            <small>Copyright © Todolist by GT</small>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
