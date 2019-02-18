import React from "react";
import { connect } from "react-redux";

const IncButton = () => {
  return (
    <button className="col s1" id="inc">
      +
    </button>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    incItem: id => {
      dispatch({ type: "INC_ITEM", id: id });
    }
  };
};
export default connect(mapDispatchToProps)(IncButton);
