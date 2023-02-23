import React, { useState, useEffect } from "react"
import { AddPost, PostCard, SendMessageForm } from "./"
import { Link } from "react-router-dom"

const Posts = (props) => {
    const getPosts = props.getPosts;
    const allPosts = props.allPosts;
    const [sendMessageToID, setSendMessageToID] = useState("");

    useEffect(() => {

        getPosts()

    }, [])

    // need to check if running getPosts inside Profile would cause this to run also
    return(

        <div id = "home">


            <div id="postDisplay">

                {
                    allPosts.map((post, idx) => {

                        return(
                
                            <PostCard key={`allPosts idx: ` + idx} post={post} getPosts={getPosts} sendMessageToID={sendMessageToID} setSendMessageToID={setSendMessageToID}></PostCard>
                        )
                
                    })
                
                }

                
            
            </div>
            <div id="formContainer">
                <div id="newPostForm">

                    <AddPost allPosts={allPosts} getPosts={getPosts}></AddPost>

                </div>
                {
                    (sendMessageToID && <SendMessageForm sendMessageToID={sendMessageToID}/>)
                    // : <p>test2</p>
                }
            </div>

        </div>

        
    )
    
}

export default Posts




















