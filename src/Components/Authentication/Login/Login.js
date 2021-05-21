import React, { useState, useRef, useEffect } from 'react'
import { Button, Form,  Input, Row, Card, Col, Alert } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import { useAuth } from '../../../Context/AuthContext'
function Login() {
    const [form] = Form.useForm();
    //ref
    const emailRef = useRef()
    const passwordRef = useRef()
    //context 
    const { login } = useAuth()
    //usestate
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const [error, setError] = useState("")
    const onFinish = () => {
        login(emailRef.current.state.value, passwordRef.current.state.value)          
        setError("") 
    }
    const handleLoading = () => {
        setIsButtonLoading(true);
             const timeout = setTimeout(() => {
                 setIsButtonLoading(false);
             }, 6000);
             
             return () => {
                 clearTimeout(timeout);
             };
         }
    const [, forceUpdate] = useState({});
    // To disable submit button at the beginning.
    useEffect(() => {
       forceUpdate({});
    }, []);
    return (
        <Row justify="center" className="register">
            <Col xs={24} xl={12} className="register-col">
                <Card title="Log In"
                    className="card-register">
                         {error && <Alert variant="danger" message={error}/>}
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
                            <a className="login-form-forgot" href="/">
                                Forgot password
                            </a>
                        </Form.Item>
                        <Form.Item shouldUpdate>
                            {() => (
                                <Button
                                    onClick={handleLoading}
                                    loading={isButtonLoading}
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
