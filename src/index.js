import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import firebase from "firebase/app";
import "firebase/firestore";
import rootReducer from "./Reducers/rootReducer";

const store = createStore(rootReducer);

var config = {
  apiKey: "AIzaSyAenT8ivIMWDu_4b_qtPVeRCxmmSjg23hU",
  authDomain: "react-52570.firebaseapp.com",
  databaseURL: "https://react-52570.firebaseio.com",
  projectId: "react-52570",
  storageBucket: "react-52570.appspot.com",
  messagingSenderId: "628413279868"
};

firebase.initializeApp(config);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
