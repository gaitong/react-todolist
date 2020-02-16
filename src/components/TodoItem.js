import React, { Component } from "react";
export default class TodoItem extends Component {
  render() {
    const { name, handleEdit, handleDelete } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between">
        <h6>{name}</h6>
        <div>
          <span onClick={handleEdit} className="mx-2 text-warning"><i className="far fa-edit"></i></span>
          <span onClick={handleDelete} className="text-danger"><i className="far fa-trash-alt"></i></span>
        </div>
      </li>
    );
  }
}
