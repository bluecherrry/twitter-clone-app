import React from 'react'
import { Button } from 'antd'
import firebase from 'firebase'
function Follow(props) {
    const userList = async () => {
        try {
            await firebase.database().ref('/userName')
                .on("value", (datasnapshot) => {
                    const uuid = firebase.auth().currentUser.uid
                    console.log('uuid', uuid);

                    let users = [];
                    datasnapshot.forEach((child) => {
                       
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
                   
                })
        }
        catch (error) {
            alert(error)
        }
    }
    return (
        <div>
            {props.name}{" "}{" "}{" "}
            <Button>follow</Button>
        </div>
    )
}

export default Follow
