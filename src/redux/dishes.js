import * as ActionTypes from "./ActionTypes";

export const Dishes = (
  state = {
    isLoading: true,
    errmess: null,
    dishes: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_DISHES:
      console.log("Add dishes called");
      return {
        ...state,
        isLoading: false,
        errmess: null,
        dishes: action.payload,
      };
    case ActionTypes.DISHES_FAILED:
      console.log(" dishes failed called");
      return {
        ...state,
        isLoading: false,
        errmess: action.payload,
        dishes: [],
      };
    case ActionTypes.DISHES_LOADING:
      console.log("dishes loading called");
      return { ...state, isLoading: true, errmess: null, dishes: [] };
    default:
      return state;
  }
};
