import React from "react"
import { sendMessage } from "../api-adapters";

const SendMessageForm = (props) => {
    //Declare state variables from props
    const sendMessageToID = props.sendMessageToID;
    const setSendMessageToID = props.setSendMessageToID
    const postTitle = props.postTitle;
    const getUserData = props.getUserData;

    //Declare message variable to store user input 
    let message = "";

    return (
        //Returns a message form which on submit, sends a message to the post author, resets the message form, and closes it 
        <div id="messageFormContainer">
            <form id="sendMessageForm" className="submissionForm" onSubmit={async (event) => {
                event.preventDefault()
                await sendMessage(sendMessageToID, message)
                document.getElementById("sendMessageForm").reset();
                setSendMessageToID("")
                message = "";

                //Only calls getUserData because if a message is sent from the posts tab, nothing on the display should change. However, if sent from the profile page, the message displays
                // should rerender to display the newly sent message. 
                if (getUserData) {
                    getUserData();
                }
            }}>
                <h2>Send Message:</h2>
                <label>
                    Post: 
                    {" " + postTitle}
                </label>
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