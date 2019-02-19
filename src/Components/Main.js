import React from "react";
import { connect } from "react-redux";
import List from "./List";
import AddItem from "./AddItem";

const Main = ({ items }) => {
  return (
    <div className="container center-align">
      <AddItem />
      <List />
    </div>
  );
};
const mapStateToProps = state => {
  return {
    items: state.items
  };
};

export default connect(mapStateToProps)(Main);
