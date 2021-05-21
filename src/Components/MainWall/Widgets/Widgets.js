import React from 'react'
import './Widgets.css'
// import { Input, Table } from 'antd';
// import axios from "axios";
// import { userColumns } from "./hmm/columns";
// import { useTableSearch } from "./hmm/useTableSearch";
// import FriendList from './UserList';


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
                {/* <FriendList/> */}
            </div>
        </div>
    )
}

export default Widgets
