import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import NavRoutes from "./Components/NavRoutes";
import { BrowserRouter } from "react-router-dom";
import Main from "./Components/Main";
import { connect } from "react-redux";

const firebase = require("firebase");
require("firebase/firestore");

class App extends Component {
  componentDidMount() {
    const db = firebase.firestore();
    const dbItemRef = db.collection("Inventory");
    const itemList = [];

    dbItemRef.get().then(snap => {
      snap.forEach(doc => {
        itemList.push(doc.data());
      });
    });

    this.props.stateInit(itemList);
    console.log(itemList);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <Navbar />
          <NavRoutes /> */}
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    stateInit: itemList => {
      dispatch({ type: "STATE_INIT", itemList });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
