import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Posts = (props) => {
    const getPosts = props.getPosts;
    const allPosts = props.allPosts;

    useEffect(() => {

        getPosts()

    }, [])

    // need to check if running getPosts inside Profile would cause this to run also
    return(

        <div id="postDisplay">

            <Link to="addPost"><button id="newPostButton">
                Add New Post
            </button></Link>
            {
                allPosts.map((post, idx) => {
            
                    return(
            
                        <div key={`allPosts idx: ` + idx} className="postCard">
            
                            {/* <h1>Location: {post.location}</h1>
                            <h1>willDeliver: {`${post.willDeliver}`}</h1>
                            <h1>Messages: {`${post.messages}`}</h1>
                            <h1>Active: {`${post.active}`}</h1>
                            <h1>Post Id: {post._id}</h1>
                            <h1>Author Id: {post.author._id}</h1>
                            <h1>Author Username: {post.author.username}</h1>
                            <h1>Cohort: {post.cohort}</h1>
                            <h1>Title: {post.title}</h1>
                            <h1>Description: {post.description}</h1>
                            <h1>Price: {post.price}</h1>
                            <h1>createdAt: {post.createdAt}</h1>
                            <h1>updatedAt: {post.updatedAt}</h1>
                            <h1>isAuthor: {`${post.isAuthor}`}</h1> */}


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
            
                        </div>
            
                    )
            
                })
            
            }
        
        </div>

        
    )
    
}

export default Posts




















