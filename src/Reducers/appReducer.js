import Parse from 'parse/dist/parse.min.js';


Parse.initialize("TWITTER_ID", "");
Parse.serverURL = 'http://localhost:1337/parse'


function AppReducer(state , action) {
    console.log(state , action,"ddd");
    switch (action.type) {
        case 'init_tweet': 
            let { tweet } = action.payload;
            return  {
                ...state,
                tweet
            }
        case 'add_tweet':
            return addTweet(state , action);
     
        default:
            return state;
    }
}

export default AppReducer;

let addTweet= (state , action) => {
    let { post } = action.payload;
    return {
        ...state,
        posts : [
            ...state.posts,
            post
        ]
    }
}