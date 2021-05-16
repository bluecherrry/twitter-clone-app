import React from 'react'
import { Row, Col, Avatar } from 'antd'
import './post.css'
import { UserOutlined, CommentOutlined, RetweetOutlined,  ShareAltOutlined } from '@ant-design/icons'
import Form from 'antd/lib/form/Form'
import LikeButtton from './LikeButtton'
import Parse from 'parse/dist/parse.min.js';
Parse.initialize("TWITTER_ID", "");
Parse.serverURL = 'http://localhost:1337/parse'
function Post({
    displayName, username, text, image, avatar, id, post
}) {

    return (

        <Form >
            <div className="post">
                <div className="post_avatar">
                    <Avatar src={avatar} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                </div>
                <div className="post__body">
                    <div className="post_header">

                        <div className="post_headerText">

                            <span className="post_headerSpecial">
                                @ {post.get('user').get('username')}

                            </span>

                        </div>
                        <div className="post_headerDescription">
                            <p>{post.get('postMsg')} </p>
                        </div>
                    </div>
                    <img src={image} />

                    <div className="post_footer">
                        <CommentOutlined />
                        <RetweetOutlined />
                        <LikeButtton post={post} />
                        <ShareAltOutlined />
                    </div>

                </div></div>
        </Form>




    )
}

export default Post
