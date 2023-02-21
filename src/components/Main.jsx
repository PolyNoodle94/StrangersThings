import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Posts, Login, Profile, Register } from "./"

import { fetchAllPosts } from "../api-adapters";

import { testMethod1 } from "../api-adapters";


const Main = () => {

    const [allPosts, setAllPosts] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    // const [jsonWebToken, setJSONWebToken] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

   
    
    


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
                    <Route exact path="/" element={<Posts allPosts={allPosts} setAllPosts={setAllPosts} getPosts={getPosts}/>}/>
                    <Route path="/register" element={<Register username={username} setUsername={setUsername} password={password} setPassword={setPassword} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}/>
                    <Route path="/login" element={<Login username={username} setUsername={setUsername} password={password} setPassword={setPassword} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
                    <Route path="/profile" element={<Profile allPosts={allPosts} setAllPosts={setAllPosts} getPosts={getPosts}/>}/>
                </Routes>
            </div>

        </div>
    )
}


export default Main