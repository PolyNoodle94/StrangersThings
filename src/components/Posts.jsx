import React, { useState, useEffect } from "react"

const Posts = (props) => {
    const getPosts = props.getPosts;
    const allPosts = props.allPosts;

    useEffect(() => {

        getPosts()

    }, [])

    // need to check if running getPosts inside Profile would cause this to run also
    return(

        <div id="postCard">

        {
        
        
            allPosts.map((post, idx) => {
        
                return(
        
                    <div key={`allPosts idx: ` + idx}>
        
                        <h1>Location: {post.location}</h1>
                        <h1>willDeliver: {`${post.willDeliver}`}</h1>
                        {/* <h1>Messages: {`${post.messages}`}</h1> */}
                        {/* <h1>Active: {`${post.active}`}</h1>
                        <h1>Post Id: {post._id}</h1>
                        <h1>Author Id: {post.author._id}</h1> */}
                        <h1>Author Username: {post.author.username}</h1>
                        {/* <h1>Cohort: {post.cohort}</h1> */}
                        <h1>Title: {post.title}</h1>
                        <h1>Description: {post.description}</h1>
                        <h1>Price: {post.price}</h1>
                        {/* <h1>createdAt: {post.createdAt}</h1> */}
                        {/* <h1>updatedAt: {post.updatedAt}</h1>
                        <h1>isAuthor: {`${post.isAuthor}`}</h1> */}

                        
        
                        <br></br>
        
                    </div>
        
                )
        
            })
        
        }
        
        </div>

        
    )
    
}

export default Posts




















