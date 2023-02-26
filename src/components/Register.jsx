import React from "react"
import { registerNewUser } from "../api-adapters"
import { Link, useNavigate } from 'react-router-dom'

const Register = (props) => {

    //Declares state passed down from props 
    const username = props.username
    const setUsername = props.setUsername
    const password = props.password
    const setPassword = props.setPassword
    const setIsLoggedIn = props.setIsLoggedIn

    //Used to send the user to the posts page upon successful register
    const navigate = useNavigate();


    return (
        // Stores a form which asks the user for two inputs which are then sent to the api, and upon success, saves their data into the database and returns a JSON Web Token used to access
        //      and interact with the rest of the website
        <div className="entryPage" onSubmit={async (event) => {

            event.preventDefault();
            
            try{
                
                let result = await registerNewUser(username, password);
                if (result !== undefined) {
                    setIsLoggedIn(true)
                    navigate("/", {replace: true})  
                    localStorage.setItem("token", result) 
                    localStorage.setItem("username", username) 

                    
                } else {
                    console.log("Already Registered")
                }

            }catch (error) {
                console.log(error)
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
                
                <input className="butt" type="submit" value="Register" ></input>

                <Link to="../login" ><button className="butt">Back to login</button></Link>


            </form>
        </div>
    )
}

export default Register