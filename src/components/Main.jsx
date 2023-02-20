import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom"
import { Navbar } from "./"

import { fetchAllPosts } from "../api-adapters";

const Main = () => {

    let [allPosts, setAllPosts] = useState([])

    const getPosts = async () => {

        try{

            let result = await fetchAllPosts();
            setAllPosts(result)

        }catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {

        getPosts()

    }, [])

    return(
        <div id="main">

            <Navbar />

           

            <Outlet />

        </div>
    )
}

export default Main