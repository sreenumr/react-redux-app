import React from "react";
import { connect } from "react-redux";
import Modify from "./Modify";

const List = ({ items }) => {
  console.log(items);

  if (!items) return <p>Loading..</p>;

  items.forEach(item => {
    console.log(item.name);
    console.log(item.quantity);
  });

  // const itemList = !items.length ? (
  //   <p>ListEmpty</p>
  // ) : (
  //   items.map(item => {
  //     return (
  //       <div
  //         className="row collection-item"
  //         id="list-container"
  //         key={item.name}
  //       >
  //         <div className="col">{item.name}</div>
  //         <div className="col">
  //           <Modify />
  //         </div>
  //       </div>
  //     );
  //   })
  // );
  return null;
  // return <div className="collection">{itemList}</div>;
};

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

export default connect(mapStateToProps)(List);
