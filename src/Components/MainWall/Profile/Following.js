import React from 'react'
import { Tabs } from 'antd';
function Following() {


    const { TabPane } = Tabs;

    function callback(key) {
        console.log(key);
    }
    return (
        <div>
            <Tabs defaultActiveKey="1" onChange={callback}>
             <TabPane tab="followers" key="1">
                   followers
             </TabPane>
                <TabPane tab="Following" key="2">
                   Following
                </TabPane>
               
            </Tabs>
        </div>
    )
}

export default Following
