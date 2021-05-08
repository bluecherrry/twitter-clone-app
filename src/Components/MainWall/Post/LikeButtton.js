import React, {useReducer} from 'react'
import  LikeReducer from '../../../Reducers/likeReducer'
import {initialState,HANDLE_LIKE,HANDLE_DISLIKE} from '../../../Reducers/likeReducer'
import { SmileTwoTone, HeartTwoTone, HeartOutlined} from '@ant-design/icons';
function LikeButtton() {
const [state, dispatch] = useReducer( LikeReducer, initialState);
  const { likes, active } = state;
    
   
    return (
        <div style={{ display: "flex" }}>
        <button
        
          onClick={() =>
            active !== "like" ? dispatch({ type: HANDLE_LIKE }) :  dispatch({ type: HANDLE_DISLIKE })
          }
        >
        {active == "like" ? <HeartTwoTone twoToneColor="#eb2f96" /> :<HeartOutlined /> }
          &nbsp;|&nbsp;
          {likes}
        </button>
     
      </div>
    )
}

export default LikeButtton









// <div  onClick={liked}>
// {
//    like? <HeartTwoTone twoToneColor="#eb2f96" /> :  <HeartOutlined />
// }
// <div className="counter" onClick={likeHandler}>
// <span>click</span>
// </div>
// </div>