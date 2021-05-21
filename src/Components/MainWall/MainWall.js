import React from 'react'
import Sidebar from './Sidebars/Sidebar'
// import Widgets from './Widgets/Widgets'
import Feed from './Feed/Feed'
import './wall.css'
import { Row,Col } from 'antd'
import Parse from 'parse/dist/parse.min.js';
Parse.initialize("TWITTER_ID", "");
Parse.serverURL = 'http://localhost:1337/parse'
function MainWall() {
     return (
        <div>
            
            <Row justify="center">
                <Col xs={1} xl={6} className="sidebar-col" >
                     <Sidebar /> 
                </Col>
                <Col xs={19} xl={8} >
                        <Feed/>  
                </Col>
                <Col  xs={0} xl={6} >
                    {/* <Widgets/> */}
                </Col>
            </Row>
           
         
            
            
        </div>
    )
}

export default MainWall
