import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = (props) => {

    const isLoggedIn = props.isLoggedIn
    const setIsLoggedIn = props.setIsLoggedIn

    const navigate = useNavigate();

    return(
        <div id="navbar">

            {/* Posts button should always be available, so no ternary or && necessary*/}
            <Link to="/"><button className="navButton">Posts</button></Link>

            {/* Profile should only be accessible whenever a user is logged in, thus the conditional rendering ($$) operator  */}
            { isLoggedIn && <Link to="profile"><button className="navButton">Profile</button></Link> }
            
            {/* Depending on whether the user is logged in, the button should appear as Login or Logout, thus the ternary operator with isLoggedIn as its condition */}
            {
                // If logged in, show log out button, and onClick change setIsLoggedIn to false, remove localStorage items, take user back to main, and reload the website in order to reset state
                // If not logged in, show login button, which on click takes them to /login page
                isLoggedIn ? <button onClick={()=>{ 
                    setIsLoggedIn(false)
                    localStorage.removeItem("token")
                    localStorage.removeItem("username")
                    navigate("/", {replace: true}) 
                    window.location.reload(true);
                }} className="navButton">Log Out</button> 
                : <Link to="login"><button className="navButton">Login</button></Link>
            }

            {/* Dispaly current user if user is logged in */}
            {isLoggedIn && <button className='navButton'>
                <strong>User: </strong>{localStorage.getItem("username")}
            </button>}

        </div>
    )

}

export default Navbar