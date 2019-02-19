import React, { Component } from "react";
import { connect } from "react-redux";
import AddQuantity from "./AddQuantity";

class AddItem extends Component {
  handleSubmit = e => {
    e.preventDefault();
    //console.log(e.target[0].value);
    const item = e.target[0].value;
    const qty = e.target[1].value;
    console.log(qty);
    if (item !== "") this.props.addItem(item, qty);
  };

  render() {
    console.log(this.props.items);
    return (
      <div className="row">
        <form onSubmit={this.handleSubmit}>
          <div className="col ">
            <input id="item" type="text" />
            &nbsp;
          </div>
          <div className="col">
            <AddQuantity />
          </div>
          <div className="col">
            <button>+</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: (content, qty) => {
      dispatch({ type: "ADD_ITEM", content: content, qty: qty });
    }
  };
};
const mapStateToProps = state => {
  return {
    items: state.items
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddItem);
