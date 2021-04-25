import React, { useState } from 'react'
import './Widgets.css'
import { Input, Table } from 'antd';
import axios from "axios";
import { userColumns } from "./columns";
import { useTableSearch } from "./useTableSearch";
import firebase from 'firebase'
import SearchUser from './SearchUser';
function Widgets() {
    // const [allusers, setAllUsers] = useState([])

    // const fetchUsers = async () => {
    //     const { data } = await axios.get(
    //       "https://jsonplaceholder.typicode.com/users/"
    //     );
    //     return { data };
    //   };
    // const { data } = await firebase.database().ref('/userName')
    // .on("value", (datasnapshot) => {
    //     const uuid = firebase.auth().currentUser.uid
    //     console.log('uuid', uuid);

    //     let users = [];
    //     datasnapshot.forEach((child) => {
    //         if (child.val().uuid === uuid) {
    //             console.log(child.val());
    //         }
    //         else {
    //             users.push({
    //                 userName: child.val().username,
    //                 uuid: child.val().uuid
    //             })
    //         }

    //     })
    //     setAllUsers(users)
    // })



    // const { Search } = Input;
    // const [searchVal, setSearchVal] = useState(null);
    // const { filteredData, loading } = useTableSearch({
    //     searchVal,
    //     retrieve: fetchUsers
    // });

    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchUser />
                {/* <Search
                    onChange={e => setSearchVal(e.target.value)}
                    placeholder="Search"
                    enterButton
                    style={{ position: 'sticky', top: '0', left: '0' }}
                />
                <br /> <br />
                <Table
                    dataSource={filteredData}
                    columns={userColumns}
                    loading={loading}
                    pagination={false}
                    rowKey='name'
                /> */}

            </div>
        </div>
    )
}

export default Widgets
