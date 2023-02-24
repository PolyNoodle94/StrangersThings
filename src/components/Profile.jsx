import React, { useEffect, useState } from "react"

import { AddPost, PostCard, SendMessageForm } from "./"

import { fetchUserData } from "../api-adapters"

const Profile = (props) => {


    //Make getUserData here 
    //Make state variable userPosts and userMessages
    const [userPosts, setUserPosts] = useState([])
    const [allMessages, setAllMessages] = useState([])
    const [userObject, setUserObject] = useState({})

    const sendMessageToID = props.sendMessageToID
    const setSendMessageToID = props.setSendMessageToID

    const isLoggedIn = props.isLoggedIn

    const getPosts = props.getPosts

    const selectedDisplay = ''

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

            {console.log(userObject)}
            {console.log("seperation")}
            {console.log(userObject.messages)}
            {console.log("seperation")}
            {console.log(userObject._id)}
            {console.log("seperation")}
            {console.log(userObject.username)}
            {/* {console.log("seperation")}
            {console.log(userObject.messages[0]["fromUser"]["username"])} */}

            <div className="submissionForm">
                <select id="selector" onChange={(evt) => {

                    selectedDisplay = evt.target.value

                }}>
                    <option value="userPosts">Posts: User</option>
                    <option value="sentMessages">Messages Sent</option>
                    <option value="receivedMessages">Messages Received</option>
                </select>
            </div>

                <div id = "home">
                    {/*Posts by User */}
                    <div className="contentDisplay">
                        {
                            
                            userPosts.map((post, idx) => {
                                return(
                                    <PostCard key={`userPosts idx: ` + idx} post={post} getUserData={getUserData} sendMessageToID={sendMessageToID} setSendMessageToID={setSendMessageToID} isLoggedIn={isLoggedIn}></PostCard>
                                )
                            }) 
                        }
                    </div>
                    
                    
                    {/*Sent by User */}
                    <div className="contentDisplay">
                        {
                            allMessages.map((message, idx) => {

                                let booleanValue = (userObject.username === message.fromUser.username)
                                if (booleanValue) {

                                    return(
                                        <h1 key={`allMessages Sent idx: ` + idx}>{`${booleanValue}`}</h1>
                                    )

                                } else {
                                    return (<h1 key={`allMessages Sent idx: ` + idx}>Misery</h1>)
                                }

                            }) 
                        }
                    </div>
                    

                    {/*Sent to User */}
                    <div className="contentDisplay">

                        {
                            allMessages.map((message, idx) => {

                                let booleanValue = (userObject.username !== message.fromUser.username)
                                if (booleanValue) {

                                    return(
                                        <h1 key={`allMessages Sent idx: ` + idx}>{`${booleanValue}`}</h1>
                                    )

                                } else {
                                    return (<h1 key={`allMessages Sent idx: ` + idx}>Misery</h1>)
                                }

                            }) 
                        }

                    </div>
                    
                    
                        
                    <div id="formContainer">
                        <div id="newPostForm">

                            <AddPost getPosts={getPosts}></AddPost>

                        </div>
                        {
                            (sendMessageToID && <SendMessageForm sendMessageToID={sendMessageToID}/>)
                            
                        }
                    </div>
                    

                

            </div>



        </div>


    )



}

export default Profile