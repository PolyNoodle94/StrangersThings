import React from "react"
import { registerNewUser } from "../api-adapters"
import { Link, useNavigate } from 'react-router-dom'

const Register = (props) => {

    const username = props.username
    const setUsername = props.setUsername

    const password = props.password
    const setPassword = props.setPassword

    const jsonWebToken = props.jsonWebToken
    const setJSONWebToken = props.setJSONWebToken

    const setIsLoggedIn = props.setIsLoggedIn

    const navigate = useNavigate();

    

    return (
        <div className="registerPage" onSubmit={async (event) => {

            event.preventDefault();
            
            try{
                
                let result = await registerNewUser(username, password);
                if (result !== undefined) {
                    setJSONWebToken(result);
                    setIsLoggedIn(true)
                    navigate("/", {replace: true})  
                    localStorage.setItem("token", result) 
                    
                } else {
                    console.log("Already Registered")
                }

            }catch (error) {

                console.log(error)

            }


            



            //make it so that theyre automatically logged in and take them to the posts page
            

        }}>
            <form className="registerForm">
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