import React, { Component } from "react";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import About from "./AboutComponent";
import Home from "./HomeComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Contact from "./ContactComponent";
import { actions } from "react-redux-form";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  postComment,
  fetchDishes,
  fetchComments,
  fetchPromos,
  fetchLeaders,
} from "../redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId, rating, author, comment) =>
    dispatch(postComment(dishId, rating, author, comment)),
  fetchLeaders: () => dispatch(fetchLeaders()),
  fetchDishes: () => {
    dispatch(fetchDishes());
  },
  fetchComments: () => {
    dispatch(fetchComments());
  },

  fetchPromos: () => {
    dispatch(fetchPromos());
  },

  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  },
});

class Main extends Component {
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchLeaders();
    this.props.fetchPromos();
    this.props.fetchComments();
  }
  render() {
    const HomePage = () => {
      console.log("Home page");
      console.log(this.props);

      return (
        <Home
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errmess}
          promotion={
            this.props.promotions.promotions.filter(
              (promotion) => promotion.featured
            )[0]
          }
          promotionLoading={this.props.promotions.isLoading}
          promotionErrMess={this.props.promotions.errmess}
          leaderLoading={this.props.leaders.isLoading}
          leadersErrMess={this.props.leaders.errmess}
          leader={
            this.props.leaders.leaders.filter((leader) => leader.featured)[0]
          }
        />
      );
    };

    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.props.dishes.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errmess}
          comments={this.props.comments.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
          postComment={this.props.postComment}
        />
      );
    };

    return (
      <div className="App">
        <Header />
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            classNames="page"
            timeout="300"
          >
            <Switch>
              <Route path="/home" component={HomePage}></Route>
              <Route
                path="/aboutus"
                component={() => (
                  <About
                    errMess={this.props.leaders.errmess}
                    isLoading={this.props.leaders.isLoading}
                    leaders={this.props.leaders.leaders}
                  />
                )}
              ></Route>
              <Route
                exact
                path="/contactus"
                component={() => (
                  <Contact resetFeedbackForm={this.props.resetFeedbackForm} />
                )}
              ></Route>
              <Route
                exact
                path="/menu"
                component={() => <Menu dishes={this.props.dishes} />}
              ></Route>
              <Route path="/menu/:dishId" component={DishWithId}></Route>
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer></Footer>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
