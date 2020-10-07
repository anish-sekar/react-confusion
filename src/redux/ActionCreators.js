import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";
export const addComment = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment,
  },
});

export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading());

  let res = fetch(baseUrl + "dishes")
    .then((response) => response.json())
    .then((dishes) => dispatch(addDishes(dishes)));
  console.log("meow");
  console.log(res);
  return res;
};

export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING,
});

export const dishesFailed = (errmess) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmess,
});

export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes,
});

//Comments
export const fetchComments = () => (dispatch) => {
  return fetch(baseUrl + "comments")
    .then((response) => response.json())
    .then((comments) => dispatch(addComments(comments)));
};
export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments,
});

// Promotions
export const fetchPromos = () => (dispatch) => {
  dispatch(promosLoading(true));

  return fetch(baseUrl + "promotions")
    .then((response) => response.json())
    .then((promos) => dispatch(addPromos(promos)));
};

export const promosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING,
});

export const addPromos = (dishes) => ({
  type: ActionTypes.ADD_PROMOS,
  payload: dishes,
});

// Leaders
export const fetchLeaders = () => (dispatch) => {
  dispatch(leadersLoading());

  return fetch(baseUrl + "leaders")
    .then((response) => response.json())
    .then((leaders) => dispatch(addLeaders(leaders)));
};

export const leadersLoading = () => ({
  type: ActionTypes.LEADERS_LOADING,
});

export const addLeaders = (leaders) => ({
  type: ActionTypes.ADD_LEADERS,
  payload: leaders,
});
