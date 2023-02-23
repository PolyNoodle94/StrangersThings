import React from 'react'
// import { deletePost } from '../api-adapters'

const PostCard = (props) => {

    const post = props.post

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
                    <div className="postInfo">
                        <button id="deleteButton">Delete Post</button> 
                    </div>
                    {/* <div className="postInfo">
                        <p><strong>Messages: </strong>{post.messages.length ? 1 : 2 } </p>
                    </div> */}
                </div>
                
                : <div className="postInfo"><button>Send Message</button></div>
            }

        </div>


    )

}

export default PostCard