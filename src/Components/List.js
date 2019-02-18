import React from "react";
import { connect } from "react-redux";

const List = ({ items }) => {
  console.log(items);
  return (
    <div>
      <p>List</p>
      <label>
        <p>{}</p>
      </label>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

export default connect(mapStateToProps)(List);
