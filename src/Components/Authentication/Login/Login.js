import React, { useState, useRef, useEffect } from 'react'
import { Button, Form, Checkbox, Input, Row, Card, Col, Alert } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../../Context/AuthContext'

function Login() {
    const [form] = Form.useForm();
    //ref
    const emailRef = useRef()
    const passwordRef = useRef()
    //context 
    const { login } = useAuth()
    //usestate
    const [httpStatusCode, setHttpStatusCode] = useState();
    const [showLoader, setShowLoader] = useState(false);
    const [loading, setLoading] = useState(false);
    const onFinish = (value) => {
        login(emailRef.current.state.value, passwordRef.current.state.value)
    .then(value => value.json())
    .then(() => console.log(value))
    
    };
    const handleLoading = () => {
        setLoading(true);
        setTimeout(() => {
        setLoading(false);
        }, 3000)
    }
    const [, forceUpdate] = useState({});
    // To disable submit button at the beginning.
    useEffect(() => {
       forceUpdate({});
        if (loading) {
            setShowLoader(true);
        }
         // Show loader a bits longer to avoid loading flash
        if (!loading && showLoader) {
            const timeout = setTimeout(() => {
                setShowLoader(false);
            }, 400);
            //clear the timeout
            return () => {
                clearTimeout(timeout);
            };
        }
        }, []);
    return (
        <Row justify="center" className="register">
            <Col xs={24} xl={12} className="register-col">
                <Card title="Log In"
                    className="card-register">
                    <Form
                        form={form}
                        name="normal_login"
                        className="register-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}

                    >
                        <Form.Item
                            name="email"

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
                            <Input ref={emailRef}
                                prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" className="inputs" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                        >
                            <Input
                                ref={passwordRef}
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <a className="login-form-forgot" href="">
                                Forgot password
                            </a>
                        </Form.Item>
                        <Form.Item shouldUpdate>
                            {() => (
                                <Button
                                    onClick={handleLoading}
                                    loading={showLoader}
                                    disabled={
                                        !form.isFieldsTouched(true) ||
                                        !!form.getFieldsError().filter(({ errors }) => errors.length).length
                                    }
                                    type="primary"
                                    htmlType="submit"
                                    className="submit">
                                    <Link to="/mainwall/mainwall">
                                         Log in
                                    </Link>   
                                </Button>)}

                        </Form.Item> Or <Link to="/register/register">register now!</Link>
                    </Form>
                </Card>
            </Col>
        </Row>
    )

}

export default Login
