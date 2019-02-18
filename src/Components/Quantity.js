import React from "react";
import { connect } from "react-redux";

const Quantity = ({ quantity }) => {
  return <p className="col s1">{quantity}</p>;
};

const mapStateToProps = state => {
  return {
    quantity: state.items[0].quantity
  };
};

export default connect(mapStateToProps)(Quantity);
