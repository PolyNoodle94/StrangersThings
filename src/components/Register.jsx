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

    const navigate = useNavigate();

    

    return (
        <div className="registerPage" onSubmit={async (event) => {

            event.preventDefault();
            
            // setJSONWebToken( await registerNewUser(username, password))
            let result = await registerNewUser(username, password);
            await setJSONWebToken(result);

            //make it so that theyre automatically logged in and take them to the posts page

            navigate("/", {replace: true})
            

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