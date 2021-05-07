import React, { useState } from 'react'
import { Row, Col,  Button } from 'antd'
import './auth.css' 
import { Link } from 'react-router-dom'

function Authpage() {

    return (
        <div >
            <Row  >
                
               <Col xl={12} className="authpage-image">
               
               </Col>
                <Col xs={24} xl={10} 
                
                    className="auth-register"
                    style={{marginTop:'15%',height:'71vh'}}
                    >
                        <div className="twitter-icon">
                            <img src="https://cdn.usbrandcolors.com/images/logos/twitter-logo.svg"/>
                        </div>
                    <h1> Happening now</h1>
                    <h2>Join Twitter today.</h2>
                    <div className="auth-button">

                        <Button type="primary">
                            <Link to="/register/register">
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
