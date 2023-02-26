import React from 'react'

const MessageCard = (props) => {
    const message = props.message;
    const sendMessageToID = props.sendMessageToID;
    const setSendMessageToID = props.setSendMessageToID;
    const setPostTitle = props.setPostTitle;

    return (
        <div className='messageCard'>
            {
                message.fromUser.username === localStorage.getItem("username")
                ? <h1 className='messageCardInfo'><strong>From: Me</strong></h1>
                : <h1 className='messageCardInfo'><strong>From: </strong>{message.fromUser.username}</h1>
            }
            <h3 className='messageCardInfo'>{message.content}</h3>
            <p className='messageCardInfo'><strong>Post: </strong>{message.post.title}</p>
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