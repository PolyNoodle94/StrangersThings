import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return(
        <div id="navbar">

            <Link to="/"><button>Posts Cunt!</button></Link>
            <Link to="profile"><button>Profile Motherfucker!</button></Link>
            <Link to="login"><button>Login Bitch!</button></Link>

        </div>
    )

}

export default Navbar