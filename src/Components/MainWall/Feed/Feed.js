import React, { useState, useEffect } from 'react'
import { Layout, Menu ,Button} from 'antd';
import './feed.css'
import TweetBox from '../TweetBox/TweetBox';
import Post from '../Post/Post';
import {database } from '../../../firebase/firebase'
import { useAuth } from '../../../Context/AuthContext'
import { useHistory} from 'react-router-dom'
function Feed(props) {
    const [posts, setPosts] = useState([])
    const {logout} = useAuth()
    const { getCurrentUsername } = useAuth()
    useEffect(() => {
        database.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])
    const logoutuser = () =>{
       logout();
    }
    let history = useHistory();
    const redirect = () => {
     history.push('/')
   }
   if(getCurrentUsername()== null) {
      
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
          		</Button> </Header>
            </div>
            <div >
                <Content>
                    <TweetBox />
                    {posts.map((posts, index) => (
                        <Post
                            key={index}//document iD firebase

                            image={posts.image}
                            createdAt={posts.createdAt}
                            username={posts.username}
                            avatar={posts.avatar}
                            displayName={posts.displayName}
                            text={posts.text}


                        />
                    ))}
                 
                </Content>

            </div>

        </div>
    )
}

export default Feed
