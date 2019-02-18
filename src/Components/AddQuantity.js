import React, { Component } from "react";
import { connect } from "react-redux";

class AddQuantity extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target[0].value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Qty
        <input id="qty" type="number" />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: quantity => {
      dispatch({ type: "ADD_QTY", quantity: quantity });
    }
  };
};

export default connect(mapDispatchToProps)(AddQuantity);
