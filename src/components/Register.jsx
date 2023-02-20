import React from "react"
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className="loginPage" onSubmit={(event) => {

            event.preventDefault();
            console.log(username)
            console.log(password)

        }}>
            <form className="loginForm">
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

                <Link to="login"><button className="butt">Click to Register! </button></Link>


            </form>
        </div>
    )
}

export default Register