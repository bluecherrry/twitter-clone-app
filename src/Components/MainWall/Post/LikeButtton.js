import React, { useReducer, useEffect } from 'react'
import LikeReducer from '../../../Reducers/likeReducer'
import { Button } from 'antd'
import { initialState, HANDLE_LIKE, HANDLE_DISLIKE } from '../../../Reducers/likeReducer'
import { HeartTwoTone, HeartOutlined } from '@ant-design/icons';
import { useParse } from '../../../Context/Parse';

function LikeButtton({ post }) {
    const Parse = useParse().Parse
    const [state, dispatch] = useReducer(LikeReducer, initialState);
    const { likes, active } = state;
    const user = Parse.User.current();
    const PostsLike = Parse.Object.extend("PostsLike");
    const postsLike = new PostsLike();
    postsLike.set("user", user);
    postsLike.set("post", post);
    const saveLike = () => {
        let postId = postsLike.get('post').id
        console.log(postId);
        postsLike.save()
            .then((res) => {
                dispatch({
                    type: HANDLE_LIKE,
                    payload: res
                })
            })
            .catch((error)=> {
                alert(error)
            })
    }

    const disLike = () => {
        const query = new Parse.Query(PostsLike);
        query.equalTo("post", post);
        query.find().then((u) => {
            let d = u.find(e => e.attributes.user.id === user.id)
            d.destroy().then((e) => {
                dispatch({
                    type: HANDLE_DISLIKE, payload: { Likes: u, UserId: user.id }
                })
            }
            
            )
            .catch((error)=> {
                alert(error)
            })
        })
    }
    const showLikes =  () => {
        const query = new Parse.Query(PostsLike);
        query.equalTo("post", post);
        query.find()
            .then((results) => {
                dispatch({
                    type: 'init_like', payload: { likes: results, userId: user.id }
                })
            })

    }
    useEffect(() => {
        showLikes()

    }, [])

    return (
        <div style={{ display: "flex" }} >
            <Button
                style={{ border: "none" }}

                onClick={() =>
                    active ? disLike() : saveLike()
                }
            >
                {active ? <HeartTwoTone twoToneColor="#eb2f96" /> : <HeartOutlined />}
                <br />
                {likes.length}

            </Button>

        </div>
    )
}

export default LikeButtton









// <div  onClick={liked}>
// {
//    like? <HeartTwoTone twoToneColor="#eb2f96" /> :  <HeartOutlined />
// }
// <div className="counter" onClick={likeHandler}>
// <span>click</span>
// </div>
// </div>