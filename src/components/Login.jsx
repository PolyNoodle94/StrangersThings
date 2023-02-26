import React from 'react'
import { logUserIn } from '../api-adapters';
import { Link, useNavigate } from 'react-router-dom'

const Login = (props) => {

    //Declares state passed down from props 
    const username = props.username;
    const setUsername = props.setUsername
    const password = props.password; 
    const setPassword = props.setPassword
    const setIsLoggedIn = props.setIsLoggedIn

    //used to navigate the user back to the posts page after they login or register successfully 
    const navigate = useNavigate()

    return(

        
        // Contains a form asking the user to login by providing a username and password
        // upon successful login, the user receives a JSON Web Token stored in local storage, has their username stored in localStorage, is sent to the Posts page, and is able to
        //      interact with the page as a logged in user. 
        <div className="entryPage" onSubmit={async (event) => {

            event.preventDefault();
            let result = await logUserIn(username, password) 
            if (result) {

                setIsLoggedIn(true)
                localStorage.setItem("token", result)
                localStorage.setItem("username", username)
                navigate("/", {replace: true})  

            } else {
                alert("Invalid login credentials")
            }



        }}>

            <form className="submissionForm">
                <label className="formLabel">
                    Username: 
                    <input type="text" value={username} name="username" onChange={(event)=>{

                        setUsername(event.target.value)

                    }}></input>
                </label>

                <label className="formLabel">
                    Password:  
                    <input type="text" value={password} name="password" onChange={(event)=>{

                        setPassword(event.target.value)

                    }}></input>
                </label>
                
                <input className="butt" type="submit" value="Log in" ></input>

                <Link to="../register" ><button className="butt">Click to Register! </button></Link>


            </form>
        </div>
    )

}

export default Login