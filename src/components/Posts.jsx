import React, { useState, useEffect } from "react"
import { AddPost, PostCard, SendMessageForm, SearchForm } from "./"
import { Link } from "react-router-dom"

const Posts = (props) => {
    const getPosts = props.getPosts;
    const allPosts = props.allPosts;
    const isLoggedIn = props.isLoggedIn;
    const sendMessageToID = props.sendMessageToID;
    const setSendMessageToID = props.setSendMessageToID;
    const postTitle = props.postTitle;
    const setPostTitle = props.setPostTitle;

    const [searchTitle, setSearchTitle] = useState("")
    const [searchSeller, setSearchSeller] = useState("")

    useEffect(() => {

        getPosts()

    }, [])

    return(

        <div id="home">

            <div className="contentDisplay">

                {
                    allPosts.slice(0).reverse().map((post, idx) => {
                        if (post.title.toLowerCase().includes(searchTitle.toLowerCase())
                            && post.author.username.toLowerCase().includes(searchSeller.toLowerCase())) {
                            return(
                                <PostCard key={`allPosts idx: ` + idx} post={post} getPosts={getPosts} sendMessageToID={sendMessageToID} setSendMessageToID={setSendMessageToID} isLoggedIn={isLoggedIn} setPostTitle={setPostTitle}></PostCard>
                            )
                        }
                
                    })
                
                }

                
            
            </div>
            {
            <div id="formContainer">
                <SearchForm setSearchTitle={setSearchTitle} setSearchSeller={setSearchSeller} />

                { isLoggedIn && <AddPost getPosts={getPosts}></AddPost> }

                { isLoggedIn && sendMessageToID && <SendMessageForm sendMessageToID={sendMessageToID} postTitle={postTitle}/> }
            </div>
            }   

        </div>

        
    )
    
}

export default Posts




















