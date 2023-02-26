import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = (props) => {

    const isLoggedIn = props.isLoggedIn
    const setIsLoggedIn = props.setIsLoggedIn

    const navigate = useNavigate();

    return(
        <div id="navbar">

            <Link to="/"><button className="navButton">Posts</button></Link>
            { isLoggedIn && <Link to="profile"><button className="navButton">Profile</button></Link> }
            
            {
                isLoggedIn ? <button onClick={()=>{ 
                    setIsLoggedIn(false)
                    localStorage.removeItem("token")
                    localStorage.removeItem("username")
                    navigate("/", {replace: true}) 
                    window.location.reload(true);
                }} className="navButton">Log Out</button> : <Link to="login"><button className="navButton">Login</button></Link>
            }

            {isLoggedIn && <button className='navButton'>
                <strong>User: </strong>{localStorage.getItem("username")}
            </button>}

        </div>
    )

}

export default Navbar