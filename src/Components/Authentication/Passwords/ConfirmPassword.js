import React from 'react'
import {Input,Form} from 'antd'

function ConfirmPassword(props) {
    return (
        <div>
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
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                    }),
                ]}
            >
                <Input.Password value={props.Passwords} className="inputs"/>
            </Form.Item>
        </div>
    )
}

export default ConfirmPassword
