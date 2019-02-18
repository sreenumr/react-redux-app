import React from "react";
import { connect } from "react-redux";

const Quantity = ({ quantity }) => {
  return <h3>{quantity}</h3>;
};

const mapStateToProps = state => {
  return {
    quantity: state.items[0].quantity
  };
};

export default connect(mapStateToProps)(Quantity);
