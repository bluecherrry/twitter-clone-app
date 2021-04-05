
import React, { useState } from 'react'
import { Input, Form, Button } from 'antd'
import './sign.css'
import results from '../../../firebase/baseurl'
import PasswordForms from '../Passwords/PasswordForms';
import UserNameForm from '../UserName/UserNameForm';
import ConfirmPassword from '../Passwords/ConfirmPassword';
import { Link } from 'react-router-dom';
function SignUp(props) {

    const [sign, setSign] = useState({
        username: '',
        pass: ''
    })
    function handleData(e) {
        const newData = { ...sign }
        newData[e.target.id] = e.target.value
        setSign(newData)
    }
    const onFinish = (value) => {
        results.post('/signUp.json ', value)
      
    };

    const layout = {
        labelCol: {
            span: 24,

        },
        wrapperCol: {
            span: 16,
        },
    };

    return (

        <Form

            {...layout}
            onFinish={onFinish}

        >
            <UserNameForm handleData={handleData} username={sign.username} />
            <PasswordForms handleData={handleData} passwords={sign.pass} />
            <ConfirmPassword handleData={handleData} confirm={sign.pass} />
            <Form.Item>
                <Button
                    type="default"
                    htmlType="submit"
                    className="btn-submit">
                    <Link to="/policy/agreement">
                        sign up
                    </Link>
                </Button>
            </Form.Item>


        </Form>
    )
}

export default SignUp