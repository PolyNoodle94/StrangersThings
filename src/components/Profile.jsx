import React, { useEffect, useState } from "react"

import { AddPost, PostCard, SendMessageForm, MessageCard } from "./"

import { fetchUserData } from "../api-adapters"

const Profile = (props) => {


    //Make getUserData here 
    //Make state variable userPosts and userMessages
    const [userPosts, setUserPosts] = useState([])
    const [allMessages, setAllMessages] = useState([])
    const [userObject, setUserObject] = useState({})
    const [selectedDisplay, setSelectedDisplay] = useState("userPosts")

    const sendMessageToID = props.sendMessageToID;
    const setSendMessageToID = props.setSendMessageToID;
    const postTitle = props.postTitle;
    const setPostTitle = props.setPostTitle;

    const isLoggedIn = props.isLoggedIn

    const getUserData = async () => {

        try{

            let result = await fetchUserData();
            setUserPosts(result.posts)
            setAllMessages(result.messages)
            setUserObject(result)

        }catch(error) {

            console.log(error)

        }

    }

    useEffect(() => {
        
        getUserData();

    }, [])

    return (
        <div id = "home">
            <div className="contentDisplay">

                {/*Posts by User */}
                {
                    selectedDisplay === "userPosts" && <div>
                        {
                            
                            userPosts.slice(0).reverse().map((post, idx) => {
                                return(
                                    post.active && <PostCard key={`userPosts idx: ` + idx} post={post} getUserData={getUserData} isLoggedIn={isLoggedIn}></PostCard>
                                )
                            }) 
                        }
                    </div>
                }

                {/*Sent by User */}
                {
                    selectedDisplay === "sentMessages" && <div>
                        {
                            allMessages.filter((message) =>{
                                return (userObject.username === message.fromUser.username)
                            }).slice(0).reverse().map((message, idx) => {
                                return <MessageCard key={`allMessages Sent idx: ` + idx} message={message} sendMessageToID={sendMessageToID} setSendMessageToID={setSendMessageToID}  setPostTitle={setPostTitle}/>
                            }) 
                        }
                    </div>
                }

                {/*Sent to User */}
                {
                    selectedDisplay === "receivedMessages" && <div>
                        {
                            allMessages.filter((message) =>{
                                return (userObject.username !== message.fromUser.username)
                            }).slice(0).reverse().map((message, idx) => {
                                return <MessageCard key={`allMessages Received idx: ` + idx} message={message} sendMessageToID={sendMessageToID} setSendMessageToID={setSendMessageToID}/>
                            }) 
                        }

                    </div>
                }
            </div>                  
            
            
                
            <div id="formContainer">
                <div className="submissionForm" id="selector">
                    <select onChange={(evt) => {

                        setSelectedDisplay(evt.target.value)

                    }}>
                        <option value="userPosts">User Posts</option>
                        <option value="sentMessages">Messages Sent</option>
                        <option value="receivedMessages">Messages Received</option>
                    </select>
                </div>
                <AddPost getUserData={getUserData}></AddPost>
                {
                    (sendMessageToID && <SendMessageForm sendMessageToID={sendMessageToID} postTitle={postTitle} getUserData={getUserData}/>)
                    
                }
            </div>
                
        </div>


    )



}

export default Profile