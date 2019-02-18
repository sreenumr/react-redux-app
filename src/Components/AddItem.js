import React, { Component } from "react";

export default class AddItem extends Component {
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} />
        <label for="itemInput">
          <input id="item" type="text" />
          <button className="btn-floating waves-effect waves-light red">
            +
          </button>
        </label>
      </div>
    );
  }
}
