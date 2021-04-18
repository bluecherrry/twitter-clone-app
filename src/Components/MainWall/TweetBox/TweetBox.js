import React, { useState, useEffect } from 'react'
import { Form, Avatar, Input, Button, Row, Col } from 'antd'
import "./TweetBox.css";
import UploadImage from '../Uploads/Upload'
import { UserOutlined } from '@ant-design/icons'
import { database, auth } from './../../../firebase/firebase'
import { useAuth } from '../../../Context/AuthContext'
import firebase from 'firebase'
function TweetBox(props) {
    const { getCurrentUsername } = useAuth()
    const { TextArea } = Input;
    const [tweetMessage, setTweetMessage] = useState("")
    const [tweetImage, setTweetImage] = useState("")
   // var myTimestamp = firebase.firestore.Timestamp.fromDate(new Date());
    useEffect(() => {
        const fetchData = async () => {
             await database.collection("posts").get()
            .then((res) => {
               console.log(res,"res");
            })
           
        }
        fetchData()
        auth.onAuthStateChanged((user) => {
             const loggedInUser =  localStorage.getItem("user")
            if (user != null) {
                console.log("signed in", getCurrentUsername())
           //     const foundUser = JSON.parse(loggedInUser)
              //  console.log(localStorage,"local");
            }
            else {
                console.log("state = definitely signed out")
            }
        });
    }, [])

    //console.log(getCurrentUsername()," is current user name");
    
    const onChange = e => {
        setTweetMessage(e.target.value);
    };
    const sendTweet = (e) => {
        e.preventDefault();
        database.collection('posts').add({
            displayName: getCurrentUsername(),
            username: getCurrentUsername(),
            avatar: "data:image/jpeg;base64,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",
            text: tweetMessage,
            image: tweetImage,
        })
            
     
        setTweetMessage("");
        setTweetImage("");
        
    } 
   // console.log(firebase.firestore.FieldValue.serverTimestamp(),"time");
    return (
        <div className="tweetBox">
            hello current user : {getCurrentUsername()}
            <Form >
                <Row>
                    <Col span={2}>
                        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />

                    </Col>

                    <Col span={22}>
                        <Form.Item className="tweetBox__input">

                            <TextArea value={tweetMessage}
                                showCount maxLength={200} onChange={onChange} />

                        </Form.Item>
                        
                    </Col>
                </Row>


                <Form.Item style={{ backgroundColor: "blanchedalmond" }} >
                    <input
                        value={tweetImage}
                        onChange={(e) => setTweetImage(e.target.value)}
                        className="tweetBox_imageInput"
                        placeholder="Optional: Enter image URL"
                        type="text"
                    />

                </Form.Item>

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
