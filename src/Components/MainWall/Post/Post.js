import React from 'react'
import { Row, Col, Avatar } from 'antd'
import './post.css'
import { UserOutlined, CommentOutlined, RetweetOutlined, HeartOutlined, ShareAltOutlined } from '@ant-design/icons'
import axios from 'axios'
import Form from 'antd/lib/form/Form'
function Post({
    displayName, username, text, image, avatar,createdAt
}) {
  //  var myTimestamp = firebase.firestore.Timestamp.fromDate(new Date());

    return (

       <Form >
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
               {/* <p>
                   {createdAt}
               </p> */}
                <div className="post_footer">
                    <CommentOutlined />
                    <RetweetOutlined />
                    <HeartOutlined />
                    <ShareAltOutlined />
                </div>

            </div></div>
       </Form>




    )
}

export default Post
