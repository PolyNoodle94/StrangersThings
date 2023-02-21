import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {

    const isLoggedIn = props.isLoggedIn
    const setIsLoggedIn = props.setIsLoggedIn
    const jsonWebToken = props.jsonWebToken

    return(
        <div id="navbar">

            <Link to="/"><button>Posts</button></Link>
            <Link to="profile"><button>Profile</button></Link>
            
            {
                isLoggedIn ? <button onClick={()=>{ 
                    setIsLoggedIn(false)
                    window.location.reload(true);
                }}>Log Out</button> : <Link to="login"><button>Login</button></Link>
            }
            
            <button className="butt" onClick={()=> {
                console.log(jsonWebToken);
            }}>print token</button>

        </div>
    )

}

export default Navbar