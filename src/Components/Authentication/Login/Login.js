import React from 'react'
import UserNameForm from '../UserName/UserNameForm'
import PasswordForms from '../Passwords/PasswordForms'
import { Button, Form ,Checkbox} from 'antd'

function Login() {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <div>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <UserNameForm />
                <PasswordForms />
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                        Forgot password
        </a>
                </Form.Item>
                <Button>
                    log in
                </Button>
                Or <a href="/signup">register now!</a>

            </Form>



        </div>
    )
}

export default Login
