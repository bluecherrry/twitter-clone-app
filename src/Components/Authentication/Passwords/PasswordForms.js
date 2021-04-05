import React from 'react'
import { Input, Form, Button } from 'antd'
import '../AuthPage/auth.css'
function PasswordForms(props) {


    return (
        <>
             <Form.Item
             
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },

                    {
                        min: 8,
                        message: 'Password cannot be less than 8 characters',
                    },
                   {
                        number : 1,
                        message:'password number '
                    }
                    // {
                    //     pattern: ('?=.*[A-Z]'),
                    //     message:'input must contain upperCase'
                    // }


                ]}
                hasFeedback
            >
                <Input.Password  
                onChange={ props.handleData} value={props.passwords} className="inputs" name="pw1"/>
            </Form.Item>

        </>
    )
}

export default PasswordForms
