import React from 'react'

const MessageCard = (props) => {
    //Declares states passed down through props
    const sendMessageToID = props.sendMessageToID;
    const setSendMessageToID = props.setSendMessageToID;
    const setPostTitle = props.setPostTitle;
    
    //Declares a variable storing the content of the message sent from or to a post
    const message = props.message;

    return (
        <div className='messageCard'>
            {/* Checks if the user is the author, and depending on the boolean value displays either From: Me or From: whateva usah ya catch my drift?  */}
            {
                message.fromUser.username === localStorage.getItem("username")
                ? <h1 className='messageCardInfo'><strong>From: Me</strong></h1>
                : <h1 className='messageCardInfo'><strong>From: </strong>{message.fromUser.username}</h1>
            }

            {/* Displays additional message information */}
            <h3 className='messageCardInfo'>{message.content}</h3>
            <p className='messageCardInfo'><strong>Post: </strong>{message.post.title}</p>

            {/* Conditionally displays the send message button depending on if the user is the author of the message */}
            { (message.fromUser.username === localStorage.getItem("username")) && <div  className='messageCardInfo'><button onClick={() => {
                //Consider setting sendMessageToId to "" on the onSubmit for the message form 
                if (sendMessageToID === message.post._id) {
                    setSendMessageToID("")
                    setPostTitle("")
                }
                else {
                    setSendMessageToID(message.post._id)
                    setPostTitle(message.post.title)
                }
            }}>Send Message</button></div> }
        </div>
    )
}

export default MessageCard