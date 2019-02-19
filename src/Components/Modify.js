import React from "react";
import { connect } from "react-redux";

const Modify = ({ qty }) => {
  return (
    <div id="qty">
      <input type="number" value={qty} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    qty: state.quantity
  };
};

export default connect(mapStateToProps)(Modify);
