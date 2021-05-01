import React, { useState, useEffect } from 'react'
import { componentWillAppendToBody } from "react-append-to-body";
import { Button, Tabs } from 'antd'
function Follow(props) {
    const [following, setFollowing] = useState([])
    const uniqueNames = [...new Set(following)]
    const [list, updateList] = useState(uniqueNames);
    const { TabPane } = Tabs;

    function callback(key) {
        console.log(key);
    }
    const addMoreItem = (item) => {
        setFollowing(prevItems => [...prevItems,
        props.name
        ]);
    }


    localStorage.setItem('following', JSON.stringify(uniqueNames))

    const followed = JSON.parse(localStorage.getItem('following'));

    const handleRemoveItem = (e) => {
        const name = e.target.getAttribute("name")
        updateList(list.filter(item => item.name !== name));
       
    }
     console.log(updateList);
    return (
        <div>
            {props.name}{" "}{" "}{" "}

            <Button onClick={addMoreItem} > follow</Button>



            <br />
            <div>
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="followers" key="1">
                        {followed.map((item, idx) => {
                            return (
                                <div>
                                    <li key={idx}>{item}</li>
                                    <button name={item.name} onClick={handleRemoveItem}>
                                        unfollow
                                      </button>
                                </div>)
                        })}
                    </TabPane>

                </Tabs>
            </div>









        </div>
    )
}

export default Follow
