import React, { useState } from 'react';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { Avatar, IconButton } from '@material-ui/core';
import ChatItem from './ChatItem';
import axios from '../axios';

function Chat({ messages }) {
  let [input, setInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post('/api/v1/messages/new', {
      message: input,
      name: 'John Doe',
      timestamp: 'Now',
      received: false,
    });

    setInput = '';
  };

  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar src='https://i1.wp.com/www.techjunkie.com/wp-content/uploads/2018/09/do_snapchat_groups_affect_your_best_friends.jpg' />
        <div className='chat__headerInfo'>
          <h2>Chat Header</h2>
          <p>Last seen at</p>
        </div>
        <div className='chat__headerRight'>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className='chat__body'>
        {messages?.map((message, i) => (
          <ChatItem message={message} key={i} />
        ))}
      </div>
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
    </div>
  );
}

export default Chat;
