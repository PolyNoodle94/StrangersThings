import React from 'react'
import { logUserIn } from '../api-adapters';
import { Link, useNavigate } from 'react-router-dom'

const Login = (props) => {
    const username = props.username;
    const password = props.password; 
    const setUsername = props.setUsername
    const setPassword = props.setPassword
    const setIsLoggedIn = props.setIsLoggedIn


    const navigate = useNavigate()

    return(

        

        <div className="loginPage" onSubmit={async (event) => {

            event.preventDefault();
            let result = await logUserIn(username, password) 
            if (result) {

                setIsLoggedIn(true)
                localStorage.setItem("token", result)
                navigate("/", {replace: true})  

            } else {
                alert("Invalid login credentials")
            }



        }}>

            {console.log("login is being rerendered")}

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