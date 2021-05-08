import React,{useEffect} from 'react'
import Following from './Following'
import {Row, Col,Avatar} from 'antd'
import Sidebar from '../Sidebars/Sidebar'
import Widgets from '../Widgets/Widgets'
import Parse from 'parse/dist/parse.min.js';
import { UserOutlined } from '@ant-design/icons'
import './profile.css'
import { Content } from 'antd/lib/layout/layout'
Parse.initialize("TWITTER_ID", "");
Parse.serverURL = 'http://localhost:1337/parse'
function Profile() {
    const user = Parse.User.current();
   const getusername =  user.get("username")
    //get all posts from this user
  
        const uploadPosts = () => {
        const Post = Parse.Object.extend("Post");
        const query = new Parse.Query(Post);
        query.equalTo("user", user);
        const userPosts =  query.find(); 
         
        }
        useEffect(() => {
            
           //uploadPosts
            
        }, [])
    return (
        <div>
            <Row justify="center">
             
                
               <Col span={8}>
               <header className="profile__header">
                   <div  >
                   <Avatar
                   className="profile__user__pic"
                   icon={<UserOutlined />} />
                    
                   </div>
                   <div className="profile__user">
                        {getusername}
                   </div>
                  
               </header>
               <Content>
                 
               </Content>
               </Col>
                
            </Row>
           
        </div>
    )
}

export default Profile
