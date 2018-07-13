import { ADD_ARTICLE } from "../constants/action-types";
const initialState = {
  articles: []
};
const goodActions = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      // return { ...state, articles: [...state.articles, action.payload] };
      return state;
    default:
      return state;
  }
};
export default goodActions;
