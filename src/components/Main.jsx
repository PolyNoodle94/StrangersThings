import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Posts, Login, Profile, Register } from "./"

import { fetchAllPosts } from "../api-adapters";

const Main = () => {

    const [allPosts, setAllPosts] = useState([])

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

            <Navbar />
            <div id="container">
                <Routes>
                    <Route exact path="/" element={<Posts allPosts={allPosts} setAllPosts={setAllPosts} getPosts={getPosts}/>}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>
                    <Route path="/profile" element={<Profile allPosts={allPosts} setAllPosts={setAllPosts} getPosts={getPosts}/>}/>
                </Routes>
            </div>

        </div>
    )
}

export default Main