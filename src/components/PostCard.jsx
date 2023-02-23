import React from 'react'
import { Posts } from '.';
import { deletePost } from '../api-adapters'

const PostCard = (props) => {

    const post = props.post;
    const getPosts = props.getPosts;
    const sendMessageToID = props.sendMessageToID;
    const setSendMessageToID = props.setSendMessageToID;

    return(

        <div className="postCard">

            <div id="postTitle">
                 <h1>{post.title}</h1>
            </div>
            <div id="postDescription">
                <h3>{post.description}</h3>
            </div>
            <div className="postInfo">
                <p><strong>Price: </strong>{post.price}</p>
                <p><strong>Seller: </strong>{post.author.username}</p>
            </div>
            <div className="postInfo">
                <p><strong>Location: </strong>{post.location}</p>
                {post.willDeliver ? <p><strong>Will Deliver</strong></p> : <p><strong>Will Not Deliver</strong></p>}
            </div>

            {
                post.isAuthor ? 
                <div id="onlyAuthors">
                    {console.log(post)}
                    <div className="postInfo">
                        <button id="deleteButton" onClick={async () =>{
                            await deletePost(post._id);
                            getPosts();
                        }}>Delete Post</button> 
                    </div>
                    <div className="postInfo">
                        <strong>Messages: </strong>{post.messages.length 
                        ? post.messages.map((message, idx) => {
                            return (<div id='message' key={"message idx: " + idx}><p><strong>{(idx+1) + ": " }</strong>{message.content}</p>
                                <p><strong>From: </strong>{message.fromUser.username}</p>
                            </div>)
                        })
                        : "none"
                        } 
                    </div>
                </div>
                
                : <div className="postInfo"><button onClick={() => {
                    if (sendMessageToID === post._id) {
                        setSendMessageToID("")
                    }
                    else {
                        setSendMessageToID(post._id)
                    }
                }}>Send Message</button></div>
            }

        </div>


    )

}

export default PostCard