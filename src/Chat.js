import React, {useEffect, useState} from "react";
import io from 'socket.io-client';

const socket = io('http://localhost:3000');


const Chat = () => {

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);


    useEffect(() => {
        socket.on('chat message', (message) => {
            setMessages([...messages, {user: 'Other', message: message.toString()}]);
        });
    }, [messages]);

    const sendMessage = (event) => {
        event.preventDefault();
        setMessages([...messages, {user: 'Me', message: message.toString()}]);
        socket.emit('chat message', message);
        setMessage('');
    };
    return (
        <div className="chat-container">


            {messages.filter(m => m.message !== '' && m.user !== '').map((message, index) => (
                <div className={`messages large ${message.user === 'Me' ? "" : "right"}`}>
                    <div key={index} className="message">
                        {message.user === 'Me' ? "" : message.message + '\u00A0\u00A0'}
                        <div className="dot center"><div className="mt-1">{message.user[0]}</div></div>
                        {message.user === 'Me' ? '\u00A0\u00A0' + message.message : ""}
                    </div>
                </div>
            ))}

            <form onSubmit={sendMessage}>
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                />
                <button type="submit">Send</button>
            </form>

        </div>

    )
}

export default Chat;