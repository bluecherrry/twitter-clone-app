import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { database } from '../../../../firebase/firebase';

function DataTable() {
    const[users,setUsers] = useState(null);
    const  printUsers = () =>  {
           // const userRef = firebase.database().ref('') 
         //   axios.get(`https://twitter-app-ddf5b-default-rtdb.firebaseio.com/users/${users}`)
          // .then((res) =>  console.log(res)) 
    database.collection('posts')
    .get()
    .then(snapshot => {
        const users = []
        snapshot.forEach(doc => 
          {  const data = doc.data()
            users.push(data)
        }
            )
            setUsers(users)
    })
        }
        useEffect(
            printUsers
            ,[])
        
    return (
        <div>
            {
                users && 
                users.map((user )=> {
                    return(
                        <div>
                            <p>
                             {user.username}   
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DataTable
