import React, { useReducer } from "react";

export const HANDLE_LIKE = Symbol("HANDLE_LIKE");
export const HANDLE_DISLIKE = Symbol("HANDLE_DISLIKE");
export const initialState = {
  likes: 0,
  active: null
};

const LikeReducer = (state, action) => {
    const { likes, active } = state;
  
    switch (action.type) {
      case HANDLE_LIKE:
        return {
          ...state,
          likes: state.likes + 1,
          active: "like"
        };
      case HANDLE_DISLIKE:
        return {
          ...state,
          likes: active === "like" ? likes - 1 : likes,
          active: "dislike",
         
        };
      default:
        return state;
    }
  };
  export default LikeReducer