import React from 'react';
import { Link } from 'react-router-dom';
import { Result, Button } from 'antd';



function NotFound() {

    return (
        <div>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary">
                    <Link to="/mainwall/mainwall">
                    Back Home    
                    </Link>
                    
                    </Button>}
            />


        </div>
    )
}

export default NotFound



{/* <section className="page_404">
<div className="container">
    <Row justify="center">
        <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className="four_zero_four_bg">
                    <h1 className="text-center ">404</h1>
                </div>
                <div className="contant_box_404">
                    <h3 className="h2">
                        Look like you're lost
                     </h3>
                    <p>the page you are looking for not avaible!</p>
                    <a href className="link_404">Go to Home</a>
                </div>
            </div>
        </div>
    </Row>
</div>
</section> */}
