import React, { useState, useEffect } from "react"
import { AddPost, PostCard, SendMessageForm } from "./"
import { Link } from "react-router-dom"

const Posts = (props) => {
    const getPosts = props.getPosts;
    const allPosts = props.allPosts;
    const isLoggedIn = props.isLoggedIn
    const sendMessageToID = props.sendMessageToID
    const setSendMessageToID = props.setSendMessageToID

    useEffect(() => {

        getPosts()

    }, [])

    // need to check if running getPosts inside Profile would cause this to run also
    return(

        <div id = "home">


            <div className="contentDisplay">

                {
                    allPosts.map((post, idx) => {

                        return(
                
                            <PostCard key={`allPosts idx: ` + idx} post={post} getPosts={getPosts} sendMessageToID={sendMessageToID} setSendMessageToID={setSendMessageToID} isLoggedIn={isLoggedIn}></PostCard>
                        )
                
                    })
                
                }

                
            
            </div>
            {
                isLoggedIn && 
            <div id="formContainer">
                <div id="newPostForm">

                    <AddPost getPosts={getPosts}></AddPost>

                </div>
                {
                    (sendMessageToID && <SendMessageForm sendMessageToID={sendMessageToID}/>)
                    
                }
            </div>
            }   

        </div>

        
    )
    
}

export default Posts




















