import React from 'react'
import Sidebar from './Sidebars/Sidebar'
import Widgets from './Widgets/Widgets'
import Feed from './Feed/Feed'
import { Row,Col } from 'antd'
function MainWall() {
    return (
        <div>
            <Row justify="center">
                <Col sm={2} xl={8} >
                    <Sidebar /> 
                </Col>
                <Col sm={22} xl={8} >
                      <Feed/>
                </Col>
                <Col  sm={0} xl={8} >
                <Widgets/>
                </Col>
            </Row>
           
         
            
            
        </div>
    )
}

export default MainWall
