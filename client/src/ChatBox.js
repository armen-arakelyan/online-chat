import React, { useEffect, useState } from 'react';

const ChatBox = ({ socket, name }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        socket.on('newMsg', msg => {
            setData(prev => [...prev, msg])
            const data = JSON.parse(localStorage.getItem('messages')) || [];
            localStorage.setItem('messages', JSON.stringify([...data, msg]))
        })
    }, [socket])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('messages')) || [];
        setData(data)
    }, [])

    return (
        <div className='allMessages'>
        <h1>All messages</h1>
        {
            data.length > 0 ? data.map((itm, i) => <div key={i} className="msg"
             style={{ background: name === itm.name ? 'rebeccapurple' : 'red' }}>
                {itm.name}-{itm.value}
            </div>) : 'No messages'
        }
        </div>
    )
}

export default ChatBox;