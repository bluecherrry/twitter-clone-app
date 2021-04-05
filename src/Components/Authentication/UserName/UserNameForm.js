import React from 'react'
import { Input, Form, Button } from 'antd'

function UserNameForm(props) {
    return (
        <div>
             <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input  onChange={ props.handleData} value={props.username} className="inputs"/>
            </Form.Item>
        </div>
    )
}

export default UserNameForm
