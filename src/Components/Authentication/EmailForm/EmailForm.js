import React from 'react'
import { Input, Form, Button } from 'antd'
function EmailForm(props) {
    return (
        <div>
            <Form.Item
                label="email"
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your email!',
                    },
                ]}
            >
                <Input onChange={props.handleData} value={props.username} className="inputs" />
            </Form.Item>
        </div>
    )
}

export default EmailForm
