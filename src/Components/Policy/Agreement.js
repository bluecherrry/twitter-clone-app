import React ,{useState}from 'react'
import { Form, Checkbox ,Button, Row,Col} from 'antd'
import { useHistory} from 'react-router-dom'
import './Agree.css'
function Agreement() {
const [check, setCheck] = useState(false)
   const handleChange = (e) => {
       setCheck({check: !check})
       console.log(check,'check',setCheck,'set check');

   }
   const handleSubmit = (e) => {
       e.preventDefault();
       console.log(check,'check',setCheck,'set check');
   }
   let history = useHistory();
   const redirect = () => {
    history.push('/mainwall/mainwall')
  }
    return (
        <Row justify="center" className="agree-row">
            <Col xs={24} xl={12} >
            <div >
                <h1>Twitter Privacy Policy</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat augue enim, eu malesuada diam ullamcorper vel. Nam porttitor est a hendrerit aliquet. Ut lobortis nibh sit amet vestibulum bibendum. Maecenas eu urna arcu. Maecenas vel est aliquet, sollicitudin velit in, accumsan mauris. In hac habitasse platea dictumst. Donec ligula leo, viverra a consectetur eu, imperdiet sed massa. Nulla sit amet tempor velit, vel egestas nunc. Ut et dui non velit suscipit sagittis. Vestibulum pharetra volutpat ipsum.

                Donec dolor mauris, posuere eget commodo quis, sagittis sed tortor. Nunc rhoncus ullamcorper lorem, vel commodo dui consequat eu. Aliquam erat volutpat. Proin a luctus ipsum, sit amet faucibus sem. Sed vitae eros convallis, aliquam nulla eget, finibus sem. Nullam rutrum sit amet metus eu rhoncus. Quisque fermentum magna imperdiet aliquam maximus. Aenean fringilla odio dui, at ultrices nisi rutrum ut. In lectus ante, pellentesque nec velit maximus, luctus vestibulum leo. Vivamus auctor neque id orci vestibulum, eget viverra elit sagittis. Maecenas varius est erat, non imperdiet erat consectetur vitae. Nunc id mi porttitor, cursus diam vitae, sagittis dui. Etiam at dolor sit amet magna blandit iaculis quis non tellus. Etiam tortor mauris, consectetur sit amet justo ac, venenatis vulputate sem. Suspendisse dolor mi, iaculis commodo tellus sit amet, scelerisque cursus tellus. Maecenas et varius erat.

                
            </p>
            <Form   onSubmit={handleSubmit}>
            <Form.Item
                style={{textAlign:"center"}}
                name="agreement"
                valuePropName="checked"
                rules={[
                    {
                        validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                    },
                ]}

            >
                <Checkbox onChange={handleChange}>   
                        I agree to privacy  policy
                </Checkbox>
            </Form.Item>
            <Form.Item style={{textAlign:"center"}}>
                <Button onClick={check ? redirect : ''}
                type="primary" htmlType="submit">
                        next
                 </Button>
            </Form.Item>
            </Form>
           
        </div>
            </Col>
        </Row>
    )
}

export default Agreement
