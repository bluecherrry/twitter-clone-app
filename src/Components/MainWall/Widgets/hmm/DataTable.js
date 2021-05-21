// import React,{useEffect,useState} from 'react'
// import axios from 'axios';

// function DataTable() {
//     const[users,setUsers] = useState(null);
//     const  printUsers = () =>  {

//     database.collection('posts')
//     .get()
//     .then(snapshot => {
//         const users = []
//         snapshot.forEach(doc => 
//           {  const data = doc.data()
//             users.push(data)
//         }
//             )
//             setUsers(users)
//     })
//         }
//         useEffect(
//             printUsers
//             ,[])
        
//     return (
//         <div>
//             {
//                 users && 
//                 users.map((user )=> {
//                     return(
//                         <div>
//                             <p>
//                              {user.username}   
//                             </p>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }

// export default DataTable
