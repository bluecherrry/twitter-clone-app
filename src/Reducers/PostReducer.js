import Parse from 'parse/dist/parse.min.js';
Parse.initialize("TWITTER_ID", "");
Parse.serverURL = 'http://localhost:1337/parse'


function PostReducer(state , action) {
  
    switch (action.type) { 
        case 'add_tweet':  
            return addTweet(state , action);
     
        default:
            return state;
    }
}

export default PostReducer;

let addTweet= (state , action) => {
    let  post  = action.payload;
    
    console.log(state,"state");
    return [
       ...state,
        {
            post:post.post,
            author :post.author
        } 
    ]
       

    
}