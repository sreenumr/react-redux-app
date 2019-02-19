import React from "react";
import { connect } from "react-redux";
import Modify from "./Modify";

const List = ({ items }) => {
  console.log(items);

  if (!items) return <p>Loading..</p>;

  const itemList = !items.length ? (
    <p>ListEmpty</p>
  ) : (
    items.map(item => {
      return (
        <div
          className="row collection-item"
          id="list-container"
          key={item.name}
        >
          <div className="col">{item.name}</div>
          <div className="col">
            <input type="number" defaultValue={item.quantity} />
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
