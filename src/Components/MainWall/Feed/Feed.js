import React, { useState, useEffect } from 'react'
import { Layout, Button, Alert } from 'antd';
import './feed.css'
import TweetBox from '../TweetBox/TweetBox';
import Post from '../Post/Post';
import Parse from 'parse/dist/parse.min.js';
import { useAuth } from '../../../Context/AuthContext'
import { useHistory } from 'react-router-dom'

Parse.initialize("TWITTER_ID", "");
Parse.serverURL = 'http://localhost:1337/parse'


function Feed(props) {
    const [posts, setPosts] = useState([])
    const { logout } = useAuth()
    const { getCurrentUsername } = useAuth()
    const fetchPosts = () => {
        var Post = Parse.Object.extend("Post");
        var query = new Parse.Query(Post);
        query.include("user");
        query.find()
        .then(function (results) {
        
                for (let i in results) {
                /* Set obj to current post*/
                var obj = results[i];
                var postMsg = obj.get("postMsg");
                var authorName = obj.get("user").get("username");
                posts.push({
                    post:{
                       postMsg
                    },
                    author: authorName
                });
            }
            setPosts([...posts])
        })
    }
    console.log(posts);
    useEffect(() => {
        fetchPosts()
      //  return () => console.log('unmounting...');

    }  , [])

    const logoutuser = () => {
        logout();
    }
    let history = useHistory();
    const redirect = () => {
        history.push('/')
    }
    if (getCurrentUsername() == null) {
        // not logged in
        history.replace('/login/login')
        return null
    }

    const { Header, Content } = Layout;
    return (
        <div >
            <div  >
                <Header className="site-layout-sub-header-background" style={{ padding: 0 }}>
                    Home

                <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        onClick={logoutuser ? redirect : ""}
                    >
                        Logout
          		</Button>

                </Header>
            </div>
            <div >

                <Content>
                    <TweetBox  />
                    {posts.map((posts, index) => (

                        <Post
                            key={index}//document iD firebase
                            username={posts.author}
                            text={posts.post.postMsg}

                        />
                    ))}

                </Content>

            </div>

        </div>
    )
}

export default Feed
