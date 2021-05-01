import React, { useState, useEffect } from 'react'
import firebase from 'firebase'
import { Button,AutoComplete,Select,Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Follow from './Follow';
function UserList() {
    const [allusers, setAllUsers] = useState([])
    const [value, setvalue] = useState('')
    const [options, setOptions] = useState([]);
   
    const { Option } = AutoComplete;
    const handleChange = (data) => {
        setvalue(data)
    }
    const userList = async () => {
        try {
            await firebase.database().ref('/userName')
                .on("value", (datasnapshot) => {
                    const uuid = firebase.auth().currentUser.uid
                    console.log('uuid', uuid);

                    let users = [];
                    datasnapshot.forEach((child) => {
                        console.log(child.val().uid,"isjs");
                        if (child.val().uuid === uuid) {
                            console.log(child.val(),"child val");
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

    const handleSearch = (value) => {
        setOptions(value ? userList : []);
      };

    const onSelect = (data) => {
        console.log('onSelect', data);
        
      };

    
    const optionslist = allusers.map((d, ind) =>

        <Option key={ind} value={d.userName}>
            {d.userName}
        </Option>)
    return (
        <div className="search-user">
{/* 
            <AutoComplete
                allowClear={true}
                dropdownClassName="certain-category-search-dropdown"
                dropdownMatchSelectWidth={500}
                style={{
                    width: 250,
                    color:'black'
                }}
                onSearch={handleSearch}
                onSelect={onSelect}
              onChange={handleChange}
              placeholder="search user"
                
            >
               
                    {optionslist}
                
               
            </AutoComplete>
            <Button><SearchOutlined /></Button>
            */}
             
                <Select
                    suffixIcon={<SearchOutlined />}
                    placeholder="search users"
                    style={{ width: '300px' }}
                    value={value}
                    onSearch={handleSearch}
                    onChange={handleChange}
                    showSearch
                    filterOption={false}
                    notFoundContent={null}
                    defaultActiveFirstOption={false} >
                    {optionslist}
                </Select>
         
            <p>
                {value? <Follow name={value} /> : ""}
            </p>

        </div>
    )
}

export default UserList
