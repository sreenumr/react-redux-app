import React from "react";
import { connect } from "react-redux";
import Modify from "./Modify";

const List = ({ items }) => {
  console.log(items.length);

  const itemList = !items.length ? (
    <p>ListEmpty</p>
  ) : (
    items.map(item => {
      return (
        <li key={item.id} className="collection-item">
          <label>
            <h6> {item.content}</h6>
            <Modify />
          </label>
        </li>
      );
    })
  );

  return <ul className="collection">{itemList}</ul>;
};

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

export default connect(mapStateToProps)(List);
