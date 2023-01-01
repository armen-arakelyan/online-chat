import React, { useCallback, useState } from 'react';
import { io } from 'socket.io-client';
import ChatBox from './ChatBox';
import './App.css';

const socket = io('http://localhost:8080');

const Chat = ({ name }) => {
  const [value, setValue] = useState('');

  const sendMessage = useCallback(() => {
    socket.emit('message', { name, value });
    setValue('');
  }, [name, value]);

  return (
    <div className="App">
      <input value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
      <ChatBox socket={socket} name={name} />
    </div>
  );
}

export default Chat;
