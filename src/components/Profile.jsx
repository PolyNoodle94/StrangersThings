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

    const sendMessageToID = props.sendMessageToID
    const setSendMessageToID = props.setSendMessageToID

    const isLoggedIn = props.isLoggedIn

    const getPosts = props.getPosts

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

        <div>
            <div id = "home">
                <div className="contentDisplay">
                    <div className="submissionForm">
                        <select id="selector" onChange={(evt) => {

                            setSelectedDisplay(evt.target.value)

                        }}>
                            <option value="userPosts">User Posts</option>
                            <option value="sentMessages">Messages Sent</option>
                            <option value="receivedMessages">Messages Received</option>
                        </select>
                    </div>

                    {/*Posts by User */}
                    {
                        selectedDisplay === "userPosts" && <div>
                            {
                                
                                userPosts.map((post, idx) => {
                                    return(
                                        <PostCard key={`userPosts idx: ` + idx} post={post} getUserData={getUserData} sendMessageToID={sendMessageToID} setSendMessageToID={setSendMessageToID} isLoggedIn={isLoggedIn}></PostCard>
                                    )
                                }) 
                            }
                        </div>
                    }

                    {/*Sent by User */}
                    {
                        selectedDisplay === "sentMessages" && <div className="contentDisplay">
                            {
                                allMessages.filter((message) =>{
                                    return (userObject.username === message.fromUser.username)
                                }).map((message, idx) => {
                                    return <MessageCard key={`allMessages Sent idx: ` + idx} message={message}/>
                                }) 
                            }
                        </div>
                    }

                    {/*Sent to User */}
                    {
                        selectedDisplay === "receivedMessages" && <div className="contentDisplay">
                            {
                                allMessages.filter((message) =>{
                                    return (userObject.username !== message.fromUser.username)
                                }).map((message, idx) => {
                                    return <MessageCard key={`allMessages Received idx: ` + idx} message={message}/>
                                }) 
                            }

                        </div>
                    }
                </div>                  
                
                
                    
                <div id="formContainer">
                    <AddPost getPosts={getPosts}></AddPost>
                    {
                        (sendMessageToID && <SendMessageForm sendMessageToID={sendMessageToID}/>)
                        
                    }
                </div>
                    

                

            </div>



        </div>


    )



}

export default Profile