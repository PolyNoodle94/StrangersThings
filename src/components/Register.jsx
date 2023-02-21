import React from "react"
import { registerNewUser } from "../api-adapters"
import { Link, useNavigate } from 'react-router-dom'

const Register = (props) => {

    let username = props.username
    let setUsername = props.setUsername

    let password = props.password
    let setPassword = props.setPassword

    let jsonWebToken = props.jsonWebToken
    let setJSONWebToken = props.setJSONWebToken

    const navigate = useNavigate();

    

    return (
        <div className="registerPage" onSubmit={async (event) => {

            event.preventDefault();
            console.log(username)
            console.log(password)
            
            setJSONWebToken( await registerNewUser(username, password))

            console.log(jsonWebToken)

            //make it so that theyre automatically logged in and take them to the posts page

            // navigate("/", {replace: true})
            

        }}>
            <form className="registerForm">
                <label className="formLabel">
                    Username: 
                    <input type="text" value={username} name="username" onChange={(event)=>{

                        setUsername(event.target.value)
                        console.log('this is in register')

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