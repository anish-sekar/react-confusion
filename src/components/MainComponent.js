import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
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
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/"> Ristorante Con Confusion</NavbarBrand>
          </div>
        </Navbar>

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
      </div>
    );
  }
}

export default Main;
