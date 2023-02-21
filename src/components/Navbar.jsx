import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {

    const isLoggedIn = props.isLoggedIn
    const setIsLoggedIn = props.setIsLoggedIn
    const jsonWebToken = props.jsonWebToken

    return(
        <div id="navbar">

            <Link to="/"><button className="navButton">Posts</button></Link>
            <Link to="profile"><button className="navButton">Profile</button></Link>
            
            {
                isLoggedIn ? <button onClick={()=>{ 
                    setIsLoggedIn(false)
                    window.location.reload(true);
                }} className="navButton">Log Out</button> : <Link to="login"><button className="navButton">Login</button></Link>
            }
            
            <button className="navButton" onClick={()=> {
                console.log(jsonWebToken);
            }}>print token</button>

        </div>
    )

}

export default Navbar