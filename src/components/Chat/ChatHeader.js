import React from 'react';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core';

function ChatHeader() {
  return (
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
  );
}

export default ChatHeader;
