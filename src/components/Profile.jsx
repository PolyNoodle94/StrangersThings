import React, { useEffect, useState } from "react"

import { AddPost, PostCard, SendMessageForm, MessageCard } from "./"

import { fetchUserData } from "../api-adapters"

const Profile = (props) => {


    //Declare state varibles 
    const [userPosts, setUserPosts] = useState([])
    const [allMessages, setAllMessages] = useState([])
    const [userObject, setUserObject] = useState({})
    const [selectedDisplay, setSelectedDisplay] = useState("userPosts")

    //Declare state variables passed down from props
    const sendMessageToID = props.sendMessageToID;
    const setSendMessageToID = props.setSendMessageToID;
    const postTitle = props.postTitle;
    const setPostTitle = props.setPostTitle;
    const isLoggedIn = props.isLoggedIn

    //Function that upon call fetches user data from the database using the api
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

    //Calls getUserData upon page render
    useEffect(() => {
        
        getUserData();

    }, [])

    return (
        // Displays both the contentDisplay section of the page as well as the form side of the page
        <div id = "home">

            {/* Depending on the value selected by the user on the dropdown selector, contentDisplay will either render Posts made by the user, messages sent by the user, 
                or messages sent to the user. We achieve this through conditional rendering (&&) */}
            <div className="contentDisplay">

                {/*Posts by User */}
                {
                    selectedDisplay === "userPosts" && <div>
                        {
                            // Initially sorts the array by new, and then checks if the post has been deleted. if it has, it doesnt display, and if it hasnt, it returns a PostCard
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
                            // Filters allMessages sent to and by the user, selects only those which are sent by the user, sorts them by new, and returns a MessageCard component
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
                            // Filters allMessages sent to and by the user, selects only those which are sent to the user, sorts them by new, and returns a MessageCard component
                            allMessages.filter((message) =>{
                                return (userObject.username !== message.fromUser.username)
                            }).slice(0).reverse().map((message, idx) => {
                                return <MessageCard key={`allMessages Received idx: ` + idx} message={message} sendMessageToID={sendMessageToID} setSendMessageToID={setSendMessageToID}/>
                            }) 
                        }

                    </div>
                }
            </div>                  
            
            
            {/* Contains all forms displayed on the Profile page */}
            <div id="formContainer">
                {/* Selector drop down element which takes a user input to decide what to display on the contentDisplay div */}
                <div className="submissionForm" id="selector">
                    <select onChange={(evt) => {

                        setSelectedDisplay(evt.target.value)

                    }}>
                        <option value="userPosts">User Posts</option>
                        <option value="sentMessages">Messages Sent</option>
                        <option value="receivedMessages">Messages Received</option>
                    </select>
                </div>
                
                {/* AddPost form */}
                <AddPost getUserData={getUserData}></AddPost>

                {/* If the user has clicked the send message button, bring up the send message form */}
                {
                    (sendMessageToID && <SendMessageForm sendMessageToID={sendMessageToID} setSendMessageToID={setSendMessageToID} postTitle={postTitle} getUserData={getUserData}/>)
                    
                }
            </div>
                
        </div>


    )



}

export default Profile