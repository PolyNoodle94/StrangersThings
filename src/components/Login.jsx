import React from 'react'
import { Link, Navigate } from 'react-router-dom'

const Login = (props) => {
    const username = props.username;
    const password = props.password; 
    const setUsername = props.setUsername
    const setPassword = props.setPassword
    const setIsLoggedIn = props.setIsLoggedIn

    return(
        <div className="loginPage" onSubmit={(event) => {

            event.preventDefault();
            

            setIsLoggedIn(true)


        }}>
            <form className="loginForm">
                <label className="formLabel">
                    Username: 
                    <input type="text" value={username} name="username" onChange={(event)=>{

                        setUsername(event.target.value)
                        console.log('this is in login')

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