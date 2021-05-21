import React, { useEffect, useContext } from 'react'
import { Layout, Button } from 'antd';
import './feed.css'
import TweetBox from '../TweetBox/TweetBox';
import Post from '../Post/Post';
import { useAuth } from '../../../Context/AuthContext'
import { useHistory } from 'react-router-dom'
import { FeedContext } from '../../../Context/FeedContext';
import { useParse } from '../../../Context/Parse';


function Feed() {
    const Parse = useParse().Parse
    const { posts, dispatch } = useContext(FeedContext)
    const { logout } = useAuth()
    const { getCurrentUsername } = useAuth()
    const fetchPosts = () => {
        var Post = Parse.Object.extend("Post");
        var query = new Parse.Query(Post);
        let tmpPosts = [];
        query.include("user");
        query.descending("createdAt");
        query.find()
            .then(function (results) {
                for (let i in results) {
                    var obj = results[i];
                    tmpPosts.push(obj);         
                }
                dispatch({ type: 'init_tweet', payload: tmpPosts });
            })
            .catch((error)=> {
                alert(error)
            })
    }

    useEffect(() => {
        fetchPosts()
    }, [])

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
             <div style={{ position: "absolute", right: "0", top: "0" }}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            onClick={logoutuser ? redirect : ""}
                        >
                            Logout
          		</Button>
                    </div>
                </Header>
            </div>
            <div >
                <Content>
                    <TweetBox />
                    {posts.map(post => {
                        return (
                            <Post
                                key={post.id}
                                post={post}
                            />
                        )
                    })}
                </Content>
            </div>
        </div>
    )
}
export default Feed
