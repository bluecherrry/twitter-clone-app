import React, { useState } from 'react'
import { Row, Col,  Button } from 'antd'

import { Link } from 'react-router-dom'
function Authpage() {

    return (
        <div>
            <Row >
                <Col span={11} >
                    <img src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png" className="twitter-pic"/>
                   
                </Col>
                <Col span={12}
                    align="left"
                    style={{marginLeft:'10px',marginTop:'20%'}}
                    >
                    <h1> Happening now</h1>
                    <h2>Join Twitter today.</h2>
                    <div className="auth-button">

                        <Button type="primary">
                            <Link to="/signup">
                                <span>sign up</span>
                            </Link>
                        </Button>
                        <br />
                        <Button type="primary">
                            <Link to="/login">
                                <span>login</span>
                             </Link>
                        </Button>
                    </div>
                </Col>
            </Row>
        </div >
    )
}

export default Authpage
