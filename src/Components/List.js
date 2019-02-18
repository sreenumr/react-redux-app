import React from "react";
import { connect } from "react-redux";

const List = ({ items }) => {
  console.log(items.length);

  const itemList = !items.length ? (
    <p>ListEmpty</p>
  ) : (
    items.map(item => {
      return (
        <div className="card orange" key={item.id} id="item">
          {item.content}
        </div>
      );
    })
  );

  return <div className="container">{itemList}</div>;
};

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

export default connect(mapStateToProps)(List);
