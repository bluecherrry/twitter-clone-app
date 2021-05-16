import React, { useReducer, useEffect, useState } from 'react'
import LikeReducer from '../../../Reducers/likeReducer'
import { Button, Empty } from 'antd'
import Parse from 'parse/dist/parse.min.js';
import { initialState, HANDLE_LIKE, HANDLE_DISLIKE } from '../../../Reducers/likeReducer'
import { HeartTwoTone, HeartOutlined } from '@ant-design/icons';

Parse.initialize("TWITTER_ID", "");
Parse.serverURL = 'http://localhost:1337/parse'

function LikeButtton({ post }) {
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
    }

    const disLike = async () => {
        const query = new Parse.Query(PostsLike);
        query.equalTo("post", post);
        const results = await query.find().then((u) => {
            let d = u.find(e => e.attributes.user.id === user.id)
            d.destroy().then((e) => {
                dispatch({
                    type: HANDLE_DISLIKE, payload: { Likes: u, UserId: user.id }

                })
            }

            )
            
        })
    }

    const showLikes = async () => {
        const query = new Parse.Query(PostsLike);
        query.equalTo("post", post);
        const results = await query.find();
        dispatch({
            type: 'init_like', payload: { likes: results, userId: user.id }
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