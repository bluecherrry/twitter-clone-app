import Parse from 'parse/dist/parse.min.js';
Parse.initialize("TWITTER_ID", "");
Parse.serverURL = 'http://localhost:1337/parse'

export default Parse;

