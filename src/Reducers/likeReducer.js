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
    case 'init_like':
      let { likes, userId } = action.payload;
    
      let active = false;
      likes.forEach(like => {
        active = like.get('user').id === userId

      })

      return {
        likes,
        active
      }


    case HANDLE_LIKE:

      let newlike = action.payload;
      return {
        likes: [...state.likes, newlike],
        active: true
      };

    case HANDLE_DISLIKE:
      let { Likes, UserId } = action.payload
      console.log(Likes,"like1");
      const finalLike = Likes.filter(like => {
        return  like.get('user').id !== UserId
      })
      console.log(finalLike, "final like;;;");
    
      
      return {
        likes:finalLike
        
        ,
        active: false,
        
      }

    default:
      return state;
  }
  
};
export default LikeReducer