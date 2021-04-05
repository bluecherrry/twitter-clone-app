import React ,{useState}from 'react'
import { Form, Checkbox ,Button} from 'antd'
import { Link ,useHistory} from 'react-router-dom'
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
        <div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent placerat augue enim, eu malesuada diam ullamcorper vel. Nam porttitor est a hendrerit aliquet. Ut lobortis nibh sit amet vestibulum bibendum. Maecenas eu urna arcu. Maecenas vel est aliquet, sollicitudin velit in, accumsan mauris. In hac habitasse platea dictumst. Donec ligula leo, viverra a consectetur eu, imperdiet sed massa. Nulla sit amet tempor velit, vel egestas nunc. Ut et dui non velit suscipit sagittis. Vestibulum pharetra volutpat ipsum.

                Donec dolor mauris, posuere eget commodo quis, sagittis sed tortor. Nunc rhoncus ullamcorper lorem, vel commodo dui consequat eu. Aliquam erat volutpat. Proin a luctus ipsum, sit amet faucibus sem. Sed vitae eros convallis, aliquam nulla eget, finibus sem. Nullam rutrum sit amet metus eu rhoncus. Quisque fermentum magna imperdiet aliquam maximus. Aenean fringilla odio dui, at ultrices nisi rutrum ut. In lectus ante, pellentesque nec velit maximus, luctus vestibulum leo. Vivamus auctor neque id orci vestibulum, eget viverra elit sagittis. Maecenas varius est erat, non imperdiet erat consectetur vitae. Nunc id mi porttitor, cursus diam vitae, sagittis dui. Etiam at dolor sit amet magna blandit iaculis quis non tellus. Etiam tortor mauris, consectetur sit amet justo ac, venenatis vulputate sem. Suspendisse dolor mi, iaculis commodo tellus sit amet, scelerisque cursus tellus. Maecenas et varius erat.

                Aliquam vel mattis nunc, id consequat tellus. Fusce in arcu nec nisl cursus cursus. Praesent ut finibus massa, sed pretium arcu. Sed a magna ante. In hac habitasse platea dictumst. Donec et lorem odio. Nunc dui nulla, consectetur nec purus facilisis, gravida dignissim nunc. Vivamus id posuere lectus, et lobortis felis. Nunc accumsan sollicitudin convallis. Nulla facilisi. In consequat mollis condimentum. Mauris pretium ligula varius, porttitor metus a, auctor justo. In pharetra non urna in pharetra. Etiam eleifend eros eu blandit scelerisque. Donec non elit et lectus sollicitudin tincidunt. Nulla facilisi.

                Nulla ac elit et erat commodo sollicitudin non eget elit. Quisque non tellus fringilla, varius leo vitae, consectetur nunc. Sed sagittis nisi dolor, at fringilla mauris commodo vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque ac laoreet est, sed fermentum leo. Vestibulum iaculis quam sit amet dolor imperdiet, quis congue enim vulputate. Nam cursus urna nulla, non aliquet nisi convallis vitae.

                Duis dignissim porttitor ante, quis congue magna facilisis aliquet. Aenean tempus sapien nisl, vel pellentesque eros pharetra eget. Aenean auctor eros a odio interdum, in condimentum augue volutpat. Ut aliquet enim ac nulla laoreet, dapibus lacinia ex rhoncus. Suspendisse id eros ac arcu sodales laoreet. Integer auctor nisl tellus, sed malesuada sapien posuere vitae. Vivamus tincidunt ullamcorper justo id accumsan. Etiam mattis ante nibh, id auctor diam placerat eu. Curabitur hendrerit odio ac ante gravida, at faucibus metus sodales.
            </p>
            <Form   onSubmit={handleSubmit}>
            <Form.Item

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
            <Form.Item>
                <Button onClick={check ? redirect : ''}
                type="primary" htmlType="submit">
                        next
                 </Button>
            </Form.Item>
            </Form>
           
        </div>
    )
}

export default Agreement
