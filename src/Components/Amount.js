import React from "react";
import { connect } from "react-redux";

const Amount = amount => {
  return <p>{amount}</p>;
};

const mapStateToProps = state => {
  return {
    // amount: state.items.amount
  };
};

export default connect(mapStateToProps)(Amount);
