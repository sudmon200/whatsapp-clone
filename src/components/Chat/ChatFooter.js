import React, { useState } from 'react';
import axios from '../../api/';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

function ChatFooter() {
  const [input, setInput] = useState(''); //@TodO

  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post('/api/v1/messages/new', {
      message: input,
      name: 'John Doe',
      timestamp: 'Now',
      received: false,
    });

    setInput('');
  };

  return (
    <div className='chat__footer'>
      <InsertEmoticonIcon />
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type='text'
          placeholder='Type a message'
        />
        <button onClick={sendMessage} type='submit'>
          Send a message
        </button>
      </form>
      <MicIcon />
    </div>
  );
}

export default ChatFooter;
