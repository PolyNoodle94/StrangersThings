import React from "react"
import { sendMessage } from "../api-adapters";

const SendMessageForm = (props) => {
    const sendMessageToID = props.sendMessageToID;

    let message = "";

    return (
        <div id="messageFormContainer">
            <form id="sendMessageForm" className="submissionForm" onSubmit={async (event) => {
                event.preventDefault()
                await sendMessage(sendMessageToID, message)
                document.getElementById("sendMessageForm").reset();
                message = "";
            }}>

                <label className="formLabel">
                    Message: 
                    <input type="text" defaultValue={message} name="message" onChange={(event)=>{

                        message = event.target.value

                    }}></input>
                </label>
                <input className="butt" type="submit" value="Send Message" ></input>

            </form>
        </div>
    )
}

export default SendMessageForm