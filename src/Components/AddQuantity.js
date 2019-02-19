import React, { Component } from "react";
import { connect } from "react-redux";

class AddQuantity extends Component {
  render() {
    return (
      <div className="container">
        <input id="qty" type="number" min="1" />
      </div>
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
