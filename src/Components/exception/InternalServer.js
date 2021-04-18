import React from 'react'
import { Result, Button } from 'antd';
import {Link} from 'react-router-dom'
function InternalServer() {
    return (
        <>
            <Result
                status="500"
                title="500"
                subTitle="Sorry, It's not you ! it's me :(."
                extra={<Button type="primary">
                    <Link to="/">
                    Back Home
                    </Link>
                    </Button>}
            />
        </>
    )
}

export default InternalServer
