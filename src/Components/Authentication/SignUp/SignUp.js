
import React, { useState } from 'react'
import {  Input,Form,Button } from 'antd'
import { usePasswordValidation } from "../../../Hooks/usePasswordValidation";
 function SignUp() {
    const [password, setPassword] = useState({
        firstPassword: "",
        secondPassword: "",
    });

    const [
        validLength,
        hasNumber,
        upperCase,
        lowerCase,
        match,
        specialChar,
    ] = usePasswordValidation({
        firstPassword: password.firstPassword,
        secondPassword: password.secondPassword,
    });
    const setFirst = (event) => {
        setPassword({ ...password, firstPassword: event.target.value });
    };
    const setSecond = (event) => {
        setPassword({ ...password, secondPassword: event.target.value });
    };
    return (
        <div>
            <Form>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true,
                         message: 'Please input your username!' 
                        
                        }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                
                  
                    
                    {...getFieldDecorator('password',{
                        rules : [
                            {  validLength:true,  message:'password must be at least 8 characters'},
                            { required: true,   message: 'Please input your password!'}
                        ]
                    })
                      
                    }
                
                >
                    First Password:
                         <Input onChange={setFirst} type='text' />
                </Form.Item>
                <div>
                    Second Password:
                         <Input onChange={setSecond} type='text' />
                </div>
                <div>
                    <ul>
                      
                        <li>
                            {hasNumber ? "" : <span>password must contain numbers</span>}
                        </li>
                        <li>
                            {upperCase ? "" : <span>password must contain an uppercase word</span>}
                        </li>
                        <li>
                            {lowerCase ? '' : <span>password must contain a lowercase word</span>}
                        </li>
                        <li> {match ? '' : <span>password did not match !</span>}</li>
                        <li>

                            {specialChar ? '' : <span>password must contain  special character</span>}
                        </li>
                    </ul>
                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            Submit
                             
                         </Button>
                    </Form.Item>
                </div>

            </Form>
        </div>
    )
}
export default Form.create()(SignUp)