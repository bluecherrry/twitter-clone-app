import React, { useContext, useReducer} from 'react'
import Parse from 'parse/dist/parse.min.js';
import PostReducer from '../Reducers/PostReducer'
import Post from '../Components/MainWall/Post/Post';

Parse.initialize("TWITTER_ID", "");
Parse.serverURL = 'http://localhost:1337/parse'

 export const FeedContext = React.createContext()

export const FeedProvider = props => {
const [posts , dispatch] = useReducer(PostReducer , [])
console.log(posts,"feed context posts")
return (
    <FeedContext.Provider value={{posts,dispatch}}>
    {props.children}
    </FeedContext.Provider>
)
}
//send tweet

export default FeedProvider