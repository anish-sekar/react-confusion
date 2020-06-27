import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import About from "./AboutComponent";
import Home from "./HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import Contact from "./ContactComponent";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
    };
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={
            this.state.promotions.filter((promotion) => promotion.featured)[0]
          }
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    const DishWithId = ({ match }) => {
      console.log(this.state.dishes.filter((dish) => dish.id));
      console.log(parseInt(match.params.dishId, 10));

      return (
        <DishDetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={this.state.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
        />
      );
    };

    return (
      <div className="App">
        <Header></Header>
        <Switch>
          <Route path="/home" component={HomePage}></Route>
          <Route
            path="/aboutus"
            component={() => <About leaders={this.state.leaders} />}
          ></Route>
          <Route exact path="/contactus" component={Contact}></Route>
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          ></Route>
          <Route path="/menu/:dishId" component={DishWithId}></Route>
          <Redirect to="/home" />
        </Switch>
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;
