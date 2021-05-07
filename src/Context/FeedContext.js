import React, { useContext, useEffect, useState } from 'react'
import Parse from 'parse/dist/parse.min.js';
Parse.initialize("TWITTER_ID", "");
Parse.serverURL = 'http://localhost:1337/parse'


const FeedContext = React.createContext({
    posts:[],
    add:() => {}
})
//send tweet

export default FeedContext