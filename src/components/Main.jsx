import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Posts, Login, Profile, Register, AddPost } from "./"

import { fetchAllPosts, fetchUserData } from "../api-adapters";

import { testMethod1 } from "../api-adapters";


const Main = () => {

    const [allPosts, setAllPosts] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [sendMessageToID, setSendMessageToID] = useState("");
    const [postTitle, setPostTitle] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token")); 

    const getPosts = async () => {
        try{

            let result = await fetchAllPosts();
            setAllPosts(result)

        }catch (error) {
            console.log(error)
        }

    }

    return(
        <div id="main">

            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <div id="container">
                <Routes>
                    <Route exact path="/" element={<Posts allPosts={allPosts} setAllPosts={setAllPosts} getPosts={getPosts} isLoggedIn={isLoggedIn} sendMessageToID={sendMessageToID} setSendMessageToID={setSendMessageToID} postTitle={postTitle} setPostTitle={setPostTitle}/>}/>
                    <Route path="/register" element={<Register username={username} setUsername={setUsername} password={password} setPassword={setPassword} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
                    <Route path="/login" element={<Login username={username} setUsername={setUsername} password={password} setPassword={setPassword} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
                    <Route path="/profile" element={<Profile username={username} isLoggedIn={isLoggedIn} sendMessageToID={sendMessageToID} setSendMessageToID={setSendMessageToID} postTitle={postTitle} setPostTitle={setPostTitle}/>}/>
                </Routes>
            </div>

        </div>
    )
}


export default Main