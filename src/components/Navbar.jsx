import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {

    const isLoggedIn = props.isLoggedIn
    const setIsLoggedIn = props.setIsLoggedIn

    return(
        <div id="navbar">

            <Link to="/"><button>Posts Cunt!</button></Link>
            <Link to="profile"><button>Profile Motherfucker!</button></Link>
            
            {
                isLoggedIn ? <button onClick={()=>{ 
                    setIsLoggedIn(false)
                    window.location.reload(true);
                }}>Log Out</button> : <Link to="login"><button>Login Bitch!</button></Link>
            }
            

        </div>
    )

}

export default Navbar