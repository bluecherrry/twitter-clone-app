import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Input, Form, Button, Row, Col, Card } from 'antd'
function RegisterForm(props) {
    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24

            },
            sm: {
                span: 8,
            },
        },
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 16,
            },
        },
    };
    const [form] = Form.useForm();
    const onFinish = (values) => {
        // results.post('/signUp.json ', value)
    };


    const [sign, setSign] = useState([

        { username: '', password: '', confirm: '' }
    ]
    )
    console.log(sign.password, "user");
    return (
        <Row justify="center" className="register">
            <Col xs={24} xl={12} className="register-col">
                <Card
                    title="Sign Up"
                    className="card-register"
                    style={{ width: "100%" }}>
                    <Form
                        {...formItemLayout}
                        form={form}
                        name="register"
                        onFinish={onFinish}
                        className="register-form"
                        scrollToFirstError
                    >

                        <Form.Item
                            name="email"
                            label="E-mail"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="username"
                            label="Username"
                            tooltip="What do you want others to call you?"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your nickname!',
                                    whitespace: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
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
                                    min: 8,
                                    message: 'Password cannot be less than 8 characters',
                                },
                                {
                                     number:true,
                                    min : 1,
                                    message:'password number'
                                },
                                //password containing uppercase and lowercase characters  and numbers error
                                ({ getFieldValue }) => ({
                                    validator(_, value) {

                                        let upRule = false;
                                        let lowRule = false;
                                        let numberRule = false;


                                        for (value of value.split("")) {
                                            //let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

                                            if (value == /\d/.test(value)) {
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
                                                    // console.log(value, "up");
                                                }
                                                if (value == value.toLowerCase()) {
                                                    lowRule = true;
                                                    // console.log(value, "low");
                                                }
                                            }

                                        }
                                        if (!upRule || !lowRule || !numberRule) {
                                            upRule = false;
                                            lowRule = false;
                                            numberRule = false;
                                            return Promise.reject(new Error(' password must contain ar least one uppercase, lowercase character , number '))
                                        }
                                        else if (upRule && lowRule && numberRule) {
                                            upRule = false;
                                            lowRule = false;
                                            numberRule = false;
                                            return Promise.resolve()
                                        }
                                    }

                                }),


                            ]}
                            hasFeedback
                        >
                            <Input.Password
                                value={sign.password} className="inputs" />
                        </Form.Item>
                        <Form.Item
                            name="confirm"
                            label="Confirm Password"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        console.log(value, "confirrm");

                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }

                                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password value={sign.confirm} className="inputs" />
                        </Form.Item>

                    </Form>
                    <Form.Item>
                        <Button
                            type="default"
                            htmlType="submit"
                            className="register-btn">
                            <Link to="/policy/agreement">
                                signUp
                              </Link>
                        </Button>
                    </Form.Item>
                </Card>
            </Col>

        </Row>

    )
}

export default RegisterForm



// function handleData(e) {
//     const newData = { ...sign }
//     newData[e.target.id] = e.target.value
//     setSign(newData)
//   //console.log(newData);
// }