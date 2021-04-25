import React, { useState, useEffect } from 'react'
import firebase from 'firebase'
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
function FriendList() {
    const [allusers, setAllUsers] = useState([])
    const { Search } = Input;
    const userList = async () => {
        try {
            await firebase.database().ref('/userName')
                .on("value", (datasnapshot) => {
                    const uuid = firebase.auth().currentUser.uid
                    console.log('uuid', uuid);

                    let users = [];
                    datasnapshot.forEach((child) => {
                        if (child.val().uuid === uuid) {
                            console.log(child.val());
                        }
                        else {
                            users.push({
                                userName: child.val().username,
                                uuid: child.val().uuid
                            })
                        }

                    })
                    setAllUsers(users)
                })
        }
        catch (error) {
            alert(error)
        }
    }
    useEffect(
        userList, []
    )
    console.log(allusers, "user");
  
    const onSearch = value => console.log(value,"value search input ");
    return (
        <div>
          
            <Space>
                <Search
                    allowClear
                    placeholder="input search text"
                    enterButton="Search"
                    size="large"
                    onSearch={onSearch}
                />
            </Space>
        </div>
    )
}

export default FriendList
