import React from 'react'
import { deletePost } from '../api-adapters'

const PostCard = (props) => {

    const post = props.post;
    const getPosts = props.getPosts;
    const getUserData = props.getUserData;
    const isLoggedIn = props.isLoggedIn
    const sendMessageToID = props.sendMessageToID;
    const setSendMessageToID = props.setSendMessageToID;
    const setPostTitle = props.setPostTitle;

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
                {(post.isAuthor === false || post.isAuthor === true) && <p><strong>Seller: </strong>{post.author.username}</p>}
            </div>
            <div className="postInfo">
                <p><strong>Location: </strong>{post.location}</p>
                {post.willDeliver ? <p><strong>Will Deliver</strong></p> : <p><strong>Will Not Deliver</strong></p>}
            </div>

            {
                (post.isAuthor !== false) ? 
                <div id="onlyAuthors">
                    <div className="postInfo">
                        <button id="deleteButton" onClick={async () =>{
                            await deletePost(post._id);
                            if (getPosts) {
                                getPosts();
                            }
                            else {
                                getUserData();
                            }
                        }}>Delete Post</button> 
                    </div>
                    <div id="messageDisplayDiv" className="postInfo">
                        
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
                
                : (isLoggedIn && 
                <div className="postInfo">
                    <button onClick={() => {
                        //Consider setting sendMessageToId to "" on the onSubmit for the message form 
                        if (sendMessageToID === post._id) {
                            setSendMessageToID("")
                            setPostTitle("")
                        }
                        else {
                            setSendMessageToID(post._id)
                            setPostTitle(post.title)
                        }
                    }}>Send Message</button>
                </div>)
            }

        </div>


    )

}

export default PostCard