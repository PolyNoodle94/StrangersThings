import React from 'react'
import { deletePost } from '../api-adapters'

const PostCard = (props) => {

    //Declaring state values from props 
    const isLoggedIn = props.isLoggedIn
    const sendMessageToID = props.sendMessageToID;
    const setSendMessageToID = props.setSendMessageToID;
    const setPostTitle = props.setPostTitle;

    //Declaring variables from props
    const post = props.post;
    const getPosts = props.getPosts;
    const getUserData = props.getUserData;

    return(

        <div className="postCard">

            {/* Populating information about the post into postCard from the post variable */}
            <div id="postTitle">
                 <h1>{post.title}</h1>
            </div>
            <div id="postDescription">
                <h3>{post.description}</h3>
            </div>
            <div className="postInfo">
                <p><strong>Price: </strong>{post.price}</p>
                {/* While it may look like a useless condition, .isAuthor is a property returned from an api call which gets posts, but it does not exist in 
                the users/me api call that fetches just user data. Because of this, we need the "Seller" info piece to only be displayed on the Posts tab, and not
                the Profile tab. */}
                {(post.isAuthor === false || post.isAuthor === true) && <p><strong>Seller: </strong>{post.author.username}</p>}
            </div>
            <div className="postInfo">
                <p><strong>Location: </strong>{post.location}</p>
                {post.willDeliver ? <p><strong>Will Deliver</strong></p> : <p><strong>Will Not Deliver</strong></p>}
            </div>

                {/* Condition rendering depending on whether the author of the post is the user, and whether the user is logged in */}
            {
                // If we are the author of the post, add the delete button, and if we have any messages, display the messages. If no messages have been sent to that post, display none
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
                
                // If the user is not the author, but is logged in, add the send message button to the post.
                : (isLoggedIn && 
                <div className="postInfo">
                    <button onClick={() => { 
                        // If the user clicks the send message button twice, reset states related to sending messages, and close the form. Else, open the form and store the related info
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