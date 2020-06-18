import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { DISHES } from "../shared/dishes";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  onDishSelected(dishID) {
    this.setState({ selectedDish: dishID });
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Menu
          dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelected(dishId)}
        ></Menu>
        <div className="container">
          <div className="row">
            {/* {this.renderDish(this.state.selectedDish)} */}
            <DishDetail
              selectedDish={
                this.state.dishes.filter(
                  (dish) => dish.id === this.state.selectedDish
                )[0]
              }
            ></DishDetail>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;
