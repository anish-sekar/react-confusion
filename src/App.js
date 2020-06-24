import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Main from "./components/MainComponent";
import { DISHES } from "./shared/dishes";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
    };
  }

  render() {
    return (
      // <div className="App">
      // </div>
      <BrowserRouter>
        <Main></Main>
      </BrowserRouter>
    );
  }
}

export default App;
