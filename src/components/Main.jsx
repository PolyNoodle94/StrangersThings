import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Navbar, Posts, Login, Profile, Register } from "./"


//Done in this Component: 
//Organized Route and Component props 
//deleted testMethod1 api Method
//deleted AddPost from Component import list
//deleted fetchUserData from import list
//deleted useEffect from import list

//Cleaning process (Components):
//Main, Navbar, Posts, Profile, Register, Login

//Cleaned:
//Main, Navbar, Posts, Profile

const Main = () => {

    //State declaration
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [sendMessageToID, setSendMessageToID] = useState("");
    const [postTitle, setPostTitle] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token")); 
 
    

    return(
        <div id="main">

            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <div id="container">
                <Routes>
                    <Route exact path="/" element={
                        <Posts 
                            isLoggedIn={isLoggedIn} 
                            sendMessageToID={sendMessageToID} setSendMessageToID={setSendMessageToID} 
                            postTitle={postTitle} setPostTitle={setPostTitle}/>
                        }/>

                    <Route path="/register" element={
                        <Register 
                            username={username} setUsername={setUsername} 
                            password={password} setPassword={setPassword} 
                            isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                        }/>

                    <Route path="/login" element={
                        <Login 
                            username={username} setUsername={setUsername} 
                            password={password} setPassword={setPassword} 
                            isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                        }/>

                    <Route path="/profile" element={
                        <Profile 
                            username={username} 
                            isLoggedIn={isLoggedIn} 
                            sendMessageToID={sendMessageToID} setSendMessageToID={setSendMessageToID} 
                            postTitle={postTitle} setPostTitle={setPostTitle}/>
                        }/>
                </Routes>
            </div>

        </div>
    )
}


export default Main