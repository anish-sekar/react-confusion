import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Main from "./components/MainComponent";
import { DISHES } from "./shared/dishes";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";

const store = ConfigureStore();
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
      <Provider store={store}>
        <BrowserRouter>
          <Main></Main>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
