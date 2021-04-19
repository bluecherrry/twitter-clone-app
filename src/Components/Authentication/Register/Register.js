import React, { useRef, useState } from 'react'
import { Link} from 'react-router-dom'
import { Input, Form, Button, Row, Col, Card } from 'antd'
import { useAuth } from '../../../Context/AuthContext'
import axios from 'axios'

function RegisterForm(props) {


    const [form] = Form.useForm();
    
    //ref

    const emailRef = useRef()
    const usernameRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    //context 
    const { signup } = useAuth()
    //usestate
    const [isButtonLoading, setIsButtonLoading] = useState(false);

    const onFinish= (value ) => {
      signup(usernameRef.current.state.value,emailRef.current.state.value, passwordRef.current.state.value)
      axios.post(`https://twitter-app-ddf5b-default-rtdb.firebaseio.com/userName.json`,value)
      .then((res) =>{
         console.log(res);
      }
     )
        .catch((error)=>{
             console.log(error,"error");
           }
        )
}  
const handleLoading = () => {
   setIsButtonLoading(true);
        const timeout = setTimeout(() => {
            setIsButtonLoading(false);
        }, 2000);
        
        return () => {
            clearTimeout(timeout);
        };
    }
    

    return (
        <Row justify="center" className="register">
            <Col xs={24} xl={12} className="register-col">
                <Card
                    title="Sign Up"
                    className="card-register"
                >
                   <Form
                        form={form}
                        onFinish={(value) => onFinish(value)}
                        name="register"
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
                            <Input ref={emailRef} />
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
                            <Input ref={usernameRef} />
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
                                    pattern: new RegExp(".*[a-z]"),
                                    message: "password must contain at least one lowercase"
                                },
                                {
                                    pattern: new RegExp(".*[A-Z]"),
                                    message: "password must contain at least one uppercase"
                                },
                                {
                                    pattern: new RegExp("[0-9]"),
                                    message: "password must contain at least one digit"
                                },
                                {
                                    pattern: new RegExp(".*[!@#$%^&*]"),
                                    message: "password must contain at least one special character"
                                }
                            ]}
                            hasFeedback
                        >
                            <Input.Password ref={passwordRef} className="inputs" />
                        </Form.Item>
                        <Form.Item
                            name="passwordconfirm"
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


                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }

                                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password className="inputs" ref={passwordConfirmRef} />
                        </Form.Item>

                        <Form.Item shouldUpdate className="submit">
                            {() => (
                                <Button
                                onClick={handleLoading}
                                loading={isButtonLoading}
                                className="register-btn"
                                    type="primary"
                                    htmlType="submit"
                                    disabled={
                                        !form.isFieldsTouched(true) ||
                                        form.getFieldsError().filter(({ errors }) => errors.length)
                                            .length > 0
                                    }
                                >
                                 <Link to="/policy/agreement">
                           sign up 
                                </Link>
                                                
                                </Button>
                            )}
                        </Form.Item>
                    </Form>

                </Card>
            </Col>

        </Row >

    )
}

export default RegisterForm



// function handleData(e) {
//     const newData = { ...sign }
//     newData[e.target.id] = e.target.value
//     setSign(newData)
//   //console.log(newData);
// }


{/* <Form.Item
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
        number: true,
        min: 1,
        message: 'password number'
    },
    password containing uppercase and lowercase characters  and numbers error
    ({ getFieldValue }) => ({
        validator(_, value) {

            let upRule = false;
            let lowRule = false;
            let numberRule = false;


            for (value of value.split("")) {
                let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

                if (value == /\d/.test(value)) {
                    numberRule = true;
                    
                }

                else {
                    if (value == value.toUpperCase()) {
                        upRule = true;
                       
                    }
                    if (value == value.toLowerCase()) {
                        lowRule = true;
                       
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
<Input.Password ref={passwordRef} className="inputs" />
</Form.Item> */}