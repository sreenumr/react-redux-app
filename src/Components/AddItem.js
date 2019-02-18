import React, { Component } from "react";
import { connect } from "react-redux";

class AddItem extends Component {
  handleSubmit = e => {
    e.preventDefault();
    //console.log(e.target[0].value);
    const item = e.target[0].value;
    if (item !== "") this.props.addItem(item);
  };

  render() {
    console.log(this.props.items);
    return (
      <form onSubmit={this.handleSubmit}>
        <input id="item" type="text" />
        <button className="btn-floating waves-effect waves-light red s1">
          +
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: content => {
      dispatch({ type: "ADD_ITEM", content: content });
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
