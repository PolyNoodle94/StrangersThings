import React, { useState, useEffect } from "react"
import { AddPost, PostCard, SendMessageForm, SearchForm } from "./"
import { Link } from "react-router-dom"

const Posts = (props) => {
    const getPosts = props.getPosts;
    const allPosts = props.allPosts;
    const isLoggedIn = props.isLoggedIn
    const sendMessageToID = props.sendMessageToID
    const setSendMessageToID = props.setSendMessageToID

    const [searchTitle, setSearchTitle] = useState("")
    const [searchSeller, setSearchSeller] = useState("")

    useEffect(() => {

        getPosts()

    }, [])

    return(

        <div id = "home">

            <div className="contentDisplay">

                {
                    allPosts.map((post, idx) => {
                        if (post.title.toLowerCase().includes(searchTitle.toLowerCase())
                            && post.author.username.toLowerCase().includes(searchSeller.toLowerCase())) {
                            return(
                                <PostCard key={`allPosts idx: ` + idx} post={post} getPosts={getPosts} sendMessageToID={sendMessageToID} setSendMessageToID={setSendMessageToID} isLoggedIn={isLoggedIn}></PostCard>
                            )
                        }
                
                    })
                
                }

                
            
            </div>
            {
                isLoggedIn && 
            <div id="formContainer">
                <SearchForm setSearchTitle={setSearchTitle} setSearchSeller={setSearchSeller} />
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




















