import React, { useState, useEffect, useContext } from 'react'
import { Form, Avatar, Input, Button, Row, Col } from 'antd'
import "./TweetBox.css";
import UploadImage from '../Uploads/Upload'
import { UserOutlined } from '@ant-design/icons'
import Parse from 'parse/dist/parse.min.js';
import {FeedContext} from '../../../Context/FeedContext';

Parse.initialize("TWITTER_ID", "");
Parse.serverURL = 'http://localhost:1337/parse'


function TweetBox(props) {
    const { TextArea } = Input;
    const [tweetMessage, setTweetMessage] = useState("")
    const [tweetImage, setTweetImage] = useState("")
    const {dispatch} = useContext(FeedContext);

    const user = Parse.User.current();

    const sendTweet = async () => {
        const Post = Parse.Object.extend("Post");
        const myPost = new Post();
        myPost.set("postMsg", tweetMessage);
        myPost.set("user", user);
        myPost.save();
        setTweetMessage("")
        console.log(tweetMessage, user.attributes.username,"amir");
        dispatch({ type: "add_tweet", payload:{
            post: tweetMessage,
            author: user.attributes.username
        }})
        //console.log(dispatch.payload,"po");
        //get all posts from this user
        // const query = new Parse.Query(Post);
        // query.equalTo("user", user);
        // const userPosts = await query.find();

    }
    

    const onChange = e => {
        setTweetMessage(e.target.value);
       
    };
    return (
        <div className="tweetBox">

            <Form >
                <Row>
                    <Col span={2}>
                        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                        {user.attributes.username}
                    </Col>

                    <Col span={22}>
                        <Form.Item className="tweetBox__input">

                            <TextArea
                                value={tweetMessage}
                                showCount maxLength={200}
                                onChange={onChange}
                            />

                        </Form.Item>

                    </Col>
                </Row>


                {/*  <Form.Item style={{ backgroundColor: "blanchedalmond" }} >
                   <input
                        value={tweetImage}
                     onChange={(e) => setTweetImage(e.target.value)}
                        className="tweetBox_imageInput"
                        placeholder="Optional: Enter image URL"
                        type="text"
                    /> 

                </Form.Item>*/}

                <Form.Item>
                    <Button htmlType="submit"
                        onClick={sendTweet}
                        className="tweetBox__tweetButton">
                        Tweet
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default TweetBox
