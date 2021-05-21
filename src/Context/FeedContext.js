import React, {useReducer} from 'react'
import Parse from 'parse/dist/parse.min.js';
import PostReducer from '../Reducers/PostReducer'

Parse.initialize("TWITTER_ID", "");
Parse.serverURL = 'http://localhost:1337/parse'

 export const FeedContext = React.createContext()

export const FeedProvider = props => {
const [posts , dispatch] = useReducer(PostReducer , [])
return (
    <FeedContext.Provider value={{posts,dispatch}}>
    {props.children}
    </FeedContext.Provider>
)
}


export default FeedProvider