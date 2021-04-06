import React from 'react'
import { Input, Form, Button } from 'antd'
import '../AuthPage/auth.css'
function PasswordForms(props) {


    return (
        <>
            <Form.Item
                dependencies={['password']}
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    {
                        min: 1,
                        message: 'Password cannot be less than 8 characters',
                    },
                    //password containing uppercase and lowercase characters error
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            let upRule = false;
                            let lowRule = false;
                            let numberRule = false;
                            let specialRule = false;

                            for (value of value.split("")) {
                                let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

                                if (value == /\d+/g.test(value)) {
                                    numberRule = true;
                                    console.log(value, "num");
                                }


                            //    if (value == format.test(value)) {
                            //         specialRule = true;
                            //         console.log(value, "special");
                            //           }

                                else {

                                    
                                    if (value == value.toUpperCase()) {
                                        upRule = true;
                                        console.log(value, "up");
                                    }

                                    if (value == value.toLowerCase()) {
                                        lowRule = true;
                                        console.log(value, "low");
                                    }

                                }

                            }
                            if (!upRule || !lowRule || !numberRule ) {
                                upRule = false;
                                lowRule = false;
                                numberRule = false;
                                specialRule = false;
                                return Promise.reject(new Error(' password must contain ar least one uppercase, lowercase character , number '))
                            }
                            else if (upRule && lowRule && numberRule) {
                                upRule = false;
                                lowRule = false;
                                numberRule = false;
                                specialRule = false;
                                return Promise.resolve()
                            }
                        }

                    }),


                ]}
                hasFeedback
            >
                <Input.Password
                    onChange={props.handleData} value={props.password} className="inputs" name="pw1" />
            </Form.Item>

        </>
    )
}

export default PasswordForms
