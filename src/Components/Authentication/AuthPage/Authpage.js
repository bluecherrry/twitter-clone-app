import React, { useState } from 'react'
import { Row, Col, Input,Form,Button } from 'antd'
import { usePasswordValidation } from "../../../Hooks/usePasswordValidation";
import SignUp from '../SignUp/SignUp';

function Authpage() {
  
    return (
        <div>
            <Row>
                <Col span={12} >
                    {/* <img src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png" className="twitter-class"/> */}
                    <div >
                        twitter
                  </div>
                </Col>
                <Col span={12}>
                   <SignUp/>
                    </Col>
            </Row>
        </div >
    )
}

export default Authpage
