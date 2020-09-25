import React from 'react';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { Avatar, IconButton } from '@material-ui/core';

function Chat() {
  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar />
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
        <p className='chat__message'>
          <span className='chat__name'>Sudip</span>
          Chat message is appearing here
          <span className='chat__timestamp'>{new Date().toUTCString()}</span>
        </p>
        <p className='chat__message'>
          <span className='chat__name'>Sudip</span>
          Chat message is appearing here
          <span className='chat__timestamp'>{new Date().toUTCString()}</span>
        </p>
        <p className='chat__message chat__receiver'>
          <span className='chat__name'>Sudip</span>
          Chat message is appearing here
          <span className='chat__timestamp'>{new Date().toUTCString()}</span>
        </p>
        <p className='chat__message'>
          <span className='chat__name'>Sudip</span>
          Chat message is appearing here
          <span className='chat__timestamp'>{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className='chat__footer'>
        <InsertEmoticonIcon />
        <form>
          <input type='text' placeholder='Type a message' />
          <button type='submit'> Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
