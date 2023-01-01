import React, { useState } from 'react';
import Chat from './Chat';

const Join = () => {
    const [name, setName] = useState('');
    const [haveName, setHaveName] = useState(false);

    const join = () => {
        setHaveName(true);
    }

    return (
        <div>
            {haveName ? <Chat name={name} /> :
            <>
                <input onChange={e => setName(e.target.value)} />
                <button onClick={join}>Join</button>
            </>}
        </div>
    )
}

export default Join;