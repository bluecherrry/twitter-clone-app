import React, { useState, useEffect } from 'react'
import { Layout, Menu } from 'antd';
import './feed.css'
import TweetBox from '../TweetBox/TweetBox';
import Post from '../Post/Post';
import { database } from '../../../firebase/firebase'

function Feed(props) {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        database.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])

    const { Header, Content } = Layout;
    return (
        <div >
            <div  >
                <Header className="site-layout-sub-header-background" style={{ padding: 0 }}>
                    Home
                </Header>
            </div>
            <div >
                <Content>
                    <TweetBox />
                    {posts.map(posts => (
                        <Post
                            key={posts.text}

                            image={posts.image}

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
