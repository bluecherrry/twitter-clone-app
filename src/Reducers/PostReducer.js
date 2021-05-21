import Parse from 'parse/dist/parse.min.js';
Parse.initialize("TWITTER_ID", "");
Parse.serverURL = 'http://localhost:1337/parse'


function PostReducer(state, action) {

    switch (action.type) {
        case 'init_tweet' :
            let tweet = action.payload;
            return tweet;
        case 'add_tweet':
            return addTweet(state, action);

        default:
            return state;
    }
}

export default PostReducer;
let addTweet = (state, action) => {
    let post = action.payload;
    let postsArray = [...state]
     postsArray.unshift(post)
    return postsArray
}