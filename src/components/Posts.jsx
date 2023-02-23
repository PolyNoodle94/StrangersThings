import React, { useState, useEffect } from "react"
import { AddPost, PostCard } from "./"
import { Link } from "react-router-dom"

const Posts = (props) => {
    const getPosts = props.getPosts;
    const allPosts = props.allPosts;

    useEffect(() => {

        getPosts()

    }, [])

    // need to check if running getPosts inside Profile would cause this to run also
    return(

        <div id = "home">


            <div id="postDisplay">

                {
                    allPosts.map((post, idx) => {
                        
                        console.log(post.title)
                        console.log(post.isAuthor)

                        return(
                
                            <PostCard key={`allPosts idx: ` + idx} post={post}></PostCard>
                        )
                
                    })
                
                }

                
            
            </div>

            <div id="newPostForm">

                <AddPost allPosts={allPosts} getPosts={getPosts}></AddPost>

            </div>

        </div>

        
    )
    
}

export default Posts




















