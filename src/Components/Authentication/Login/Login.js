import React from 'react'
import axios from 'axios'
import results from '../../../firebase/baseurl'
import UserNameForm from '../UserName/UserNameForm'
import PasswordForms from '../Passwords/PasswordForms'
import { Button, Form ,Checkbox} from 'antd'

function Login() {
    const onFinish = async (values) => {
      const response = await axios.get(`https://twitter-app-ddf5b-default-rtdb.firebaseio.com/signUp.json`)
        return response.values;
        console.log(response.values);
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
