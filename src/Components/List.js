import React from "react";
import { connect } from "react-redux";
import Modify from "./Modify";
import AddQuantity from "./AddQuantity";

const List = ({ items }) => {
  const itemList = !items.length ? (
    <p>ListEmpty</p>
  ) : (
    items.map(item => {
      return (
        <div className="row collection-item" id="list-container" key={item.id}>
          <div className="col">{item.content}</div>
          <div className="col">
            <Modify />
          </div>
        </div>
      );
    })
  );

  return <div className="collection">{itemList}</div>;
};

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

export default connect(mapStateToProps)(List);
