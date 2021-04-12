import React from 'react'
import { Row, Col, Avatar } from 'antd'
import './post.css'
import { UserOutlined, CommentOutlined, RetweetOutlined, HeartOutlined, ShareAltOutlined } from '@ant-design/icons'
function Post({
    displayName, username, text, image, avatar
}) {
    return (

        <div className="post">

            <div className="post_avatar">
                <Avatar src={avatar} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />

            </div>


            <div className="post__body">
                <div className="post_header">

                    <div className="post_headerText">
                        {displayName}
                        <span className="post_headerSpecial">
                            @ {username}
                         
                        </span>

                    </div>
                    <div className="post_headerDescription">
                        <p>{text} </p>
                    </div>
                </div>
                <img src={image} />
                <div className="post_footer">
                    <CommentOutlined />
                    <RetweetOutlined />
                    <HeartOutlined />
                    <ShareAltOutlined />
                </div>

            </div></div>




    )
}

export default Post
