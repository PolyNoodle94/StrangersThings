import React from 'react'

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

            {/* {
                post.isAuthor ? 
                <div></div>
                : 
            } */}

        </div>


    )

}

export default PostCard