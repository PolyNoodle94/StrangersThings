import React from 'react'

const MessageCard = (props) => {
    const message = props.message;

    return (
        <div>
            <h1><strong>From: </strong>{message.fromUser.username}</h1>
            <h3>{message.content}</h3>
            <p><strong>Post: </strong>{message.post.title}</p>
        </div>
    )
}

export default MessageCard