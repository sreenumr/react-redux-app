import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import NavRoutes from "./Components/NavRoutes";
import { BrowserRouter } from "react-router-dom";
import Main from "./Components/Main";

class App extends Component {
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

export default App;
