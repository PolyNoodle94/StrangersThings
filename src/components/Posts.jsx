import React, { useState, useEffect } from "react"
import { AddPost, PostCard, SendMessageForm, SearchForm } from "./"

import { fetchAllPosts } from "../api-adapters";

const Posts = (props) => {

    //State declaration from props passed down
    const [allPosts, setAllPosts] = useState([])
    const isLoggedIn = props.isLoggedIn;
    const sendMessageToID = props.sendMessageToID;
    const setSendMessageToID = props.setSendMessageToID;
    const postTitle = props.postTitle;
    const setPostTitle = props.setPostTitle;

    //State created in Posts for the searchBar 
    const [searchTitle, setSearchTitle] = useState("")
    const [searchSeller, setSearchSeller] = useState("")

    //Method created for populating allPosts with information from api 
    const getPosts = async () => {
        try{

            let result = await fetchAllPosts();
            setAllPosts(result)

        }catch (error) {
            console.log(error)
        }

    }

    //On page render, populate allPosts state with posts in api 
    useEffect(() => {

        getPosts()

    }, [])

    return(

        <div id="home">

            <div className="contentDisplay">

                {
                    // slice.reverse sorts a shallow copy of allPosts by new
                    //  the if statement is used for searching for posts
                    // returns a PostCard element sorted by new and with the filters in the search bar 
                    allPosts.slice(0).reverse().map((post, idx) => {
                        if (post.title.toLowerCase().includes(searchTitle.toLowerCase())
                            && post.author.username.toLowerCase().includes(searchSeller.toLowerCase())) {
                            return(
                                <PostCard 
                                    key={`allPosts idx: ` + idx} 
                                    post={post} 
                                    getPosts={getPosts} 
                                    sendMessageToID={sendMessageToID} setSendMessageToID={setSendMessageToID} 
                                    isLoggedIn={isLoggedIn} 
                                    setPostTitle={setPostTitle} 
                                />
                            )
                        }
                
                    })
                
                }

                
            
            </div>

            {/* Div containing user interaction forms, such as create new post, send message, search posts */}
            {
            <div id="formContainer">
                {/* Search form should always appear regardless of isLoggedIn value, so no conditional rendering necessary */}
                <SearchForm 
                    setSearchTitle={setSearchTitle} 
                    setSearchSeller={setSearchSeller} 
                />

                {/* when the user is logged in, give them the optio of adding a new post by rendering the AddPost component */}
                { isLoggedIn && <AddPost getPosts={getPosts}></AddPost> }

                {/* when the user is logged in, and has clicked the Send Message button on a post, render the SendMessageForm component */}
                { isLoggedIn && sendMessageToID && <SendMessageForm sendMessageToID={sendMessageToID} setSendMessageToID={setSendMessageToID} postTitle={postTitle}/> }
            </div>
            }   

        </div>

        
    )
    
}

export default Posts




















