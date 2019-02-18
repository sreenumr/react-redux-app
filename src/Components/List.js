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
        <div className="collection-item" key={item.id}>
          {item.content}
          <Modify />
        </div>
      );
    })
  );

  return <div className="row collection">{itemList}</div>;
};

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

export default connect(mapStateToProps)(List);
