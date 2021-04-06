
import React, { useState } from 'react'
import { Input, Form, Button } from 'antd'
import {Link} from 'react-router-dom'
import './sign.css'
import results from '../../../firebase/baseurl'
import PasswordForms from '../Passwords/PasswordForms';
import UserNameForm from '../UserName/UserNameForm';
import ConfirmPassword from '../Passwords/ConfirmPassword';
import EmailForm from '../EmailForm/EmailForm'
function SignUp(props) {

    const [sign, setSign] = useState({
        username: '',
        
        password: '',
        confirm:''
    })
   
    function handleData(e) {
        const newData = { ...sign }
        newData[e.target.id] = e.target.value
        setSign(newData)
      //console.log(newData);
    }
    const onFinish = (value) => {
        results.post('/signUp.json ', value)
       
    };
    const isEnabled =   sign.username.length>0 && sign.password.length>0 && sign.confirm.length==0
        
    
  
    return (
        <Form onFinish={onFinish} >
        {/* <EmailForm handleData={handleData} email={sign.email}/> */}
            <UserNameForm handleData={handleData} username={sign.username} />
            <PasswordForms handleData={handleData} password={sign.password} />
            <ConfirmPassword handleData={handleData} confirm={sign.confirm} />
            <Form.Item>
                <Button
               disabled={!isEnabled}
                    type="default"
                    htmlType="submit"
                    className="btn-submit">
                        sign up
                       {/* <Link to="/policy/agreement">
                       signUp
                       </Link> */}
                </Button>
            </Form.Item>


        </Form>
    )
}

export default SignUp